'use client';

import { HomeIcon, NumberedListIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Categories', href: '/dashboard/categories', icon: NumberedListIcon },
    { name: 'Jobs', href: '/dashboard/jobs', icon: UserGroupIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:px-3',
                                {
                                    'text-blue-600': pathname === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}