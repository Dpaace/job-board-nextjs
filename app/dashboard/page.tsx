

'use client';

import { Metadata } from "next";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import NewIndexPage from "../ui/gemello/newindex";
import GHome from "../ui/gemello/ghome";

// Define an interface for Assetbundle
interface AssetBundle {
    id: number;
    name: string;
    url: string;
}

// Define an interface for Gemellos
interface Gemello {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    assetbundle: AssetBundle[];
}

// Define an interface for UserData
interface UserData {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstname: string;
    lastname: string;
    gemellos: Gemello[]; // Updated to include gemellos
}

// export const metadata: Metadata = {
//   title: "Gemello | Dashboard"
// }

export default function Page() {
    const [userData, setUserData] = useState<UserData | null>(null); // Use the UserData interface
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    // Fetch user data from the API
    const fetchUserData = async () => {
        const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage

        if (!token) {
            router.push('/'); // If no token, redirect to login
            return;
        }

        try {
            const reqOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };

            // Updated URL with populate query parameter
            const req = await fetch('http://localhost:1337/api/users/me?populate[gemellos][populate]=assetbundle', reqOptions);
            const res: UserData = await req.json(); // Type the response as UserData

            if ((res as any).error) {
                setError((res as any).error.message);
                router.push('/'); // Redirect to login on error
                return;
            }

            setUserData(res);
        } catch (error) {
            setError('Failed to fetch user data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch user data when the component mounts
    }, []);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the JWT token
        router.push('/'); // Redirect to login page
    };

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (error) {
        return <div className="text-red-500">{error}</div>; // Display error message
    }

    const handleExtract = async (zipUrl: string, fileName: string) => {
        try {
            const response = await fetch('/api/extract-zip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ zipUrl, fileName }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // Show success message
            } else {
                alert(data.error); // Show error message
            }
        } catch (error) {
            alert('An error occurred while extracting the zip file.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl mb-4">
                Dashboard Home Page
            </h1>
            {userData && (
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>First Name:</strong> {userData.firstname}</p>
                    <p><strong>Last Name:</strong> {userData.lastname}</p>
                </div>
            )}
            {userData?.gemellos && userData.gemellos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userData.gemellos.map((gemello) => (
                        <div key={gemello.id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="font-bold text-xl mb-2">{gemello.title}</h2>
                            <p><strong>ID:</strong> {gemello.id}</p>
                            {gemello.assetbundle && gemello.assetbundle.length > 0 && (
                                <ul>
                                    {gemello.assetbundle.map((asset) => (
                                        <>
                                            <li key={asset.id}>URL:
                                                <a href={`http://localhost:1337${asset.url}`} target="_blank" className="text-blue-500 underline">
                                                    {asset.url}
                                                </a>
                                                <button
                                                    onClick={() => handleExtract(`http://localhost:1337${asset.url}`, `extracted_${gemello.id}`)}
                                                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Extract
                                                </button>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <NewIndexPage fileURL="/extracted_26/Assetbundle"/>
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
}
