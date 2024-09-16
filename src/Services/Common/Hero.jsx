import React from 'react'
import {Webdev} from '../Services Data/WebDev'

const Hero = ({ head , name , para , image}) => {

  return (
    <div>
      <div
            className=" z-0 w-full flex md:flex-row flex-col  justify-start items-center bg-gradient-to-b from-[#ef572a] to-[#972003] h-[90vh]  "
          
          >
            <div className="relative md:mt-0 mt-20 z-20 md:w-[50%] w-full sm:px-16 lg:px-24 px-8 md:h-[80%]   text-teal-50  flex justify-center items-start flex-col">
              <h1 className='px-3 mb-2 font-bold text-[#ef572a] rounded-md bg-teal-50 '>{name}</h1>
          
              <h1 className="text-xl font-bold md:text-4xl sm:text-2xl">{head}</h1>
              <p className="mt-4 font-normal ">{para}</p>


              <div className='w-full py-9 '>
              <span className="p-3 sm:text-sm text-xs font-semibold  uppercase border-2 cursor-pointer border-teal-50 tracking-widest bg-teal-50 text-[#032c61]">GET STARTED</span>
              <span className="p-3 mx-6 sm:text-sm text-xs font-semibold tracking-widest border-2 cursor-pointer uppercase transition-all hover:bg-transparent hover:text-teal-50 border-teal-50 bg-teal-50 text-[#032c61]">LEARN MORE</span>
              </div>
            </div>

            <div className='sm:w-[50%] w-[80%]   sm:h-[80%] h-1/2'
              style={{backgroundImage : `url(${image})` ,
              
                  backgroundPosition : "center",
                  backgroundSize : "contain",
                  backgroundRepeat : 'no-repeat',
                          
          }}
            />
           
        </div>
    </div>
  )
}

export default Hero
