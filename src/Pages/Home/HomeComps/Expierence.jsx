import React, { useEffect } from 'react'
import {initAOS} from '../../../Animation/AosAnimation'

const Expierence = () => {

    useEffect(() => {
        // initAOS( 50 , 500 , 1000 );
      }, []);

  return (
    <div className='w-full  py-8 bg-[#181818]  text-teal-50'>
        <div className='flex flex-col items-center justify-start w-full px-8 text-center sm:px-16 md:px-28 mb-28 '>

        <h1  className="my-2 text-3xl font-bold uppercase ">
        With More Than 10 Years of Combined Experience
        </h1>

        <p  className="mb-8 font-medium text-center">
        Our team of professionals has over 10 years of combined expertise, and we have been providing services to organizations since 2014. We want every company to take advantage of our extensive experience and knowledge base.
        </p>

        <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>

            <div className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='text-xl font-medium uppercase'>Satisfied Customers</p>
            </div>

            <div  className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='text-xl font-medium uppercase'>Projects Completed</p>
            </div>

            <div  className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+30</h1>
                <p className='text-xl font-medium uppercase'>CUPS OF COFFEE</p>
            </div>

            <div  className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+100</h1>
                <p className='text-xl font-medium uppercase'>Daily Visits</p>
            </div>
        </div>

        
        </div>

        
    </div>
  )
}

export default Expierence
