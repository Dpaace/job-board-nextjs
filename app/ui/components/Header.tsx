import Link from 'next/link';
import Logo from "@/app/ui/logo";

export default function Header() {
    return (
        <div className="flex w-full h-20 bg-black p-3 text-white items-center justify-between">
            {/* Logo wrapped with Link to navigate to home */}
            <Link href="/">
                <div className="cursor-pointer">
                    <Logo />
                </div>
            </Link>

            <div className="flex items-center space-x-4 mr-8">
                <Link href="/login">
                    <button className="px-4 py-2 bg-gray-200 text-black rounded-md">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}
