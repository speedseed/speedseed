import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white z-50 shadow'>
        <nav className='flex items-center justify-between px-20 py-3'>
            <div className='flex items-center gap-16'>
                <h1 className='text-3xl rubik font-bold text-green-700 hover:text-[#E28457] cursor-pointer transition-colors duration-500'>LOGO</h1>
                <ul className='flex items-center text-green-700'>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>About Us</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Free Grant Tips</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>Past Recipients</li>
                    <li className='border-b-3 hover:text-[#E28457] border-transparent hover:border-[#E28457] cursor-pointer transition-colors duration-500 px-4 py-3'>FAQs</li>
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-3'>
                    <p className='cursor-pointer hover:text-[#E28457]'>+234-70-7070-1611</p>
                    <p className='text-xl'>|</p>
                    <p className='cursor-pointer hover:text-green-700'>Login</p>
                </div>
                <button  className='px-8 rounded-lg text-green-700 py-2 border-2 border-green-700 hover:border-[#E28457] hover:text-[#E28457] font-semibold transition-colors duration-500'>Apply Now!</button>
            </div>
        </nav>
    </div>
  )
}
