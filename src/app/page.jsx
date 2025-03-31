import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/CommentSlider'
import Footer from './components/Footer'
import FadeInSection from './components/FadeInSection'
import Link from 'next/link'

export default function page() {
  return (
    <div className=''>
      <Navbar />
      <div style={{ 
        backgroundImage: "url('/images/main-banner3.jpg')", 
        backgroundSize: "cover",  
        backgroundPosition: "center",
      }}
      className='grid lg:grid-cols-2 gap-10 xl:px-32 md:px-10 md:pt-[12rem] px-4 pt-[8rem] pb-10 relative mb-20'
      >
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-10'></div> */}
        <div className='flex justify-center items-center z-20'>
          <div>
            <p className='text-green-700 font-semibold leading-none text-xs md:text-[16px]'>SPEEDSEED $5K GRANT PROGRAM</p>
            <h1 className='rubik lg:text-[55px] md:text-5xl text-2xl md:leading-tight font-semibold text-black/80 md:mb-5 mb-3'>A grant programme that help's us move your business forward.</h1>
            <p className='rubik text-gray-500 mb-5 leading-tight text-sm md:text-[16px]'>Plus get expert feedback on your business and two months of free mentorship in our vibrant online community for entrepreneurs and business owners</p>
            <Link href='/sign-in'>
              <button className='lg:px-12 px-9 rounded text-white py-3 bg-green-700 font-semibold hover:bg-[#E28457] transition-colors duration-500'>Apply Now!</button>
            </Link>
          </div>
        </div>
        <div>
          <img src="/images/vector.png" alt="" />
        </div>
      </div>
      <FadeInSection>
      <div className='text-center lg::w-[65%] lg:mx-auto md:px-10 px-4 mb-30 xl:px-32'>
        <p className='rubik text-sm text-green-700'>SPEEDSEED GRANTS</p>
        <h1 className='rubik lg:text-4xl md:text-[27px] text-2xl font-bold mb-5'>YOU DESERVE A HELPING HAND</h1>
        <p className='lg:text-xl rubik mb-5'>At SpeedSeed, we understand the challenges small business owners face, and we’re dedicated to supporting you. That’s why we’re awarding over 40 grants to our small business customers this year.</p>
        <p className='lg:text-xl rubik'>Grantees will receive $5,000 to help grow their business, along with access to eligible SpeedSeed products and services available at the time of the grant disbursement. If you meet our eligibility requirements, you can apply to become one of our quarterly grantees. Take the opportunity to get the support you need to elevate your business. Join us in our mission to empower small business owners like you and apply today!</p>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className='mb-20 xl:px-32 px-4 md:px-10'>
        <p className='rubik text-sm text-green-700'>ELIGIBILITY & VALUE</p>
        <h1 className='rubik md:text-[27px] lg:text-4xl text-2xl font-bold'>How the program works</h1>
        <p className='md:text-xl rubik text-sm md:text-[16px] mb-5'>Customers who meet the eligibility requirements may submit an application to become one of the grantees chosen each quarter.</p>
        <div className='grid lg:grid-cols-2 gap-5'>
          <div className='md:p-4 p-2 rounded-xl shadow-lg border border-gray-200 flex items-center md:gap-5 gap-3'>
            <div className='md:w-[20%] w-[50%]'>
              <img src="images/about-corevalue-a.svg" className='size-full object-cover' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='rubik md:text-xl text-lg font-semibold mb-1'>Eligibility requirements</h1>
              <p className='font-sans rubik text-sm md:text-[16px]'>To be eligible, you must be a current customer, at least 18 years old.</p>
            </div>
          </div>
          <div className='md:p-4 p-2 rounded-xl shadow-lg border border-gray-200 flex items-center md:gap-5 gap-3'>
            <div className='md:w-[30%] w-[90%]'>
              <img src="images/about-corevalue-b.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='rubik md:text-xl text-lg font-semibold mb-1'>Business requirements</h1>
              <p className='rubik text-sm md:text-[16px]'>Your business must be a private entity, registered, and based in Nigeria, and it must offer products or services that benefit your community.</p>
            </div>
          </div>
          <div className='md:p-4 p-2 rounded-xl shadow-lg border border-gray-200 flex items-center md:gap-5 gap-3'>
            <div className='md:w-[30%] w-[90%]'>
              <img src="images/about-corevalue-c.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='rubik md:text-xl text-lg font-semibold mb-1'>Entry guidelines</h1>
              <p className='font-sans rubik text-sm md:text-[16px]'>You can apply only once per quarter, with one entry per customer. Previous Grant winners are not eligible to apply again.</p>
            </div>
          </div>
          <div className='md:p-4 p-2 rounded-xl shadow-lg border border-gray-200 flex items-center md:gap-5 gap-3'>
            <div className='md:w-[45%] w-[100%]'>
              <img src="images/about-corevalue-d.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='rubik md:text-xl text-lg font-semibold mb-1'>Grant usage</h1>
              <p className='font-sans rubik text-sm md:text-[16px]'>Grantees are selected based on their application responses. They are encouraged to use the grant money as noted in their application and will be asked to participate in a follow-up interview after receiving the grant.</p>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className='text-center mb-30 px-4 md:px-10'>
        <h1 className='rubik lg:text-4xl md:text-[27px] text-2xl font-bold lg:mb-2 mb-1'>Do you qualify?</h1>
        <p className='lg:text-xl text-sm md:text-[16px] rubik lg:mb-5 mb-3'>Read the SpeedSeed <span className='cursor-pointer text-blue-500 underline'>grant guidelines, terms, and conditions</span>. Ready to apply? Login to your dashboard to get started.</p>
        <button className=' cursor-pointer px-12 rounded-xl text-white py-3 bg-green-700 font-semibold hover:bg-[#E28457] transition-colors duration-500'>Apply Now!</button>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className='lg:mb-40 mb-20 xl:px-32 px-4 md:px-10 grid lg:grid-cols-2 xl:gap-5 gap-10'>
        <div>
          <img src="images/image4.png" alt="" />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <p className='rubik text-sm text-green-700'>OUR MISSION</p>
            <h1 className='rubik lg:text-4xl md:text-[27px] text-2xl font-bold lg:mb-5 mb-3'>Supporting your business success</h1>
            <p className='lg:text-xl rubik lg:mb-5 mb-3'>An equitable world is our goal, and we take this mission seriously. We strive to pay it forward by providing grants to small business owners in need. Since 2020, we’ve given away over $650,000 in grants to small businesses. Additionally, we donate to organizations that align with our values to support entrepreneurship and end systemic inequality.</p>
            <p className='lg:text-xl rubik'>Learn more about <span className='cursor-pointer text-blue-500 underline'>social impact at SpeedSeed</span> and how we are on a <span className='cursor-pointer text-blue-500 underline'>mission</span> to support entrepreneurship for business owners from all walks of life.</p>
          </div>
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div 
        style={{ 
          backgroundImage: "url('/images/main-banner3.jpg')", 
          backgroundSize: "cover",  
          backgroundPosition: "center",
        }}
        className='lg:p-20 p-10 bg-gray-100 py-10 flex justify-center items-center mb-20'
      >
        <div>
          <div className='text-center my-10'>
            <h1 className='rubik lg:text-4xl md:text-[27px] text-2xl font-bold lg:mb-5 mb-2'>SpeedSeed Success Stories</h1>
            <p className='lg:text-xl rubik mb-5'>Read how the grant program has helped these grantees and their businesses.</p>
          </div>
          <Slider />
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className='text-center mb-30 px-4 md:px-10'>
        <h1 className='rubik lg:text-4xl md:text-[27px] text-2xl font-bold lg:mb-2 mb-1'>Start building towards success today</h1>
        <p className='lg:text-xl text-sm md:text-[16px] rubik lg:mb-5 mb-3'>Log in to your dashboard to start your application</p>
        <button className=' cursor-pointer px-12 rounded-xl text-white py-3 bg-green-700 font-semibold hover:bg-[#E28457] transition-colors duration-500'>Apply Now!</button>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div>
        <Footer />
      </div>
      </FadeInSection>
    </div>
  )
}
