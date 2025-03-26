'use client'
import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleMenu = ()=>{
        setToggleMenu(!toggleMenu)
    }
  return (
    <div className=''>
        <div className={toggleMenu ? 'block transition-all duration-500 fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-50' : 'hidden fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-50'}>
            <div className='w-[75%] bg-white h-full p-4 relative'>
                <button onClick={handleMenu} className='absolute right-4 hover:bg-gray-100 rounded-full'><IoClose className='text-3xl' /></button>
                <div>
                    <ul className='my-20 text-green-700'>
                        <li className='border-b border-  hover:text-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>About Us</li>
                        <li className='border-b  hover:text-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Free Grant Tips</li>
                        <li className='border-b  hover:text-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Past Recipients</li>
                        <li className='border-b hover:text-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>FAQs</li>
                    </ul>
                    <button  className='text-sm lg:text-[16px] xl:rounded-lg absolute bottom-4 left-4 right-4 text-white py-3 bg-green-700 hover:bg-[#E28457] font-semibold transition-colors duration-500'>Apply Now!</button>
                </div>
            </div>
        </div>
        <nav className='fixed top-0 left-0 right-0 bg-white z-40 shadow flex items-center justify-between px-4 md:px-10 xl:px-20 py-3'>
            <div className='flex items-center xl:gap-16 gap-5'>
                <div className='block lg:hidden' onClick={handleMenu}>
                    <button><HiMenuAlt2 className='text-2xl md:text-3xl' /></button>
                </div>
                <h1 className='md:text-2xl lg:text-3xl text-xl rubik font-bold text-green-700 hover:text-[#E28457] cursor-pointer transition-colors duration-500'>LOGO</h1>
                <ul className='hidden lg:flex items-center text-green-700'>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>About Us</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Free Grant Tips</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Past Recipients</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>FAQs</li>
                </ul>
            </div>
            <div className='flex items-center xl:gap-10 gap-5'>
                <div className='hidden lg:flex items-center xl:gap-3 lg:gap-2'>
                    <p className='cursor-pointer hover:text-[#E28457]'>+234-70-7070-1611</p>
                    <p className='text-xl'>|</p>
                    <p className='cursor-pointer hover:text-green-700'>Login</p>
                </div>
                <button  className='xl:px-8 px-5 text-sm lg:text-[16px] xl:rounded-lg text-green-700 md:py-2 py-1 border-2 border-green-700 hover:border-[#E28457] hover:text-[#E28457] font-semibold transition-colors duration-500'>Apply Now!</button>
            </div>
            
        </nav>
    </div>
  )
}
