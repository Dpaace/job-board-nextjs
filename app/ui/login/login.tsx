'use client';

import Link from "next/link";
import Image from 'next/image';

export default function Login() {
    return (
        <div className="w-[400px] h-[500px] flex flex-col items-center bg-white rounded-lg">
            <h1 className="font-bold text-2xl mt-4">
                Sign In:
            </h1>
            <div className="h-full w-full max-w-xs">
                <form>
                    <br />
                    <input type="text" id="email" placeholder="Email" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <br />
                    <input type="password" id="password" placeholder="Password" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <br />
                    <Link href="#" className="underline">Forgot your password?</Link>
                    <br />
                    <br />
                    <button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                        Sign In
                    </button>
                </form>
                <br />
                <p>Don&apos;t have an account yet? <Link href="#" className="underline">Sign up</Link></p>
                <br />
                <div className="w-full h-10 flex items-center justify-between">
                    <div className="h-px w-2/5 my-8 bg-black border-0"></div>
                    or
                    <div className="h-px w-2/5 my-8 bg-black border-0"></div>
                </div>
                <br />
                <button type="submit" className="flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                    <Image
                        src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                        alt="google image"
                        width={30}
                        height={30}
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}
