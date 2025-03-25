import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/CommentSlider'

export default function page() {
  return (
    <div className=''>
      <Navbar />
      <div style={{ 
        backgroundImage: "url('/images/main-banner3.jpg')", 
        backgroundSize: "cover",  
        backgroundPosition: "center",
      }}
      className='grid md:grid-cols-2 gap-10 px-32 pt-[12rem] pb-10 relative mb-20'
      >
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-10'></div> */}
        <div className='flex justify-center items-center z-20'>
          <div>
            <p className='text-green-700 font-semibold leading-none'>SPEEDSEED $5K GRANT PROGRAM</p>
            <h1 className='rubik text-[55px] leading-tight font-semibold text-black/80 mb-5'>A grant programme that help's us move your business forward.</h1>
            <p className='rubik text-gray-500 mb-5 leading-tight'>Plus get expert feedback on your business and two months of free mentorship in our vibrant online community for entrepreneurs and business owners</p>
            <button className='px-12 rounded text-white py-3 bg-green-700 font-semibold hover:bg-[#E28457] transition-colors duration-500'>Apply Now!</button>
          </div>
        </div>
        <div>
          <img src="/images/vector.png" alt="" />
        </div>
      </div>
      <div className='text-center w-[65%] mx-auto mb-30'>
        <p className='rubik text-sm text-green-700'>SPEEDSEED GRANTS</p>
        <h1 className='rubik text-4xl font-bold mb-5'>YOU DESERVE A HELPING HAND</h1>
        <p className='text-xl mb-5'>At SpeedSeed, we understand the challenges small business owners face, and we’re dedicated to supporting you. That’s why we’re awarding over 40 grants to our small business customers this year.</p>
        <p className='text-xl'>Grantees will receive $5,000 to help grow their business, along with access to eligible SpeedSeed products and services available at the time of the grant disbursement. If you meet our eligibility requirements, you can apply to become one of our quarterly grantees. Take the opportunity to get the support you need to elevate your business. Join us in our mission to empower small business owners like you and apply today!</p>
      </div>
      <div className='mb-20 px-32'>
        <p className='rubik text-sm text-green-700'>ELIGIBILITY & VALUE</p>
        <h1 className='rubik text-4xl font-bold'>How the program works</h1>
        <p className='text-xl mb-5'>Customers who meet the eligibility requirements may submit an application to become one of the grantees chosen each quarter.</p>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='p-4 rounded-xl shadow flex items-center gap-5'>
            <div className='w-[20%]'>
              <img src="images/about-corevalue-a.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='font-sans text-xl font-semibold mb-1'>Eligibility requirements</h1>
              <p className='font-sans'>To be eligible, you must be a current customer, at least 18 years old.</p>
            </div>
          </div>
          <div className='p-4 rounded-xl shadow flex items-center gap-5'>
            <div className='w-[30%]'>
              <img src="images/about-corevalue-b.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='font-sans text-xl font-semibold mb-1'>Business requirements</h1>
              <p className='font-sans'>Your business must be a private entity, registered, and based in Nigeria, and it must offer products or services that benefit your community.</p>
            </div>
          </div>
          <div className='p-4 rounded-xl shadow flex items-center gap-5'>
            <div className='w-[30%]'>
              <img src="images/about-corevalue-c.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='font-sans text-xl font-semibold mb-1'>Entry guidelines</h1>
              <p className='font-sans'>You can apply only once per quarter, with one entry per customer. Previous Grant winners are not eligible to apply again.</p>
            </div>
          </div>
          <div className='p-4 rounded-xl shadow flex items-center gap-5'>
            <div className='w-[45%]'>
              <img src="images/about-corevalue-d.svg" className='w-full' alt="" />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h1 className='font-sans text-xl font-semibold mb-1'>Grant usage</h1>
              <p className='font-sans'>Grantees are selected based on their application responses. They are encouraged to use the grant money as noted in their application and will be asked to participate in a follow-up interview after receiving the grant.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mb-30'>
        <h1 className='rubik text-5xl font-bold mb-2'>Do you qualify?</h1>
        <p className='text-xl mb-5'>Read the SpeedSeed <span className='cursor-pointer text-blue-500 underline'>grant guidelines, terms, and conditions</span>. Ready to apply? Login to your dashboard to get started.</p>
        <button className=' cursor-pointer px-12 rounded-xl text-white py-3 bg-green-700 font-semibold hover:bg-[#E28457] transition-colors duration-500'>Apply Now!</button>
      </div>
      <div className='mb-30 px-32 grid md:grid-cols-2 gap-5'>
        <div>
          <img src="images/image4.png" alt="" />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <p className='rubik text-sm text-green-700'>OUR MISSION</p>
            <h1 className='rubik text-4xl font-bold mb-5'>Supporting your business success</h1>
            <p className='text-xl mb-5'>An equitable world is our goal, and we take this mission seriously. We strive to pay it forward by providing grants to small business owners in need. Since 2020, we’ve given away over $650,000 in grants to small businesses. Additionally, we donate to organizations that align with our values to support entrepreneurship and end systemic inequality.</p>
            <p className='text-xl'>Learn more about <span className='cursor-pointer text-blue-500 underline'>social impact at SpeedSeed</span> and how we are on a <span className='cursor-pointer text-blue-500 underline'>mission</span> to support entrepreneurship for business owners from all walks of life.</p>
          </div>
        </div>
      </div>
      <div className='h-[80dvh] bg-gray-100 py-10'>
        <Slider />
      </div>
    </div>
  )
}
