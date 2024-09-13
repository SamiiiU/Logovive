import React from 'react'
import formpic from '../Assets/HeroAsset/Formpic.jpg'
const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4 md:flex-row bg-[#181818] text-teal-50 py-16">
            <div className="flex flex-col px-8 text-center sm:px-16 md:flex-1 md:text-left md:pl-28 md:px-0 ">

            <h1 className="px-3  font-bold rounded-md bg-gradient-to-r from-[#ef572a] mb-2 to-[#e80e82]">
            Contact Us
            </h1>

            <h1 className='my-4 text-3xl font-bold md:text-5xl sm:text-4xl'>Let{"’"}s Get Connected</h1>

            <p className='mb-4 font-medium'>Contact us and let us know all your business needs. Our experts will be ensuring that all your online business goals are met.</p>

                <div className='flex flex-col w-full gap-8 my-2 sm:flex-row'>
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

                <div className='flex flex-col w-full gap-8 my-2 sm:flex-row'>
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

                <div className='flex flex-col w-full gap-8 my-2 sm:flex-row'>
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

                <p className='px-8 rounded-md py-4 border-2 border-[#e80e82] cursor-pointer w-max font-medium uppercase bg-gradient-to-r from-[#ef572a] mb-2 to-[#e80e82]'>Sumbit Request</p>


            </div>
            <div className="flex-1 rounded-tl-full w-96 h-96 md:block "
            style={{
                backgroundImage: `url(${formpic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
                

            </div>
        </div>
  )
}

export default ContactForm
