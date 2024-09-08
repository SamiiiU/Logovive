import React from 'react'
import Logo from '../Assets/logo.png'

import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full px-28 py-16 bg-[#222222] text-teal-50'>
        <div className='w-full flex flex-wrap gap-4'>
            <div className='flex-1 py-4 flex flex-col pr-10'>

            <div className='logo w-[50%]  h-12 mb-16'
                style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
            ></div> 


            <p className='font-medium'>
            We are professionals and well-known for our agility and flexibility in offering website and other business solutions to all businesses to manage the business and keep it operational around the clock.
            </p>
            </div>
            
            <div className='flex-1 py-4 flex flex-col gap-y-2'>
                <h1 className='font-bold text-2xl'>OUR SERVICES</h1>
                <p className='text-lg hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Web Design</p>
                <p className='text-lg hover:text-[#ef572a] cursor-pointer font-medium transition-all'>E-Commerce</p>
                <p className='text-lg hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Wordpress</p>
                <p className='text-lg hover:text-[#ef572a] cursor-pointer font-medium transition-all'>Shopify</p>
            </div>

            <div className='flex-1 py-4 flex flex-wrap gap-1 font-medium'>
                <div className='w-full flex items-center gap-2'>
                    <FaPhone/>
                    <p>(210) 920 8669</p>
                </div>

                <div className='w-full flex items-center gap-2'>
                    <MdOutlineMail/>
                    <p>info@logovive.com</p>
                </div>

                <div className='w-full flex items-center gap-2'>
                    <MdOutlineMail/>
                    <p>compliance@logovive.com</p>
                </div>

                <div className='w-full flex items-center gap-2'>
                    <IoLocationSharp/>
                    <p>4659 Penelope Ln, Plano, TX 75024</p>
                </div>

                <div className='w-full flex items-center gap-2'>
                    <IoLocationSharp/>
                    <p>3244 Larry Cres, Oakville, ON L6M 0S9, Canada</p>
                </div>

                <h1 className='font-semibold text-xl'>WE DO ACCEPT ALL CARDS</h1>

                <div className='w-full flex gap-2 my-4'>
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
