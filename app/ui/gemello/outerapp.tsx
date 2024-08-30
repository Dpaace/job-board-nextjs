// components/OuterApp.tsx

import { useEffect } from 'react';

const OuterApp = () => {
  // useEffect(() => {
  //   const script1 = document.createElement('script');
  //   script1.src = '/webcontents/SDKit.js';
  //   script1.async = true;
  //   document.body.appendChild(script1);


  //   const script2 = document.createElement('script');
  //   script2.src = '/webcontents/Sample.js';
  //   script2.defer = true;
  //   document.body.appendChild(script2);


  //   return () => {
  //     document.body.removeChild(script1);
  //     document.body.removeChild(script2);
  //   };
  // }, []);

  return (
    <div className="w-full h-[800px] overflow-hidden m-0 p-0">
      <canvas
        id="canvas"
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      ></canvas>
      <iframe
        id="my-iframe"
        className="relative w-[800px] h-[600px] border-none z-10"
        src="http://127.0.0.1:5500/Gemello/index.html" // Update the src if needed
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OuterApp;
