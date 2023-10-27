import { BiLogoHtml5 } from 'react-icons/bi';
import { BiLogoMicrosoft } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logout from '@/components/Logout/Logout'
import Dropdown from '@/components/Dropdown/FeatureDropdown'
import MoreDropdown from '@/components/Dropdown/MoreDropdown'
import {useState} from 'react'

export default function Header(){
    return(
        <div className='w-full px-4 py-2 nav-color hidden md:block md:w-auto'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-3xl">
                        <BiLogoHtml5 style={{ width: '3rem', height: '3rem' }}/>
                    </div>
                    <div className='flex flex-row invisible lg:visible items-center'>
                        <a href="#" className='px-2 text-white text-base'>SAMPLE PAGE</a>
                        <div className='text-3xl ml-4'>
                            <BiLogoMicrosoft/>
                        </div>
                        <a href="#" className='px-2 text-white text-xs'>HOME</a>
                        <Dropdown></Dropdown>
                        <MoreDropdown></MoreDropdown>
                    </div>
                </div>

                <div className='flex items-center justify-center search-box hidden md:block md:w-auto'>
                    <input className='md:w-96 border-none placeholder-white px-2 py-2 bg-opacity-50 bg-black rounded-md text-gray md:text-md' type="text" placeholder='Enter your search here' />
                    <FaMagnifyingGlass className='search-icon md:text-sm text-gray' />
                </div>
                <div className='flex justify-content items-center'>
                    <Logout></Logout>
                </div>

            </div>
        </div>
    )
}