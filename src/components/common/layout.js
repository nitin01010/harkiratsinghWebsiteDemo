import { GraduationCap, HomeIcon } from "lucide-react";
import Link from 'next/link';


const LayoutBox = () => {
    return (
        <div className="  w-[400px] h-[100vh] sticky top-14 bg-slate-100 hidden   md:block min-w-80   p-7">
            <h2 className=' font-medium'>MAIN MENU</h2>
            <br />
            <ul className=' flex gap-6 flex-col '>
                <Link href="/">
                    <li className=' flex items-center gap-3 text-base hover:text-blue-600 duration-200 ease-in-out cursor-pointer '><HomeIcon /> Home</li>
                </Link>
                <Link href="/new-courses">
                    <li className=' flex items-center gap-3 text-base hover:text-blue-600 duration-200 ease-in-out cursor-pointer '><GraduationCap /> Courses</li>
                </Link>
            </ul>
        </div>
    )
}

export default LayoutBox