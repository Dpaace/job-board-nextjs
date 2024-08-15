import Link from "next/link";
import Logo from "@/app/ui/logo";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/16/solid";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link className="flex mb-2 h-20 items-end justify-start rounded-md bg-blue-500 p-4 md:h-28"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <Logo />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <button
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-50 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                    <UserCircleIcon className="w-6" />
                    <div className="hidden md:block">
                        Profile
                    </div>
                </button>
            </div>
        </div>
    )
}
