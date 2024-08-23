'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { Metadata } from "next"




export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [message, setMessage] = useState("");

    const userRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("");

        try {
            const formData = new FormData(event.currentTarget);
            const jsonData = Object.fromEntries(formData);
            console.log(jsonData);

            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            };

            const req = await fetch('http://localhost:1337/api/auth/local/register', reqOptions);
            const res = await req.json();

            if (res.error) {
                setMessage(res.error.message);
                return;
            }

            if (res.jwt && res.user) {
                setMessage('Successfull Registration');
            }
        } catch (error) {
            setMessage("An unexpected error occurred. Please try again later.");
        };
    };

    return (
        <main className="flex min-h-screen p-6 items-center justify-center gap-20">
            <div className="w-[400px] h-[500px] flex flex-col items-center rounded-lg">
                <h1 className="font-bold text-2xl mt-4">
                    Sign Up:
                </h1>
                <div className="h-full w-full max-w-xs">
                    <form onSubmit={userRegister}>
                        <br />
                        <button type="submit" className="flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                            <Image
                                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                alt="google image"
                                width={30}
                                height={30}
                            />
                            Sign up with Google
                        </button>
                        <br />

                        <div className="w-full h-10 flex items-center justify-between">
                            <div className="h-px w-2/5 my-8 bg-black border-0"></div>
                            or
                            <div className="h-px w-2/5 my-8 bg-black border-0"></div>
                        </div>
                        <input type="text" id="username" name="username" placeholder="Username" required className=" border-b border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <br />
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" id="firstname" name="firstname" placeholder="First Name" required className="border-b border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            <input type="text" id="lastname" name="lastname" placeholder="Last Name" required className="border-b border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <br />
                        <input type="email" id="email" name="email" placeholder="Email" required className=" border-b border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <br />
                        {/* <input type="password" id="password" placeholder="Password" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <br /> */}
                        <div className="w-full relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Password"
                                name="password"
                                required
                                className="border-b border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                {
                                    showPassword
                                        ? <Image src="https://img.icons8.com/?size=100&id=7278&format=png&color=000000" alt="Hide" width={25} height={25} />
                                        : <Image src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="Show" width={25} height={25} />
                                }
                            </button>
                        </div>
                        <br />
                        <button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            Sign Up
                        </button>
                    </form>
                    <br />
                    <p>Already have an account? <Link href="/" className="underline">Sign In</Link></p>
                    <br /><br />
                    <div> {message} </div>
                </div>
            </div>
            <div className="w-[400px] h-[500px] flex flex-col items-start justify-center">
                <h1 className="font-bold text-xl">
                    Explore Gemello Content
                </h1>
                <br /><br />
                <p className="text-sm leading-6 w-3/4">
                    With a Gemello account, you have immediate access to a suite of tools that allow you to measure, edit, and share your 3D model. Signing up is fast and simple.
                </p>
            </div>
        </main>
    );
}