import React from 'react'

const Hero = () => {
  return (
    <div>
      <div
            className=" z-0 w-full flex  justify-start items-center bg-gradient-to-b from-[#ef572a] to-[#972003] h-1/2 md:h-[90vh] "
          
          >
            <div className="relative mt-20 z-20 md:w-[50%] w-full sm:px-24 px-8 md:h-[80%]   text-teal-50  flex justify-center items-start flex-col">
              <h1 className='px-3 mb-2 font-bold text-[#ef572a] rounded-md bg-teal-50 '>PORTFOLIO</h1>
          
              <h1 className="text-xl font-bold md:text-4xl sm:text-2xl">Take A Look At Some Of The Business We Have Helped</h1>
              <p className="mt-4 font-normal ">
              Our creative, technical, and marketing services have helped many businesses set themselves up for future success. Here in our portfolio, you can view some of the businesses we have supported to grow online.
              </p>


              <div className='w-full py-9 '>
              <span className="p-3 sm:text-sm text-xs font-semibold  uppercase border-2 cursor-pointer border-teal-50 tracking-widest bg-teal-50 text-[#032c61]">OUR SERVICES</span>
              <span className="p-3 mx-6 sm:text-sm text-xs font-semibold tracking-widest border-2 cursor-pointer uppercase transition-all hover:bg-transparent hover:text-teal-50 border-teal-50 bg-teal-50 text-[#032c61]">Get Started </span>
              </div>
            </div>

            {/* About down page */}
           
        </div>
    </div>
  )
}

export default Hero
