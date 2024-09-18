import React, { useEffect } from 'react'
import { FaWix } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import manager from '../../../Assets/HeroAsset/manager.jpg'
import { MdOutlineDisplaySettings } from "react-icons/md";
import offer from '../../../Assets/HeroAsset/offer.webp'
import Cards from '../HomeComps/Cards'
import '../Sidebar.css'

import {initAOS} from '../../../Animation/AosAnimation'



const Partners = () => {

    useEffect(() => {
        initAOS( 50 , 0 , 1000 );
      }, []);

  return (

    <div className='text-teal-50   w-full py-8 bg-[#181818] '>
        
        {/* partners names and logos  */}
      <div data-aos="fade-up"  className='flex flex-col flex-wrap px-8 mb-16 sm:px-16 md:px-24 sm:flex-row animate-fadeUp'>
        <h1 className='font-bold md:text-3xl text-2xl w-full sm:w-[20%] flex justify-center mb-4  items-center '>Our Partners</h1>

        <div className='sm:w-[80%] w-[100%] sm:text-5xl text-4xl flex items-center '>
            <span className='flex items-center justify-center flex-1 text-center'><FaWix /></span>

            <span className='flex items-center justify-center flex-1 text-center'><FaAmazon /></span>

            <span className='flex items-center justify-center flex-1 text-center '><FaXbox /></span>

            <span className='flex items-center justify-center flex-1 text-center'><FaShopify  /></span>

            <span className='flex items-center justify-center flex-1 text-center'><FaApple  /></span>

        </div>
        </div>
        

        {/* About us starting............. */}

        <div className='flex gap-6 w-full my-8  xl:h-[80vh]  justify-center items-center'>
                <div 
                data-aos="fade-right"
                className="md:relative absolute md:left-0 left-[-100%] block md:w-[40%] w-0 p-8 xl:h-full md:h-[26em] h-0"
                style={{
                    backgroundImage: `url(${manager})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    clipPath: 'polygon(20% 0%, 330% 0%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)',
                }}
                >
                
                </div>

                <div
                data-aos="fade-left"
                className='flex  md:w-[60%] w-full flex-col md:items-start items-center xl:pr-16 md:pr-8 sm:px-16 px-8'>
                    <h1 className='px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]  mb-2 to-[#e80e82]'>About Us</h1>
                    <h1 className='mb-8 text-4xl font-bold text-center xl:text-5xl md:text-left '>We Transform Businesses Into Brands</h1>

                    <p className='font-semibold leading-5'>Our experts are known for branding common businesses into brands. When your business is online you too have the power to reach customers all around the world. We will make sure that there is a worldwide audience waiting for your products.</p>


                    {/* 3 box icons  */}
                    <div className='flex flex-col items-center justify-between mb-10 md:flex-row'>
                    <div className='flex-1 px-4'>
                        <div className='flex justify-center py-4 text-center'><MdOutlineDisplaySettings className='text-[3em] text-[#684af4]'/></div>
                        <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                        SOLUTION DEVELOPMENT    

                        </h1>

                        <p className='text-center '>

                        We make sure that you get a digital solution equipped with all your business needs.
                        </p>
                        </div>


                        <div className='flex-1 px-4 '>
                        <div className='flex justify-center w-full py-4 text-center -800'><MdOutlineDisplaySettings className='text-[3em] text-[#ef572a]'/></div>
                        <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                        AUDIENCE TARGETING

                        </h1>

                        <p className='text-center '>

                        The people who are already looking for your products online are your targeted audience.
                        </p>
                        </div>
                

                        <div className='flex-1 px-4'>
                        <div className='flex justify-center w-full py-4 text-center'><MdOutlineDisplaySettings className='text-[3em] text-[#28afa3]'/></div>
                        <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                        MARKETING PERFORMANCE

                        </h1>

                        <p className='text-center '>

                        Our experts know how to make your site perform exceptionally through effective marketing.
                        </p>
                        </div>

                    </div>

                    <div className='flex justify-center items-center w-full sm:w-[60%] sm:px-0 px-4  gap-2'>
                        <span className='flex-1 px-3 py-3 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] border-2 border-[#e80e82] flex-nowrap cursor-pointer'>Read More</span>
                        <span className='flex-1 px-4 cursor-pointer py-3 border-2 border-[#ef572a] bg-transparent text-[#ef572a] font-bold text-center'>Get A Quote</span>
                    </div>
                </div>

            </div>


        {/* Choosing plan  */}
        <div data-aos="fade-up" className='flex flex-col items-center justify-center w-full px-8 py-4 mt-16 mb-8 gap-y-4 sm:flex-row sm:px-16 xl:items-end xl:px-28'>
            <div  className= "w-full sm:w-[40%] ">
                <h1  className='lg:text-4xl text-3xl font-bold text-[#f89521] my-2'>Choosing the plan</h1>
                <h1 className='text-4xl font-bold'>That Is Right For You!</h1>
            </div>

            <h1 className='lg:text-2xl text-xl w-full sm:w-[60%] leading-9'>If you are ready to expand into the digital world, now you have an option that can adjust to your budget.</h1>

        </div>



        {/* cards start here  */}

        <Cards/>

        <div className='w-full md:px-24 px-8 sm:px-16 flex  justify-center items-center py-8 mt-16 bg-gradient-to-t from-[#ef572a] to-[#ef572a]/10'>
            <div className='w-full p-4 border-2 border-dashed rounded-xl border-teal-50 '>
                <h3 data-aos="fade-right" className='inline-block px-2 py-1 font-semibold bg-zinc-950'>OUR AIM IS TO OFFER YOU THE MAXIMUM VALUE</h3>

                <h1 data-aos="fade-right" className='my-3 text-3xl font-bold md:text-5xl sm:text-4xl ' >SUPER  <span className='text-yellow-400'>COMBO PACKAGE</span></h1>

                <p data-aos="fade-right" className='mb-3 tracking-wide'>
                Our Super Combo Package is specially made for people who have completely made up their minds to expand online. This package is designed to give you maximum value for your budget, so don’t wait and order now.
                </p>

                <div className='flex flex-col items-center justify-center w-full gap-2 md:flex-row'>
                    <div data-aos="fade-up" className='flex flex-col w-full md:flex-1'>
                        <h1 className='text-2xl font-bold'>Logo Design</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>Unlimited Logo Design Concepts</li>
                            <li className='mt-2'>Unlimited Revisions</li>
                            <li className='mt-2'>Icon Design</li>
                            <li className='mt-2'>All Final File Formats</li>

                            
                        </ul>

                        <h1 className='text-2xl font-bold'>Stetionary Design</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>Business Card, Letterhead, Envelope</li>
                            <li className='mt-2'>MS Word Letterhead</li>
                        </ul>
                    </div>

                    {/* combo 2 */}
                    <div data-aos="fade-up" className='flex flex-col w-full md:flex-1 '>
                    <h1 className='text-2xl font-bold'>Website Design</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>UNLIMITED Pages Website</li>
                            <li className='mt-2'>Content Management System (CMS)</li>
                            <li className='mt-2'>Mobile Responsive</li>
                            <li className='mt-2'>Any 3 Social Media Platforms</li>

                            
                        </ul>

                        <h1 className='text-2xl font-bold'>Social Media Designs</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>Facebook, Twitter, Youtube, Linkedin</li>

                        </ul>
                    </div>
                    
                    {/* Combo 3  */}
                    <div data-aos="fade-up" className='flex flex-col w-full md:flex-1'>
                    <h1 className='text-2xl font-bold'>Banner Design</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>2 Design Concepts</li>
                            <li className='mt-2'>2 Stock Photos for Banners</li>        
                        </ul>

                        <h1 className='text-2xl font-bold'>Value Added Services</h1>
                        <ul className='px-2 my-4 text-sm list-item'>
                            <li className='mt-2'>Dedicated Account Manager</li>
                            <li className='mt-2'>100% Ownership Rights</li>
                            <li className='mt-2'>100% Money Back Guarantee</li>
                            <li className='mt-2'>Complete Deployment</li>
                        </ul>
                    </div>
                    
                    <div data-aos="zoom-out" className='flex flex-col flex-1 '>
                    <div className='w-full my-8 h-36' 
                    style={{
                        backgroundImage: `url(${offer})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}> </div>
                        
                    <div data-aos="fade-up" className='w-full px-4 py-8 border-t-2 border-teal-50 '>
                        <span className='px-4 py-2 font-semibold border-2 border-teal-50 hover:bg-teal-50 hover:text-zinc-800'>ORDER NOW</span>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners
