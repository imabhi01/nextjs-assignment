import { HiMenuAlt1 } from 'react-icons/hi';
// import { BiLogoMicrosoft } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logout from '@/components/Logout/Logout'

export default function Header(){
    return(
        <div className='w-full px-4 py-2 nav-color'>
            <div className="flex justify-between">
                
                <div className="flex items-center justify-between">
                    <div className="text-2xl">
                        <HiMenuAlt1 />
                        {/* <BiLogoMicrosoft /> */}
                    </div>
                    <p className='px-2 text-white text-base'>SAMPLE PAGE</p>
                    <p className='px-2 text-white text-xs'>HOME</p>
                    <p className='px-2 text-white text-xs'>FEATURES</p>
                    <p className='px-2 text-white text-xs'>MORE</p>
                </div>

                <div className='flex items-center justify-center'>
                    <input className='w-96 border-none placeholder-white px-2 py-2 opacity-5 bg-black rounded-md text-white text-xs' type="text" placeholder='Enter your search here' />
                    <FaMagnifyingGlass className='opacity-5' />
                </div>
                <div>
                    <Logout></Logout>
                </div>

            </div>
        </div>
    )
}