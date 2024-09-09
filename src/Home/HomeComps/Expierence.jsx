import React from 'react'

import formpic from '../../Assets/HeroAsset/Formpic.jpg'

const Expierence = () => {
  return (
    <div className='w-full  py-8 bg-[#181818]  text-teal-50'>
        <div className='flex flex-col items-center justify-start w-full px-8 text-center sm:px-16 md:px-28 mb-28 '>

        <h1 className="my-2 text-3xl font-bold uppercase ">
        With A Collective Experience Of 200+ Years
        </h1>

        <p className="mb-8 font-medium text-center">
        We have been serving businesses since 2010 and the experience of all our experts combine is more than 200 years. We want every business to benefit from our wealth of experience and expertise.
        </p>

        <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>

            <div className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='text-xl font-medium uppercase'>Satisfied Customers</p>
            </div>

            <div className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='text-xl font-medium uppercase'>Projects Completed</p>
            </div>

            <div className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+30</h1>
                <p className='text-xl font-medium uppercase'>CUPS OF COFFEE</p>
            </div>

            <div className='flex flex-col items-center justify-center flex-1 '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+100</h1>
                <p className='text-xl font-medium uppercase'>Daily Visits</p>
            </div>
        </div>

        
        </div>

        {/* Form for contact */}
        <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
            <div className="flex flex-col flex-1 px-8 text-center md:text-left md:pl-28 md:px-0">

            <h1 className="px-3 inline-block w-max font-bold rounded-md bg-gradient-to-r from-[#ef572a] mb-2 to-[#e80e82]">
            Contact Us
            </h1>

            <h1 className='my-4 text-3xl font-bold md:text-5xl sm:text-4xl'>Let{"’"}s Get Connected</h1>

            <p className='mb-4 font-medium'>Contact us and let us know all your business needs. Our experts will be ensuring that all your online business goals are met.</p>

                <div className='flex w-full gap-8 my-2'>
                    <input 
                        type='text'
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        placeholder='Your Name'
                    />
                    <input 
                        type='text'
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        placeholder='Email'
                    />
                </div>

                <div className='flex w-full gap-8 my-2'>
                    <input 
                        type='text'
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        placeholder='Phone'
                    />
                    <input 
                        type='text'
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        placeholder='Countary'
                    />
                </div>

                <div className='flex w-full gap-8 my-2'>
                    <select 
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        >
                        <option value="" disabled>I am interested in?</option>
                        <option value="">Logo</option>
                        <option value="">Web</option>
                        <option value="">Marketing</option>
                    </select>


                    <select 
                        className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none'
                        >
                        <option value="" disabled>Budget ? </option>
                        <option value="">50-100</option>
                        <option value="">100-500</option>
                        <option value="">500+</option>
                    </select>

                </div>

                <textarea 
                className='p-2 bg-transparent border-[1px] flex-1 border-teal-50 outline-none resize-y'
                placeholder='Tell about projects'
                rows="4"
                ></textarea>
                

                <p className='my-4 font-medium'>By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.

                </p>

                <span className='px-8 rounded-md py-4 border-2 border-[#e80e82] cursor-pointer w-max font-medium uppercase bg-gradient-to-r from-[#ef572a] mb-2 to-[#e80e82]'>Sumbit Request</span>


            </div>
            <div className="flex-1 rounded-tl-full "
            style={{
                backgroundImage: `url(${formpic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
                

            </div>
        </div>
    </div>
  )
}

export default Expierence
