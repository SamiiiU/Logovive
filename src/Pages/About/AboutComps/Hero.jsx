import React from 'react'
import { useGlobalContext } from '../../../GlobalStates/GlobalState';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const {
    isQuote , 
    setIsQuote 
    } = useGlobalContext();

    const handleSetQuote = () => {
      setIsQuote(true);
    }

  return (
        <div
            className=" z-0 w-full flex  justify-start items-center bg-gradient-to-b from-[#ef572a] to-[#972003] h-fit  md:h-[90vh] "
          
          >
            <div className="relative mt-20 z-20 md:w-[50%] w-full sm:px-24 px-8 md:h-[80%]   text-teal-50  flex justify-center items-start flex-col">
              <h1 className='px-3 mb-2 font-bold text-blue-600 rounded-md bg-teal-50 '>Our Service</h1>
          
              <h1 className="text-xl font-bold md:text-4xl sm:text-2xl">Your Ideas; Our Planning. This Is The Formula For Success.</h1>
              <p className="mt-4 font-normal ">
              Anyone can benefit from our services. Whether you are an individual, a startup, small business, mid-sized business, or a large enterprise. Nobody is too big or small to hire us to ensure their success. We are the one for all website services providers.
              </p>


              <div className='w-full h-20 mt-9'>
              <span className="sm:p-3 p-1 rounded-sm sm:text-sm text-xs font-semibold  uppercase border-2 cursor-pointer border-teal-50 tracking-widest bg-teal-50 text-[#032c61]" onClick={handleSetQuote}>Get Started </span>
              <Link to="/Showcase" className="sm:p-3 p-1 rounded-sm ml-3 sm:ml-6 sm:text-sm text-xs font-semibold tracking-widest border-2 cursor-pointer uppercase transition-all hover:bg-transparent hover:text-teal-50 border-teal-50 bg-teal-50 text-[#032c61]"   
              
              >View Portfolio {"->"}</Link>
              </div>
            </div>

           
        </div>
  )
}

export default Hero
