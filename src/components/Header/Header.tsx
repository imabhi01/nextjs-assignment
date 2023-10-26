import { HiMenuAlt1 } from 'react-icons/hi';
// import { BiLogoMicrosoft } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logout from '@/components/Logout/Logout'
import {useState} from 'react'

export default function Header(){

    let [dropdownOpen, setdropdownOpen] = useState(false);

    const toggleDropDown = () => {
        dropdownOpen = !dropdownOpen;
        console.log(dropdownOpen);
    }

    return(
        <div className='w-full px-4 py-2 nav-color'>
            <div className="flex justify-between">
                
                <div className="flex items-center justify-between">
                    <div className="text-2xl">
                        <HiMenuAlt1 />
                    </div>
                    <div className='flex flex-row invisible lg:visible items-center'>
                        <a href="#" className='px-2 text-white text-base'>SAMPLE PAGE</a>
                        <a href="#" className='px-2 text-white text-xs'>HOME</a>
                        <a href="#" className='px-2 text-white text-xs'>FEATURES</a>
                        <a href="#" className='px-2 text-white text-xs'>MORE</a>
                        <div className="relative"> 
                            <button 
                                onClick={toggleDropDown} 
                                className='px-2 text-white text-md'
                            >
                                Dropdown Button
                                <svg
                                    className="h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10
                                    10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </button>
                            <div>

                            </div>
                            
                                <div className="absolute right-0 mt-2 py-2 w-4">
                                    <a className='px-2 text-white text-md' href="#">Your profile</a>
                                    <a className='px-2 text-white text-md' href="#">Your projects</a>
                                    <a className='px-2 text-white text-md' href="#">Help</a>
                                    <a className='px-2 text-white text-md' href="#">Settings</a>
                                    <a className='px-2 text-white text-md' href="#">Sign Out</a>
                                </div> 
                            
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center search-box'>
                    <input className='md:w-96 border-none placeholder-white px-2 py-2 opacity-5 bg-black rounded-md text-white md:text-md' type="text" placeholder='Enter your search here' />
                    <FaMagnifyingGlass className='opacity-5 search-icon md:text-sm' />
                </div>
                <div>
                    <Logout></Logout>
                </div>

            </div>
        </div>
    )
}