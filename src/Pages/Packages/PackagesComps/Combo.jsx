import React from 'react'
import offer from '../../../Assets/HeroAsset/offer.webp'

const Combo = () => {
  return (
    <div className='w-full md:px-24 px-8 sm:px-16 flex text-teal-50 bg-[#181818] justify-center items-center py-8  bg-gradient-to-t from-[#ef572a] to-[#ef572a]/10'>
            <div className='w-full p-4 border-2 border-dashed rounded-xl border-teal-50 '>
                <h3 className='inline-block px-2 py-1 font-semibold bg-zinc-950'>OUR AIM IS TO OFFER YOU THE MAXIMUM VALUE</h3>

                <h1 className='my-3 text-3xl font-bold md:text-5xl sm:text-4xl ' >SUPER  <span className='text-yellow-400'>COMBO PACKAGE</span></h1>

                <p className='mb-3 tracking-wide'>
                Our Super Combo Package is specially made for people who have completely made up their minds to expand online. This package is designed to give you maximum value for your budget, so don’t wait and order now.
                </p>

                <div className='flex flex-col items-center justify-center w-full gap-2 md:flex-row'>
                    <div className='flex flex-col w-full md:flex-1'>
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
                    <div className='flex flex-col w-full md:flex-1 '>
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
                    <div className='flex flex-col w-full md:flex-1'>
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
                    
                    <div className='flex flex-col flex-1 '>
                    <div className='w-full my-8 h-36' 
                    style={{
                        backgroundImage: `url(${offer})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}> </div>
                        
                    <div className='w-full px-4 py-8 border-t-2 border-teal-50 '>
                        <span className='px-4 py-2 font-semibold border-2 border-teal-50 hover:bg-teal-50 hover:text-zinc-800'>ORDER NOW</span>
                    </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Combo
