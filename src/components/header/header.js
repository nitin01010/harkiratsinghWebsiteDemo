import Image from 'next/image'
import { Search } from 'lucide-react';
import ButtonModal from './buttonModal/page';
import HiddenMenu from '../common/hiddenMenu';

const Header = () => {
    return (
        <div className=' bg-white  shadow-md sticky -top-1  z-50 h-[65px]   flex  justify-between  m-auto    items-center  '>
            <HiddenMenu />
            <Image src='/Logo.jpg' alt='Logo' className=' ml-10 md:ml-7' width={ 50 } height={ 50 } />
            <div className='  p-1 flex gap-4  mr-2 md:mr-12  '>
                <span className=' border hidden md:flex   rounded-full justify-center cursor-pointer font-light items-center'>
                    <input type='search' placeholder='Type here to search..' className=' bg-slate-50   p-2 border    outline-blue-400 -m-1 ' />
                    <div className=' p-2 overflow-hidden   rounded '>
                        <Search />
                    </div>
                </span>
                <ButtonModal />
            </div>
        </div>
    )
}

export default Header