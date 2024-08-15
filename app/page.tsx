import Image from "next/image";
import Link from "next/link";
import Login from "./ui/login/login";
import Logo from "./ui/logo";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-screen items-center justify-center bg-gray-300">
      <div className="flex w-full h-20 bg-black p-3 text-white items-center">
        <Logo />
        <h1 className="text-sm ml-10 md:text-3xl md:ml-auto md:mr-20"> Integration with Headless CMS</h1>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-start">
        
        <br />
        <Login />

      </div>
    </div>
  );
}



{/* <Link
          href="/dashboard">
          Goto Dashboard
        </Link> */}