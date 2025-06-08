import Image from 'next/image'
import { IoFootball, IoLogoReact, IoStar } from "react-icons/io5";
import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30} />,
        title: 'Dashboard',
        subtitle: 'Visualization',
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30} />,
        title: 'Counter',
        subtitle: 'Counter Client Side'
    },
    {
        path: '/dashboard/pokemon',
        icon: <IoFootball size={30} />,
        title: 'Pokemon',
        subtitle: 'Static pokemon page'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoStar size={30} />,
        title: 'Favorites',
        subtitle: 'Favorite pokemon'
    },
]

export default function Sidebar() {
    return (
        <>
            <aside className="flex flex-col w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">

                <div id='logo' className='my-4 px-6'>
                    <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
                        <IoLogoReact className='mr-2' />
                        <span>Dash</span>
                        <span className='text-blue-500'>8</span>
                    </h1>
                    <p className='text-slate-500 text-sm'>Manage your actions and activities</p>
                </div>


                <a href="#" className="flex items-center mt-8 px-4 -mx-2">
                    <Image
                        className="object-cover mx-2 rounded-full h-9 w-9"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
                        alt="user-avatar"
                        width={200}
                        height={200}
                    />
                    <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
                </a>

                <div className="flex flex-col justify-between flex-1 mt-6">

                    <nav>
                        {
                            menuItems.map(item => (
                                <SidebarMenuItem key={item.path} {...item} />
                            ))
                        }
                    </nav>

                </div>

            </aside>
        </>
    );
}