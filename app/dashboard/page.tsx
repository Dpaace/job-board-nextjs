import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gemello | Dashboard"
}


export default async function Page() {
    return (

        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="font-bold text-3xl">
                Dashboard Home Page
            </h1>

            <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <Link href="/" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
                    Home
                </Link>
            </div>
        </div>


    );
}