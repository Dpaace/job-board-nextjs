// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const NewIndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [assetBundleFiles, setAssetBundleFiles] = useState<string[]>([]);

//     useEffect(() => {
//         // Fetch asset bundle files from the API
//         const fetchAssetBundles = async () => {
//             try {
//                 const response = await fetch('http://localhost:1337/api/gemello-news?populate=*');
//                 const data = await response.json();

//                 const bundles = data.data[0].attributes.assetbundle.data.map((file: any) => {
//                     return file.attributes.url;  // Collecting URLs from the API response
//                 });

//                 setAssetBundleFiles(bundles);
//             } catch (error) {
//                 console.error('Error fetching asset bundles:', error);
//             }
//         };

//         fetchAssetBundles();
//     }, []);

//     useEffect(() => {
//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: '/Gemello/Build/WebGLBuild.data',
//             frameworkUrl: '/Gemello/Build/WebGLBuild.framework.js',
//             codeUrl: '/Gemello/Build/WebGLBuild.wasm',
//             streamingAssetsUrl: '/Gemello/StreamingAssets',
//             companyName: 'SmartScape',
//             productName: 'Gemello',
//             productVersion: '0.1',
//         };

//         console.log('Unity config:', config); // Log the Unity config for debugging

//         // Show loading bar
//         if (progressBarRef.current) {
//             progressBarRef.current.style.display = 'block';
//         }

//         // Load Unity loader script dynamically
//         const loaderUrl = '/Gemello/Build/WebGLBuild.loader.js';

//         console.log('Loading Unity loader script from:', loaderUrl); // Log loader URL

//         const script = document.createElement('script');
//         script.src = loaderUrl;

//         script.onload = () => {
//             console.log('Unity loader script loaded successfully.');
//             // Initialize Unity instance
//             // @ts-ignore
//             createUnityInstance(canvasRef.current, config, (progress: number) => {
//                 if (progressBarRef.current) {
//                     progressBarRef.current.style.width = `${100 * progress}%`;
//                 }
//             })
//                 .then((unityInstance: any) => {
//                     // Hide loading bar
//                     if (progressBarRef.current) {
//                         progressBarRef.current.style.display = 'none';
//                     }

//                     // Set fullscreen button behavior
//                     if (fullscreenButtonRef.current) {
//                         fullscreenButtonRef.current.onclick = () => {
//                             unityInstance.SetFullscreen(1);
//                         };
//                     }

//                     // Fetch asset bundle files from API response
//                     const contentsBaseURL = assetBundleFiles.length > 0 ? assetBundleFiles[0] : '';

//                     console.log('Contents base URL:', contentsBaseURL);

//                     const action = 'StartGetData';
//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [assetBundleFiles]);

//     return (
//         <div id="unity-container" className="unity-desktop">
//             <canvas
//                 ref={canvasRef}
//                 id="unity-canvas"
//                 className="w-[1000px] h-[600px] z-20"
//             ></canvas>
//             <div
//                 id="unity-loading-bar"
//                 ref={progressBarRef}
//                 className="flex items-center justify-center bg-gray-200"
//             >
//                 <div id="gemello-logo"></div>
//                 <div id="unity-progress-bar-empty" className="relative w-full">
//                     <div
//                         id="unity-progress-bar-full"
//                         className="absolute bg-blue-500 h-full"
//                     ></div>
//                 </div>
//             </div>
//             <div id="unity-warning" ref={warningBannerRef}></div>
//             <div id="unity-footer" className="flex items-center justify-between">
//                 <div id="unity-webgl-logo"></div>
//                 <div
//                     id="unity-fullscreen-button"
//                     ref={fullscreenButtonRef}
//                     className="cursor-pointer"
//                 ></div>
//                 <div id="unity-build-title">Gemello Local New</div>
//             </div>
//         </div>
//     );
// };

// export default NewIndexPage;


// 'use client';

// import { useEffect, useRef, useState } from 'react';

// const NewIndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [assetBundleFiles, setAssetBundleFiles] = useState<string[]>([]);

//     useEffect(() => {
//         // Fetch asset bundle files from the API
//         const fetchAssetBundles = async () => {
//             try {
//                 const response = await fetch('http://localhost:1337/api/gemello-news?populate=*');
//                 const data = await response.json();

//                 // Ensure URLs are absolute and correctly formatted
//                 const bundles = data.data[0].attributes.assetbundle.data.map((file: any) => {
//                     const baseURL = 'http://localhost:1337'; // Replace with your Strapi base URL
//                     return `${baseURL}${file.attributes.url}`;  // Combine base URL with file path
//                 });

//                 setAssetBundleFiles(bundles);
//                 console.log('Fetched asset bundle files:', bundles); // Debug log
//             } catch (error) {
//                 console.error('Error fetching asset bundles:', error);
//             }
//         };

//         fetchAssetBundles();
//     }, []);

//     useEffect(() => {
//         if (assetBundleFiles.length === 0) return; // Ensure there are asset bundle files to use

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: '/Gemello/Build/WebGLBuild.data',
//             frameworkUrl: '/Gemello/Build/WebGLBuild.framework.js',
//             codeUrl: '/Gemello/Build/WebGLBuild.wasm',
//             streamingAssetsUrl: '/Gemello/StreamingAssets',
//             companyName: 'SmartScape',
//             productName: 'Gemello',
//             productVersion: '0.1',
//         };

//         console.log('Unity config:', config); // Log the Unity config for debugging

//         // Show loading bar
//         if (progressBarRef.current) {
//             progressBarRef.current.style.display = 'block';
//         }

//         // Load Unity loader script dynamically
//         const loaderUrl = '/Gemello/Build/WebGLBuild.loader.js';

//         console.log('Loading Unity loader script from:', loaderUrl); // Log loader URL

//         const script = document.createElement('script');
//         script.src = loaderUrl;

//         script.onload = () => {
//             console.log('Unity loader script loaded successfully.');
//             // Initialize Unity instance
//             // @ts-ignore
//             createUnityInstance(canvasRef.current, config, (progress: number) => {
//                 if (progressBarRef.current) {
//                     progressBarRef.current.style.width = `${100 * progress}%`;
//                 }
//             })
//                 .then((unityInstance: any) => {
//                     // Hide loading bar
//                     if (progressBarRef.current) {
//                         progressBarRef.current.style.display = 'none';
//                     }

//                     // Set fullscreen button behavior
//                     if (fullscreenButtonRef.current) {
//                         fullscreenButtonRef.current.onclick = () => {
//                             unityInstance.SetFullscreen(1);
//                         };
//                     }

//                     // Iterate through the asset bundle files and use them as needed
//                     // assetBundleFiles.forEach((fileUrl) => {
//                     //     console.log('Sending file URL to Unity:', fileUrl);

//                     //     // Use the Unity `SendMessage` API to pass the URL to Unity
//                     //     unityInstance.SendMessage('Loader', 'StartGetData', fileUrl);
//                     // });
//                     // unityInstance.SendMessage('Loader', 'StartGetData', 'http://127.0.0.1:5500/Assetbundle');
//                     unityInstance.SendMessage('Loader', 'StartGetData', 'http://localhost:1337/uploads/AssetbundleFiles');
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [assetBundleFiles]);



//     return (
//         <div id="unity-container" className="unity-desktop">
//             <canvas
//                 ref={canvasRef}
//                 id="unity-canvas"
//                 className="w-[1000px] h-[600px] z-20"
//             ></canvas>
//             <div
//                 id="unity-loading-bar"
//                 ref={progressBarRef}
//                 className="flex items-center justify-center bg-gray-200"
//             >
//                 <div id="gemello-logo"></div>
//                 <div id="unity-progress-bar-empty" className="relative w-full">
//                     <div
//                         id="unity-progress-bar-full"
//                         className="absolute bg-blue-500 h-full"
//                     ></div>
//                 </div>
//             </div>
//             <div id="unity-warning" ref={warningBannerRef}></div>
//             <div id="unity-footer" className="flex items-center justify-between">
//                 <div id="unity-webgl-logo"></div>
//                 <div
//                     id="unity-fullscreen-button"
//                     ref={fullscreenButtonRef}
//                     className="cursor-pointer"
//                 ></div>
//                 <div id="unity-build-title">Gemello Local New</div>
//             </div>
//         </div>
//     );
// };

// export default NewIndexPage;


'use client';

import { useEffect, useRef, useState } from 'react';
import JSZip from 'jszip';

const NewIndexPage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
    const warningBannerRef = useRef<HTMLDivElement | null>(null);
    const [extractedFilesBaseUrl, setExtractedFilesBaseUrl] = useState<string | null>(null);

    useEffect(() => {
        // Fetch and extract the zip file from the server
        const fetchAndExtractZip = async () => {
            try {
                const response = await fetch('http://localhost:1337/uploads/Assetbundle_16a8419d90.zip');
                if (!response.ok) throw new Error('Failed to fetch zip file');

                const blob = await response.blob();

                const zip = await JSZip.loadAsync(blob);

                // Create an object URL for each extracted file
                const files: Record<string, string> = {};
                for (const fileName of Object.keys(zip.files)) {
                    const fileData = await zip.file(fileName)?.async('blob');
                    if (fileData) {
                        const fileUrl = URL.createObjectURL(fileData);
                        files[fileName] = fileUrl;
                    }
                }

                // Assuming we need the base URL of the extracted files
                setExtractedFilesBaseUrl(files['AssetbundleFiles']);
                console.log('Extracted files:', files);

            } catch (error) {
                console.error('Error extracting zip file:', error);
            }
        };

        fetchAndExtractZip();
    }, []);

    useEffect(() => {
        if (!extractedFilesBaseUrl) {
            console.log("Did it reach here!!!")
            return
        };  // Wait until the extracted files are ready

        // Unity configuration object with dynamic paths
        const config = {
            dataUrl: '/Gemello/Build/WebGLBuild.data',
            frameworkUrl: '/Gemello/Build/WebGLBuild.framework.js',
            codeUrl: '/Gemello/Build/WebGLBuild.wasm',
            streamingAssetsUrl: '/Gemello/StreamingAssets',
            companyName: 'SmartScape',
            productName: 'Gemello',
            productVersion: '0.1',
        };

        console.log('Unity config:', config); // Log the Unity config for debugging

        // Show loading bar
        if (progressBarRef.current) {
            progressBarRef.current.style.display = 'block';
        }

        // Load Unity loader script dynamically
        const loaderUrl = '/Gemello/Build/WebGLBuild.loader.js';

        console.log('Loading Unity loader script from:', loaderUrl); // Log loader URL

        const script = document.createElement('script');
        script.src = loaderUrl;

        script.onload = () => {
            console.log('Unity loader script loaded successfully.');
            // Initialize Unity instance
            // @ts-ignore
            createUnityInstance(canvasRef.current, config, (progress: number) => {
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = `${100 * progress}%`;
                }
            })
                .then((unityInstance: any) => {
                    // Hide loading bar
                    if (progressBarRef.current) {
                        progressBarRef.current.style.display = 'none';
                    }

                    // Set fullscreen button behavior
                    if (fullscreenButtonRef.current) {
                        fullscreenButtonRef.current.onclick = () => {
                            unityInstance.SetFullscreen(1);
                        };
                    }

                    // Pass the extracted files' base URL to Unity
                    unityInstance.SendMessage('Loader', 'StartGetData', extractedFilesBaseUrl || '');
                })
                .catch((message: string) => {
                    alert(message);
                });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [extractedFilesBaseUrl]);




    return (
        <div id="unity-container" className="unity-desktop">
            <canvas
                ref={canvasRef}
                id="unity-canvas"
                className="w-[1000px] h-[600px] z-20"
            ></canvas>
            <div
                id="unity-loading-bar"
                ref={progressBarRef}
                className="flex items-center justify-center bg-gray-200"
            >
                <div id="gemello-logo"></div>
                <div id="unity-progress-bar-empty" className="relative w-full">
                    <div
                        id="unity-progress-bar-full"
                        className="absolute bg-blue-500 h-full"
                    ></div>
                </div>
            </div>
            <div id="unity-warning" ref={warningBannerRef}></div>
            <div id="unity-footer" className="flex items-center justify-between">
                <div id="unity-webgl-logo"></div>
                <div
                    id="unity-fullscreen-button"
                    ref={fullscreenButtonRef}
                    className="cursor-pointer"
                ></div>
                <div id="unity-build-title">Gemello Local New</div>
            </div>
        </div>
    );
};

export default NewIndexPage;

