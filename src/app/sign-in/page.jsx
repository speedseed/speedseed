'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import { SiSpeedypage } from "react-icons/si";
import Link from 'next/link';


export default function page() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='md:py-20 md:bg-gray-50 '>
        <div className='md:shadow py-10 px-5 md:rounded-xl block w-full   md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto bg-white'>
            <div className='text-center mb-8'>
                <Link href={'/'} className='cursor-pointer group mb-8'>
                    <div className='flex items-center justify-center'>
                        <SiSpeedypage  className='md:text-5xl text-4xl text-green-700 group-hover:text-[#E28457] transition-all duration-500'/>
                    </div>
                    <h1 className='text-green-700 md:text-xs text-[9px] leading-none rubik font-bold group-hover:text-[#E28457] transition-all duration-500'>Business Grants</h1>
                </Link>
                <div className='mt-8'>
                    <p className='text-2xl mb-2'>Welcome back!</p>
                    <p className='text-sm'>Log in to continue to SpeedSeed.</p>
                </div>
            </div>
            <div className='mb-5'>
                <div className="relative mb-4 w-full">
                    <input
                        type="text"
                        id="floatingInput"
                        className="peer h-12 w-full border border-black rounded-lg px-3 pt-5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floatingInput"
                        className="absolute left-3 top-3 text-gray-500 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                    >
                        Email address*
                    </label>
                </div>
                <div className="relative mb-4 w-full">
                    {/* Password Input */}
                    <input
                        type={showPassword ? "text" : "password"}
                        id="floatingPassword"
                        className="peer h-12 w-full border border-black rounded-lg px-3 pt-5 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder=" "
                    />
                    
                    {/* Floating Label */}
                    <label
                        htmlFor="floatingPassword"
                        className="absolute left-3 top-3 text-gray-500 text-xs transition-all 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-gray-400 peer-focus:top-2 
                        peer-focus:text-xs peer-focus:text-blue-500"
                    >
                        Password*
                    </label>

                    {/* Eye Icon for Toggle */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                </div>
                <div className='mb-6 flex items-center justify-between'>
                    <button className='text-green-700 cursor-pointer md:text-sm text-xs'>Forgot password?</button>
                    <button className='text-green-700 cursor-pointer md:text-sm text-xs'>Don't have an account <Link href={'/sign-up'} className='underline cursor-pointer'>Sign Up</Link>?</button>
                </div>
                <div className='mt-5'>
                    <button className='w-full py-3 bg-green-700 rounded-lg text-white '>Sign In</button>
                </div>
            </div>
            <div className='w-full flex items-center justify-between mb-5'>
                <span className='border border-black md:w-11 w-10'></span>
                <span className='md:text-[16px] text-sm'>if you signed up with google or apple</span>
                <span className='border border-black md:w-11 w-10'></span>
            </div>
            <div>
                <div className='border rounded-lg p-3 border-gray-300 cursor-pointer hover:bg-gray-200 transition-all duration-500 w-full flex items-center gap-5 mb-4'>
                    <FcGoogle className='md:text-2xl text-xl'/>
                    <span className='font-light md:text-[16px] text-sm'>Continue with Google</span>
                </div>
                <div className='border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-200 transition-all duration-500 w-full flex items-center gap-5'>
                    <FaApple className='md:text-2xl text-xl'/>
                    <span className='font-light md:text-[16px] text-sm'>Continue with Apple</span>
                </div>
            </div>
        </div>
    </div>
  )
}
