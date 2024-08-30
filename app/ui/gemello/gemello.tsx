// "use client";

// import JSZip from "jszip";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import OuterApp from "./outerapp";

// // Define the type for the Gemello data structure
// interface AssetFile {
//     id: number;
//     attributes: {
//         name: string;
//         url: string;
//     };
// }

// interface Gemello {
//     id: number;
//     attributes: {
//         title: string;
//         owner: string;
//         createdAt: string;
//         updatedAt: string;
//         publishedAt: string;
//         assetbundle: {
//             data: AssetFile[];
//         };
//     };
// }

// async function getGemello(): Promise<Gemello[]> {
//     const res = await fetch("http://localhost:1337/api/gemellos?populate=*");
//     const data = await res.json();
//     return data.data;
// }

// export default function Gemello() {
//     const [gemello, setGemello] = useState<Gemello[]>([]);
//     const [files, setFiles] = useState<string[]>([]);

//     useEffect(() => {
//         // Fetch the gemello data
//         const fetchGemello = async () => {
//             const data = await getGemello();
//             setGemello(data);

//             // Extract the zip file content if available
//             if (data.length > 0 && data[0].attributes.assetbundle.data.length > 0) {
//                 const zipUrl = `http://localhost:1337${data[0].attributes.assetbundle.data[0].attributes.url}`;
//                 await extractZip(zipUrl);
//             }
//         };

//         fetchGemello();
//     }, []);

//     // Function to extract zip and get its file contents
//     const extractZip = async (zipUrl: string): Promise<void> => {
//         try {
//             // Fetch the zip file
//             const response = await fetch(zipUrl);
//             const blob = await response.blob();

//             // Load zip file using JSZip
//             const zip = await JSZip.loadAsync(blob);

//             // Iterate through the files and extract the contents
//             const extractedFiles: string[] = [];
//             zip.forEach((relativePath) => {
//                 extractedFiles.push(relativePath);
//             });

//             setFiles(extractedFiles);
//         } catch (error) {
//             console.error("Error extracting zip file:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center w-full">
//             <div className="flex flex-col w-full h-svh items-center">
//                 {gemello.map((content) => (
//                     <div
//                         key={content.id}
//                         className="flex flex-col items-center w-full h-auto bg-green-500 rounded-md my-5 p-20"
//                     >
//                         <div className="flex items-center gap-10">
//                             <h1 className="font-bold text-3xl">
//                                 {content.attributes.title}
//                             </h1>
//                             <h2 className="font-medium text-2xl">
//                                 By: {content.attributes.owner}
//                             </h2>
//                         </div>
//                         {/* Display extracted file names */}
//                         <div className="flex flex-col items-center mt-5">
//                             <h2 className="font-bold text-2xl">Gemello Extracted Files:</h2>
//                             <ul className="list-disc">
//                                 {files.map((file, index) => (
//                                     <li className="list-none" key={index}>{file}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <OuterApp />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


'use client';

import JSZip from 'jszip';
import { useEffect, useState } from 'react';
import OuterApp from './outerapp';
import IndexPage from '.';

// Define the type for the Gemello data structure
interface AssetFile {
    id: number;
    attributes: {
        name: string;
        url: string;
    };
}

interface Gemello {
    id: number;
    attributes: {
        title: string;
        owner: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        assetbundle: {
            data: AssetFile[];
        };
    };
}

async function getGemello(): Promise<Gemello[]> {
    const res = await fetch('http://localhost:1337/api/gemellos?populate=*');
    const data = await res.json();
    return data.data;
}

export default function Gemello() {
    const [gemello, setGemello] = useState<Gemello[]>([]);
    const [files, setFiles] = useState<{ name: string; url: string }[]>([]);

    const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

    useEffect(() => {
        // Fetch the gemello data
        const fetchGemello = async () => {
            const data = await getGemello();
            setGemello(data);

            // Extract the zip file content if available
            if (data.length > 0 && data[0].attributes.assetbundle.data.length > 0) {
                const zipUrl = `http://localhost:1337${data[0].attributes.assetbundle.data[0].attributes.url}`;
                await extractZip(zipUrl);
            }
        };

        fetchGemello();
    }, []);

    // Function to extract zip and get its file contents
    const extractZip = async (zipUrl: string): Promise<void> => {
        try {
            // Fetch the zip file
            const response = await fetch(zipUrl);
            const blob = await response.blob();

            // Load zip file using JSZip
            const zip = await JSZip.loadAsync(blob);

            // Extract files and create object URLs
            const extractedFiles: { name: string; url: string }[] = [];
            await Promise.all(
                Object.keys(zip.files).map(async (fileName) => {
                    const file = zip.files[fileName];
                    if (!file.dir) {
                        // Extract the file content
                        const contentBlob = await file.async('blob');
                        const url = URL.createObjectURL(contentBlob);
                        extractedFiles.push({ name: fileName, url });
                    }
                })
            );

            setFiles(extractedFiles);
        } catch (error) {
            console.error('Error extracting zip file:', error);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-full h-svh items-center">
                {gemello.map((content) => (
                    <div
                        key={content.id}
                        className="flex flex-col items-center w-full h-auto bg-green-500 rounded-md my-5 p-20"
                    >
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl">
                                {content.attributes.title}
                            </h1>
                            <h2 className="font-medium text-2xl">
                                By: {content.attributes.owner}
                            </h2>
                        </div>
                        {/* Display extracted file names and provide access to content */}
                        {/* <div className="flex flex-col items-center mt-5">
                            <h2 className="font-bold text-2xl">Gemello Extracted Files:</h2>
                            <ul className="list-disc">
                                {files.map((file, index) => (
                                    <li key={index} className="list-none">
                                        <a
                                            href={file.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        {/* <OuterApp /> */}
                        <IndexPage />

                    </div>
                ))}
            </div>
        </div>
    );
}
