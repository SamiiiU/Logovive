import React, { useState } from 'react'
import { serviceTypes } from '../AboutData.jsx/servicetype'

const Services = () => {

    const [serviceType , setServiceType] = useState("Logo Design");

    const handleserviceType =(type) => {
        setServiceType(type)
    } 
  return (
    <div className='w-full py-8 bg-[#181818] text-center  text-teal-50'>
      <h1 className='md:text-[8em] text-[4em] sm:text-[6em] tracking-tight font-bold'>OUR SERVICES</h1>

      {/* sercices items  */}
      <div className='flex flex-wrap items-start justify-start w-full gap-4 px-8 sm:px-16 xl:px-28'>
        {/* service navigation  */}
        <div className='md:w-[40%] w-full cursor-pointer transition-transform  '>
            <p className={`py-3  transition-[1s]  font-semibold uppercase ${serviceType === "Logo Design" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Logo Design"
            )}>Logo Design</p>

            <p className={`py-3 transition-all font-semibold  uppercase ${serviceType === "Website" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Website"
            )}>Website</p>

            <p className={`py-3 transition-all font-semibold  uppercase ${serviceType === "Branding" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Branding"
            )}>Branding</p>


            <p className={`py-3 transition-all font-semibold  uppercase ${serviceType === "Video" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Video"
            )}>Video</p>

            <p className={`py-3 transition-all font-semibold  uppercase ${serviceType === "Mobile Apps" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Mobile Apps"
            )}>Mobile Apps</p>

            <p className={`py-3 transition-all font-semibold  uppercase ${serviceType === "Digital Marketing" ? 'translate-x-0 text-[#ef572a]' : 'translate-x-10 text-teal-50'}`} onClick={() => handleserviceType(
                "Digital Marketing"
            )}>Digital Marketing</p>



            
            
        </div>

       
            {/* service show details  */}
        <div className='py-8 md:px-20 sm:border-0 border-y-2 border-teal-50'>
        { serviceTypes.map((item,idx) => {
            console.log(item.type , "Aur " ,serviceType , serviceType === item.type);
            return item.type === serviceType && (
            <div key={idx} className='text-left '>
            <p className='mb-8 font-semibold'>{item.heading}</p>

            <p>{item.para}</p>
            </div>
            ) 

            
        }
        
        )}
        </div>
      </div>

      <div className="text-left relative my-20 z-20  md:w-[50%] sm:px-24 px-8  text-teal-50  ">
          
              <h1 className="text-xl font-bold md:text-4xl sm:text-2xl">A Combination Of Passion,
              Dedication, And Skill</h1>
              <p className="mt-4 font-normal ">
              We do not hesitate to make claims about our skills and experience because we know we can over-deliver to our clients.


              </p>
            </div>

    </div>
  )
}

export default Services
