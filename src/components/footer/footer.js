import { Instagram, MapPin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=' bg-white p-2 mt-2'>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3    gap-4">
                <Image src="/Logo.jpg" width={ 100 } height={ 100 } class="  rounded-full " />
                <div className='  p-3 '>
                    <p className='font-semibold'>Quick Links</p>
                    <br />
                    <span className=' flex flex-col text-start gap-5'>
                        <a className=' cursor-pointer'>Terms & Conditions</a>
                        <a className=' cursor-pointer'>Privacy Policy</a>
                        <a className=' cursor-pointer'>Refunds & Cancellation Policy</a>
                    </span>
                </div>
                <div className='  p-3 '>
                    <p className='font-semibold'>Download App</p>
                    <Image src="/google-play.svg" width={ 150 } height={ 100 } class=" animate-bounce  rounded mt-2 " />
                    <br />
                    <p className=' cursor-pointer text-lg font-semibold'>Follow us</p>
                    <br />
                    <div className=' flex gap-4 p-2 '>
                        <Link href="/" className=' hover:rotate-45 duration-200 ease-in'>
                            <Twitter />
                        </Link>
                        <Link href="/" className=' hover:rotate-45 duration-200 ease-in'>
                            <MapPin />
                        </Link>
                        <Link href="/" className=' hover:rotate-45 duration-200 ease-in'>
                            <Youtube />
                        </Link>
                        <Link href="/" className=' hover:rotate-45 duration-200 ease-in'>
                            <Instagram />
                        </Link>
                    </div>
                </div>

            </div>
            <br />
            <div className="bg-black/5 p-6 text-center">
                <span>Powered by :</span>
                <a className="font-semibold" href="https://tw-elements.com/"
                > TEACHCODE </a
                >
            </div>
        </footer>
    )
}

export default Footer