'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";


interface Props {
    path: string;
    icon: JSX.Element,
    title: string,
    subtitle: string,
}

export default function SidebarMenuItem({ icon, path, subtitle, title }: Props) {


    const currentPath = usePathname();

    return (

        <Link
            href={path}
            className={`flex items-center px-4 py-2 mb-5 text-gray-700 bg-gray-100 rounded-md dark:text-gray-200 ${currentPath === path ? 'dark:bg-gray-800' : 'dark:bg-gray-900'} `}
        >
            <div>
                {icon}
            </div>
            <div className="flex flex-col ml-5">
                <span className="font-medium">{title}</span>
                <span className="font-light text-xs">{subtitle}</span>
            </div>
        </Link>

    );
}