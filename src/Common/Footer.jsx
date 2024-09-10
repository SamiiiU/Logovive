import React from 'react'
import Logo from '../Assets/mern.png'

import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full sm:px-14 md:px-24 p-8 sm:py-16  bg-[#222222] text-teal-50'>
        <div className='flex flex-col flex-wrap w-full gap-4 md:flex-row'>
            <div className='flex flex-col flex-1 py-4 pr-10'>

            <div className='logo w-[50%]  h-12 mb-16'
                style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
            ></div> 


            <p className='font-medium'>
            We are professionals and well-known for our agility and flexibility in offering website and other business solutions to all businesses to manage the business and keep it operational around the clock.
            </p>
            </div>
            
            <div className='flex flex-col flex-1 py-4 gap-y-2'>
                <h1 className='text-2xl font-bold'>OUR SERVICES</h1>
                <p className=' hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Web Design</p>
                <p className=' hover:text-[#ef572a] cursor-pointer font-medium transition-all'>E-Commerce</p>
                <p className=' hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Wordpress</p>
                <p className=' hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Shopify</p>
            </div>

            <div className='flex flex-wrap flex-1 gap-1 py-4 font-medium'>
                <div className='flex items-center w-full gap-2'>
                    <FaPhone/>
                    <p>(210) 920 8669</p>
                </div>

                <div className='flex items-center w-full gap-2'>
                    <MdOutlineMail/>
                    <p>info@logovive.com</p>
                </div>

                <div className='flex items-center w-full gap-2'>
                    <MdOutlineMail/>
                    <p>compliance@logovive.com</p>
                </div>

                <div className='flex items-center w-full gap-2'>
                    <IoLocationSharp/>
                    <p>4659 Penelope Ln, Plano, TX 75024</p>
                </div>

                <div className='flex items-center w-full gap-2'>
                    <IoLocationSharp/>
                    <p>3244 Larry Cres, Oakville, ON L6M 0S9, Canada</p>
                </div>

                <h1 className='text-xl font-semibold'>WE DO ACCEPT ALL CARDS</h1>

                <div className='flex w-full gap-2 my-4'>
                    <span className='cursor-pointer hover:bg-[#ef572a] p-3 bg-teal-50 rounded-full text-zinc-900 text-xl'>
                        <FaFacebookSquare/>
                    </span>

                    <span className='cursor-pointer hover:bg-[#ef572a] p-3 bg-teal-50 rounded-full text-zinc-900 text-xl'>
                        <FaInstagramSquare/>
                    </span>

                    <span className='cursor-pointer hover:bg-[#ef572a] p-3 bg-teal-50 rounded-full text-zinc-900 text-xl'>
                        <FaLinkedin/>
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
