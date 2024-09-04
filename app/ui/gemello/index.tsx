// 'use client';

// import { useEffect, useRef } from 'react';

// const Index = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         // Function to show warning or error banners
//         function unityShowBanner(msg: string, type: string) {
//             if (!warningBannerRef.current) return;

//             const div = document.createElement('div');
//             div.innerHTML = msg;

//             if (type === 'error') {
//                 div.style.cssText = 'background: red; padding: 10px;';
//             } else {
//                 if (type === 'warning') {
//                     div.style.cssText = 'background: yellow; padding: 10px;';
//                 }
//                 setTimeout(() => {
//                     warningBannerRef.current?.removeChild(div);
//                     updateBannerVisibility();
//                 }, 5000);
//             }

//             warningBannerRef.current.appendChild(div);
//             updateBannerVisibility();
//         }

//         // Function to update banner visibility
//         function updateBannerVisibility() {
//             if (warningBannerRef.current) {
//                 warningBannerRef.current.style.display =
//                     warningBannerRef.current.children.length ? 'block' : 'none';
//             }
//         }

//         // Unity configuration object
//         const buildUrl = 'Build';
//         const loaderUrl = `${buildUrl}/WebGLBuild.loader.js`;
//         const config = {
//             dataUrl: `${buildUrl}/WebGLBuild.data`,
//             frameworkUrl: `${buildUrl}/WebGLBuild.framework.js`,
//             codeUrl: `${buildUrl}/WebGLBuild.wasm`,
//             streamingAssetsUrl: 'StreamingAssets',
//             companyName: 'SmartScape',
//             productName: 'Gemello',
//             productVersion: '0.1',
//             showBanner: unityShowBanner,
//         };

//         // Show loading bar
//         if (progressBarRef.current) {
//             progressBarRef.current.style.display = 'block';
//         }

//         // Load Unity loader script dynamically
//         const script = document.createElement('script');
//         script.src = loaderUrl;

//         script.onload = () => {
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

//                     // Send message to Unity instance
//                     const action = 'StartGetData';
//                     const contentsBaseURL = 'http://127.0.0.1:5500/Assetbundle/';
//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);

//                     // Initialize SDK interface
//                     // @ts-ignore
//                     SDKitIF.init(unityInstance);
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         // Append the loader script to the body
//         document.body.appendChild(script);

//         // Clean up script on component unmount
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <div id="unity-container" className="unity-desktop">
//             <canvas
//                 ref={canvasRef}
//                 id="unity-canvas"
//                 width={1920}
//                 height={1080}
//                 className="absolute top-0 left-0"
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
//                 <div id="unity-build-title">Gemello</div>
//             </div>
//         </div>
//     );
// };

// export default Index;


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const IndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

//     useEffect(() => {

//         // Fetch and extract the zip file
//         const fetchAndExtractZip = async (zipUrl: string) => {
//             try {
//                 const response = await fetch(zipUrl);
//                 const blob = await response.blob();
//                 const zip = await JSZip.loadAsync(blob);
//                 const fileMap = new Map<string, string>();

//                 zip.forEach(async (relativePath, file) => {
//                     const fileBlob = await file.async('blob');
//                     const objectUrl = URL.createObjectURL(fileBlob);
//                     fileMap.set(relativePath, objectUrl);
//                 });

//                 setExtractedFiles(fileMap);
//             } catch (error) {
//                 console.error('Error extracting zip file:', error);
//             }
//         };

//         // Fetch zip and extract files
//         fetchAndExtractZip('http://localhost:1337/uploads/Gemello_Local_New_8904fa8f8b.zip'); // Replace with actual URL of your zip file

//     }, []);

//     useEffect(() => {
//         if (extractedFiles.size === 0) {
//             console.log("So I guess it has returned")
//             return;
//         }

//         console.log("Did it use the useEffect!!!")

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: extractedFiles.get('WebGLBuild.data') || '', // Fetch from extractedFiles Map
//             frameworkUrl: extractedFiles.get('WebGLBuild.framework.js') || '',
//             codeUrl: extractedFiles.get('WebGLBuild.wasm') || '',
//             streamingAssetsUrl: 'StreamingAssets', // Update path if necessary
//             companyName: 'SmartScape',
//             productName: 'Gemello',
//             productVersion: '0.1',
//         };

//         // Show loading bar
//         if (progressBarRef.current) {
//             progressBarRef.current.style.display = 'block';
//         }

//         // Load Unity loader script dynamically
//         const loaderUrl = extractedFiles.get('WebGLBuild.loader.js') || '';
//         const script = document.createElement('script');
//         script.src = loaderUrl;

//         script.onload = () => {
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

//                     // Send message to Unity instance
//                     const action = 'StartGetData';
//                     const contentsBaseURL = `${extractedFiles.get('Assetbundle/') || ''}`; // Adjust if needed
//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);

//                     // Initialize SDK interface
//                     // @ts-ignore
//                     SDKitIF.init(unityInstance);
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [extractedFiles]);

//     return (
//         <div id="unity-container" className="unity-desktop">
//             <canvas
//                 ref={canvasRef}
//                 id="unity-canvas"
//                 width={800}
//                 height={500}
//                 className="absolute top-0 left-0"
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
//                 <div id="unity-build-title">Gemello Local</div>
//             </div>
//         </div>
//     );
// };

// export default IndexPage;


// fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_38550632a8.zip'); 

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const IndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

//     useEffect(() => {
//         // Function to fetch and extract the zip file
//         const fetchAndExtractZip = async (zipUrl: string) => {
//             try {
//                 console.log('Fetching ZIP file from:', zipUrl);
//                 const response = await fetch(zipUrl);

//                 if (!response.ok) {
//                     console.error('Failed to fetch ZIP file:', response.status, response.statusText);
//                     return;
//                 }

//                 const blob = await response.blob();
//                 const zip = await JSZip.loadAsync(blob);
//                 const fileMap = new Map<string, string>();

//                 console.log('ZIP file fetched successfully. Extracting files...');

//                 // Extract files from the zip and generate object URLs
//                 await Promise.all(
//                     Object.entries(zip.files).map(async ([relativePath, file]) => {
//                         if (!file.dir) { // Ensure we only process files, not directories
//                             const fileBlob = await file.async('blob');
//                             const objectUrl = URL.createObjectURL(fileBlob);
//                             fileMap.set(relativePath, objectUrl);
//                             console.log(`Extracted file: ${relativePath}, URL: ${objectUrl}`);
//                         }
//                     })
//                 );

//                 console.log('Extraction complete. Total files extracted:', fileMap.size);
//                 console.log('Extracted files:', Array.from(fileMap.entries())); // Log all extracted files with their URLs
//                 setExtractedFiles(fileMap);
//             } catch (error) {
//                 console.error('Error extracting zip file:', error);
//             }
//         };

//         // Fetch zip and extract files
//         fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_38550632a8.zip'); // Replace with the actual URL of your zip file
//     }, []);

//     useEffect(() => {
//         if (extractedFiles.size === 0) {
//             console.log('No files extracted. Exiting Unity initialization.');
//             return; // Return early if no files are extracted
//         }

//         console.log('Extracted files available, initializing Unity...');

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.data') || '',
//             frameworkUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.framework.js') || '',
//             codeUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.wasm') || '',
//             streamingAssetsUrl: 'Gemello/StreamingAssets',
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
//         const loaderUrl = extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.loader.js') || '';
//         if (!loaderUrl) {
//             console.error('Loader URL not found in extracted files.');
//             console.log('Available extracted files:', Array.from(extractedFiles.keys())); // Log extracted files for debugging
//             return;
//         }

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

//                     // Send message to Unity instance
//                     const action = 'StartGetData';
//                     const contentsBaseURL = `${extractedFiles.get('Gemello_local/Assetbundle/') || ''}`; // Adjust if needed
//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);

//                     // Initialize SDK interface
//                     //   @ts-ignore
//                     SDKitIF.init(unityInstance);
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [extractedFiles]);

//     return (
//         <div id="unity-container" className="unity-desktop">
//             <canvas
//                 ref={canvasRef}
//                 id="unity-canvas"
//                 // width={200}
//                 // height={200}
//                 className="w-[800px] h-[600px] z-20 "
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
//                 <div id="unity-build-title">Gemello Local</div>
//             </div>
//         </div>
//     );
// };

// export default IndexPage;


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const IndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

//     useEffect(() => {
//         // Function to fetch and extract the zip file
//         const fetchAndExtractZip = async (zipUrl: string) => {
//             try {
//                 console.log('Fetching ZIP file from:', zipUrl);
//                 const response = await fetch(zipUrl);

//                 if (!response.ok) {
//                     console.error('Failed to fetch ZIP file:', response.status, response.statusText);
//                     return;
//                 }

//                 const blob = await response.blob();
//                 const zip = await JSZip.loadAsync(blob);
//                 const fileMap = new Map<string, string>();

//                 console.log('ZIP file fetched successfully. Extracting files...');

//                 // Extract files from the zip and generate object URLs
//                 await Promise.all(
//                     Object.entries(zip.files).map(async ([relativePath, file]) => {
//                         if (!file.dir) { // Ensure we only process files, not directories
//                             const fileBlob = await file.async('blob');
//                             const objectUrl = URL.createObjectURL(fileBlob);
//                             fileMap.set(relativePath, objectUrl);
//                             console.log(`Extracted file: ${relativePath}, URL: ${objectUrl}`);
//                         }
//                     })
//                 );

//                 console.log('Extraction complete. Total files extracted:', fileMap.size);
//                 setExtractedFiles(fileMap);
//             } catch (error) {
//                 console.error('Error extracting zip file:', error);
//             }
//         };

//         // Fetch zip and extract files
//         fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_38550632a8.zip'); // Replace with the actual URL of your zip file
//     }, []);

//     useEffect(() => {
//         if (extractedFiles.size === 0) {
//             console.log('No files extracted. Exiting Unity initialization.');
//             return; // Return early if no files are extracted
//         }

//         console.log('Extracted files available, initializing Unity...');

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.data') || '',
//             frameworkUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.framework.js') || '',
//             codeUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.wasm') || '',
//             streamingAssetsUrl: 'Gemello/StreamingAssets',
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
//         const loaderUrl = extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.loader.js') || '';
//         if (!loaderUrl) {
//             console.error('Loader URL not found in extracted files.');
//             console.log('Available extracted files:', Array.from(extractedFiles.keys())); // Log extracted files for debugging
//             return;
//         }

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

//                     // Send message to Unity instance
//                     const action = 'StartGetData';
//                     // const contentsBaseURL = `${extractedFiles.get('Gemello_local/Assetbundle/') || ''}`;

//                     const contentsBaseURL = extractedFiles.get('Gemello_local/Assetbundle/');
//                     console.log('Contents Base URL:', contentsBaseURL);

//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);

//                     // Initialize SDK interface
//                     if (extractedFiles.get('Gemello_local/Gemello/SDKitIF.js')) {
//                         const sdkScript = document.createElement('script');
//                         sdkScript.src = extractedFiles.get('Gemello_local/Gemello/SDKitIF.js')!;
//                         sdkScript.onload = () => {
//                             // @ts-ignore
//                             SDKitIF.init(unityInstance);
//                             console.log('SDKitIF initialized successfully.');
//                         };
//                         document.body.appendChild(sdkScript);
//                     } else {
//                         console.error('SDKitIF.js file not found in extracted files.');
//                     }
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [extractedFiles]);

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
//                 <div id="unity-build-title">Gemello Local</div>
//             </div>
//         </div>
//     );
// };

// export default IndexPage;

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const IndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

//     useEffect(() => {
//         // Function to fetch and extract the zip file
//         const fetchAndExtractZip = async (zipUrl: string) => {
//             try {
//                 console.log('Fetching ZIP file from:', zipUrl);
//                 const response = await fetch(zipUrl);

//                 if (!response.ok) {
//                     console.error('Failed to fetch ZIP file:', response.status, response.statusText);
//                     return;
//                 }

//                 const blob = await response.blob();
//                 const zip = await JSZip.loadAsync(blob);
//                 const fileMap = new Map<string, string>();

//                 console.log('ZIP file fetched successfully. Extracting files...');

//                 // Extract files from the zip and generate object URLs
//                 await Promise.all(
//                     Object.entries(zip.files).map(async ([relativePath, file]) => {
//                         if (!file.dir) { // Ensure we only process files, not directories
//                             const fileBlob = await file.async('blob');
//                             const objectUrl = URL.createObjectURL(fileBlob);
//                             fileMap.set(relativePath, objectUrl);
//                             console.log(`Extracted file: ${relativePath}, URL: ${objectUrl}`);
//                         }
//                     })
//                 );

//                 console.log('Extraction complete. Total files extracted:', fileMap.size);
//                 setExtractedFiles(fileMap);
//             } catch (error) {
//                 console.error('Error extracting zip file:', error);
//             }
//         };

//         // Fetch zip and extract files
//         fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_38550632a8.zip'); // Replace with the actual URL of your zip file
//     }, []);

//     useEffect(() => {
//         if (extractedFiles.size === 0) {
//             console.log('No files extracted. Exiting Unity initialization.');
//             return; // Return early if no files are extracted
//         }

//         console.log('Extracted files available, initializing Unity...');

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.data') || '',
//             frameworkUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.framework.js') || '',
//             codeUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.wasm') || '',
//             streamingAssetsUrl: 'Gemello/StreamingAssets',
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
//         const loaderUrl = extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.loader.js') || '';
//         if (!loaderUrl) {
//             console.error('Loader URL not found in extracted files.');
//             console.log('Available extracted files:', Array.from(extractedFiles.keys())); // Log extracted files for debugging
//             return;
//         }

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



//                     // Filter out files that start with the base path
//                     // const assetbundleBasePath = 'Gemello_local/Assetbundle/';
//                     // const assetbundleFiles = Array.from(extractedFiles.keys()).filter((key) => key.startsWith(assetbundleBasePath));

//                     // if (assetbundleFiles.length === 0) {
//                     //     console.error('Assetbundle base URL not found. Available files:', Array.from(extractedFiles.keys()));
//                     //     return;
//                     // } else {
//                     //     console.log('Found assetbundle files:', assetbundleFiles);

//                     //     // Set the base URL using the path of the first file, or construct it manually
//                     //     const contentsBaseURL = new URL(assetbundleFiles[0], 'Gemello_local/Assetbundle/'); // Replace 'base_url_here' with your base URL
//                     //     console.log('Contents base URL:', contentsBaseURL.href);
//                     // }

//                     // Assuming 'extractedFiles' is a Map that contains the extracted files
//                     // extractedFiles should be initialized and populated before this snippet

//                     // Base path for the assetbundle files
//                     const assetbundleBasePath = 'Gemello_local/Assetbundle/';

//                     // Filter out files that start with the base path
//                     const assetbundleFiles = Array.from(extractedFiles.keys()).filter((key) =>
//                         key.startsWith(assetbundleBasePath)
//                     );

//                     // Check if any assetbundle files are found
//                     if (assetbundleFiles.length === 0) {
//                         console.error('Assetbundle base URL not found. Available files:', Array.from(extractedFiles.keys()));
//                         return;
//                     } else {
//                         console.log('Found assetbundle files:', assetbundleFiles);

//                         // Iterate over all found assetbundle files
//                         assetbundleFiles.forEach((fileKey) => {
//                             // Retrieve the file contents using the extractedFiles Map
//                             const fileContent = extractedFiles.get(fileKey);
//                             if (!fileContent) {
//                                 console.warn(`File content not found for: ${fileKey}`);
//                                 return;
//                             }

//                             // Construct the URL for this file (adjust 'http://localhost:3000/' to your actual base URL)
//                             const contentsBaseURL = `http://localhost:3000/${fileKey}`;
//                             console.log('Contents base URL:', contentsBaseURL);

//                             // Example of rendering or processing the file content
//                             // renderWebGLContent(contentsBaseURL, fileContent); // Uncomment and define this function as needed

//                             // Log the content or handle the fileContent as needed
//                             console.log(`Processing file at URL: ${contentsBaseURL}`);
//                             // Handle the fileContent as needed for your use case
//                         });
//                     }


//                     // Verify Assetbundle files and set the base URL
//                     // const contentsBaseURL = extractedFiles.get('Gemello_local/Assetbundle/');
//                     // if (!contentsBaseURL) {
//                     //     console.error('Assetbundle base URL not found. Available files:', Array.from(extractedFiles.keys()));
//                     //     return;
//                     // }


//                     console.log('Contents Base URL:', contentsBaseURL);

//                     // Send message to Unity instance
//                     const action = 'StartGetData';
//                     unityInstance.SendMessage('Loader', action, contentsBaseURL);

//                     // Initialize SDK interface
//                     const sdkScriptUrl = extractedFiles.get('Gemello_local/Gemello/SDKitIF.js');
//                     if (sdkScriptUrl) {
//                         const sdkScript = document.createElement('script');
//                         sdkScript.src = sdkScriptUrl;
//                         sdkScript.onload = () => {
//                             // @ts-ignore
//                             SDKitIF.init(unityInstance);
//                             console.log('SDKitIF initialized successfully.');
//                         };
//                         document.body.appendChild(sdkScript);
//                     } else {
//                         console.error('SDKitIF.js file not found in extracted files.');
//                     }
//                 })
//                 .catch((message: string) => {
//                     alert(message);
//                 });
//         };

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [extractedFiles]);

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
//                 <div id="unity-build-title">Gemello Local</div>
//             </div>
//         </div>
//     );
// };

// export default IndexPage;



// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import JSZip from 'jszip';

// const IndexPage = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const progressBarRef = useRef<HTMLDivElement | null>(null);
//     const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
//     const warningBannerRef = useRef<HTMLDivElement | null>(null);
//     const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

//     useEffect(() => {
//         // Function to fetch and extract the zip file
//         const fetchAndExtractZip = async (zipUrl: string) => {
//             try {
//                 console.log('Fetching ZIP file from:', zipUrl);
//                 const response = await fetch(zipUrl);

//                 if (!response.ok) {
//                     console.error('Failed to fetch ZIP file:', response.status, response.statusText);
//                     return;
//                 }

//                 const blob = await response.blob();
//                 const zip = await JSZip.loadAsync(blob);
//                 const fileMap = new Map<string, string>();

//                 console.log('ZIP file fetched successfully. Extracting files...');

//                 // Extract files from the zip and generate object URLs
//                 await Promise.all(
//                     Object.entries(zip.files).map(async ([relativePath, file]) => {
//                         if (!file.dir) { // Ensure we only process files, not directories
//                             const fileBlob = await file.async('blob');
//                             const objectUrl = URL.createObjectURL(fileBlob);
//                             fileMap.set(relativePath, objectUrl);
//                             console.log(`Extracted file: ${relativePath}, URL: ${objectUrl}`);
//                         }
//                     })
//                 );

//                 console.log('Extraction complete. Total files extracted:', fileMap.size);
//                 setExtractedFiles(fileMap);
//             } catch (error) {
//                 console.error('Error extracting zip file:', error);
//             }
//         };

//         // Fetch zip and extract files
//         fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_38550632a8.zip'); // Replace with the actual URL of your zip file
//     }, []);

//     useEffect(() => {
//         if (extractedFiles.size === 0) {
//             console.log('No files extracted. Exiting Unity initialization.');
//             return; // Return early if no files are extracted
//         }

//         console.log('Extracted files available, initializing Unity...');

//         // Unity configuration object with dynamic paths
//         const config = {
//             dataUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.data') || '',
//             frameworkUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.framework.js') || '',
//             codeUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.wasm') || '',
//             streamingAssetsUrl: 'Gemello/StreamingAssets',
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
//         const loaderUrl = extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.loader.js') || '';
//         if (!loaderUrl) {
//             console.error('Loader URL not found in extracted files.');
//             console.log('Available extracted files:', Array.from(extractedFiles.keys())); // Log extracted files for debugging
//             return;
//         }

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

//                     const assetbundleBasePath = 'Gemello_local/Assetbundle/';

//                     // Filter out files that start with the base path
//                     const assetbundleFiles = Array.from(extractedFiles.keys()).filter((key) =>
//                         key.startsWith(assetbundleBasePath)
//                     );

//                     let contentsBaseURL;
//                     // Check if any assetbundle files are found
//                     if (assetbundleFiles.length === 0) {
//                         console.error('Assetbundle base URL not found. Available files:', Array.from(extractedFiles.keys()));
//                         return;
//                     } else {
//                         console.log('Found assetbundle files:', assetbundleFiles);

//                         // Iterate over all found assetbundle files
//                         assetbundleFiles.forEach((fileKey) => {
//                             // Retrieve the file contents using the extractedFiles Map
//                             const fileContent = extractedFiles.get(fileKey);
//                             if (!fileContent) {
//                                 console.warn(`File content not found for: ${fileKey}`);
//                                 return;
//                             }

//                             // Construct the base URL for this file
//                             contentsBaseURL = `http://localhost:3000/${fileKey}`;
//                             console.log('Contents base URL:', contentsBaseURL);
//                         });

//                         // Log the last contentsBaseURL processed
//                         console.log('Last Processed Contents Base URL:', contentsBaseURL);
//                     }
//                     console.log('Contents Base URL:', contentsBaseURL);
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
//     }, [extractedFiles]);

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
//                 <div id="unity-build-title">Gemello Local</div>
//             </div>
//         </div>
//     );
// };

// export default IndexPage;

'use client';

import { useEffect, useRef, useState } from 'react';
import JSZip from 'jszip';

const IndexPage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
    const warningBannerRef = useRef<HTMLDivElement | null>(null);
    const [extractedFiles, setExtractedFiles] = useState<Map<string, string>>(new Map());

    useEffect(() => {
        // Function to fetch and extract the zip file
        const fetchAndExtractZip = async (zipUrl: string) => {
            try {
                console.log('Fetching ZIP file from:', zipUrl);
                const response = await fetch(zipUrl);

                if (!response.ok) {
                    console.error('Failed to fetch ZIP file:', response.status, response.statusText);
                    return;
                }

                const blob = await response.blob();
                const zip = await JSZip.loadAsync(blob);
                const fileMap = new Map<string, string>();

                console.log('ZIP file fetched successfully. Extracting files...');

                // Extract files from the zip and generate object URLs
                await Promise.all(
                    Object.entries(zip.files).map(async ([relativePath, file]) => {
                        if (!file.dir) { // Ensure we only process files, not directories
                            const fileBlob = await file.async('blob');
                            const objectUrl = URL.createObjectURL(fileBlob);
                            fileMap.set(relativePath, objectUrl);
                            console.log(`Extracted file: ${relativePath}, URL: ${objectUrl}`);
                        }
                    })
                );

                console.log('Extraction complete. Total files extracted:', fileMap.size);
                setExtractedFiles(fileMap);
            } catch (error) {
                console.error('Error extracting zip file:', error);
            }
        };

        // Fetch zip and extract files
        fetchAndExtractZip('http://localhost:1337/uploads/Gemello_local_4b4a21174a.zip'); // Replace with the actual URL of your zip file
    }, []);

    useEffect(() => {
        if (extractedFiles.size === 0) {
            console.log('No files extracted. Exiting Unity initialization.');
            return; // Return early if no files are extracted
        }

        console.log('Extracted files available, initializing Unity...');

        // Unity configuration object with dynamic paths
        const config = {
            dataUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.data') || '',
            frameworkUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.framework.js') || '',
            codeUrl: extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.wasm') || '',
            streamingAssetsUrl: 'Gemello/StreamingAssets',
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
        const loaderUrl = extractedFiles.get('Gemello_local/Gemello/Build/WebGLBuild.loader.js') || '';
        if (!loaderUrl) {
            console.error('Loader URL not found in extracted files.');
            console.log('Available extracted files:', Array.from(extractedFiles.keys())); // Log extracted files for debugging
            return;
        }

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

                    console.log("Extracted File",extractedFiles.entries());
                    console.log("Extracted File Array",Array.from(extractedFiles.entries()));

                    // const contentsBaseURL = extractedFiles.get('Gemello_local/Assetbundle/');
                    // const contentsBaseURL = extractedFiles.get('Gemello_local/Assetbundle/assetbundle');
                    const contentsBaseURL = Array.from(extractedFiles.entries()).filter(([key, _]) => key.startsWith('Gemello_local/Assetbundle/')).map(([_, value]) => {
                        const val =  value.replace('blob:', '');
                        // const fixedPath = val.replace('3000', '1337');

                        return val;
                    });

                    
                    console.log('Contents base URL:', contentsBaseURL);


                    const action = 'StartGetData';
                    // unityInstance.SendMessage('Loader', action, 'http://127.0.0.1:5500/Assetbundle/');
                    console.log('Contents base URL:', contentsBaseURL);
                    unityInstance.SendMessage('Loader', action, contentsBaseURL);
                })
                .catch((message: string) => {
                    alert(message);
                });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [extractedFiles]);

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
                <div id="unity-build-title">Gemello Local</div>
            </div>
        </div>
    );
};

export default IndexPage;
