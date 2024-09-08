import React from 'react'

import formpic from '../../Assets/HeroAsset/Formpic.jpg'

const Expierence = () => {
  return (
    <div className='w-full  py-8 bg-[#181818] text-teal-50'>
        <div className='w-full px-28 mb-28 flex flex-col justify-start items-center '>

        <h1 className="font-bold uppercase text-3xl my-2">
        With A Collective Experience Of 200+ Years
        </h1>

        <p className="text-center font-medium mb-8">
        We have been serving businesses since 2010 and the experience of all our experts combine is more than 200 years. We want every business to benefit from our wealth of experience and expertise.
        </p>

        <div className='flex gap-4 w-full justify-between'>

            <div className=' flex-1 flex justify-center flex-col items-center '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='uppercase font-medium text-xl'>Satisfied Customers</p>
            </div>

            <div className=' flex-1 flex justify-center flex-col items-center '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+71</h1>
                <p className='uppercase font-medium text-xl'>Projects Completed</p>
            </div>

            <div className=' flex-1 flex justify-center flex-col items-center '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+30</h1>
                <p className='uppercase font-medium text-xl'>CUPS OF COFFEE</p>
            </div>

            <div className=' flex-1 flex justify-center flex-col items-center '>
                <h1 className='font-bold text-[4rem] tracking-[-0.010em]'>+100</h1>
                <p className='uppercase font-medium text-xl'>Daily Visits</p>
            </div>
        </div>

        
        </div>

        {/* Form for contact */}
        <div className="w-full flex justify-center gap-4">
            <div className="flex-1 pl-28 flex flex-col">

            <h1 className="px-3 inline-block w-max font-bold rounded-md bg-gradient-to-r from-[#ef572a] mb-2 to-[#e80e82]">
            Contact Us
            </h1>

            <h1 className='my-4 font-bold text-5xl'>Let{"’"}s Get Connected</h1>

            <p className='font-medium mb-4'>Contact us and let us know all your business needs. Our experts will be ensuring that all your online business goals are met.</p>

                <div className='w-full flex gap-8 my-2'>
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

                <div className='w-full flex gap-8 my-2'>
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

                <div className='w-full flex gap-8 my-2'>
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
                

                <p className='font-medium my-4'>By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.

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
