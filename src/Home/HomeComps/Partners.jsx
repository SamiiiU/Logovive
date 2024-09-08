import React from 'react'
import { FaWix } from "react-icons/fa6";
import manager from '../../Assets/HeroAsset/manager.jpg'
import { MdOutlineDisplaySettings } from "react-icons/md";
import offer from '../../Assets/HeroAsset/offer.webp'


const Partners = () => {
  return (

    <div className='text-teal-50  w-full py-8 bg-[#181818] '>
      <div className='flex px-24  mb-16'>
        <h1 className='font-bold text-3xl w-[20%] flex justify-center items-center '>Our Partners</h1>

        <div className='w-[80%] flex justify-between items-center'>
            <span className='w-[20%] text-center flex justify-center items-center'><FaWix size='3em'/></span>

            <span className='w-[20%] text-center flex justify-center items-center'><FaWix size='3em'/></span>

            <span className='w-[20%] text-center flex justify-center items-center
            '><FaWix  size='3em'/></span>

            <span className='w-[20%] text-center flex justify-center items-center'><FaWix  size='3em'/></span>

            <span className='w-[20%] text-center flex justify-center items-center'><FaWix  size='3em'/></span>

        </div>
        </div>
        

      {/* About us starting............. */}

      <div className='flex gap-6 w-full my-8 h-[90vh] justify-center items-center'>
            <div
            className="image w-[40%] p-8 h-full bg-sky-200"
            style={{
                backgroundImage: `url(${manager})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                clipPath: 'polygon(20% 0%, 330% 0%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)',
            }}
            >
            
            </div>

            <div className='flex  h-full w-[60%] flex-col items-start pr-16'>
                <h1 className='px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]  mb-2 to-[#e80e82]'>About Us</h1>
                <h1 className='mb-8 text-5xl font-bold'>We Transform Businesses Into Brands</h1>

                <p className='leading-5 font-semibold'>Our experts are known for branding common businesses into brands. When your business is online you too have the power to reach customers all around the world. We will make sure that there is a worldwide audience waiting for your products.</p>


                {/* 3 box icons  */}
                <div className='w-full mb-10 flex justify-between items-center'>
                <div className='flex-1 px-4'>
                    <div className='w-full flex justify-center py-4  text-center'><MdOutlineDisplaySettings className='text-[3em] text-[#684af4]'/></div>
                    <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                    SOLUTION DEVELOPMENT    

                    </h1>

                    <p className='text-center '>

                    We make sure that you get a digital solution equipped with all your business needs.
                    </p>
                    </div>


                    <div className='flex-1 px-4 '>
                    <div className='w-full flex justify-center py-4 -800 text-center'><MdOutlineDisplaySettings className='text-[3em] text-[#ef572a]'/></div>
                    <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                    AUDIENCE TARGETING

                    </h1>

                    <p className='text-center '>

                    The people who are already looking for your products online are your targeted audience.
                    </p>
                    </div>
             

                    <div className='flex-1 px-4'>
                    <div className='w-full flex justify-center py-4  text-center'><MdOutlineDisplaySettings className='text-[3em] text-[#28afa3]'/></div>
                    <h1 className='text-[#f89521] leading-none font-bold text-xl my-4 text-center'>
                    MARKETING PERFORMANCE

                    </h1>

                    <p className='text-center '>

                    Our experts know how to make your site perform exceptionally through effective marketing.
                    </p>
                    </div>

                </div>

                <div className='flex justify-center items-center w-[60%]  gap-2'>
                    <span className='flex-1 px-3 py-3 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] border-2 border-[#e80e82] flex-nowrap'>Read More</span>
                    <span className='flex-1 px-4 py-3 border-2 border-[#ef572a] bg-transparent text-[#ef572a] font-bold text-center'>Get A Quote</span>
                </div>
            </div>

        </div>

        {/* Choosing plan  */}
        <div className='w-full px-28 py-4 flex justify-center items-end mt-16 mb-8'>
            <div className= "w-[40%] ">
                <h1 className='text-4xl font-bold text-[#f89521] my-2'>Choosing the plan</h1>
                <h1 className='text-4xl font-bold'>That Is Right For You!</h1>
            </div>

            <h1 className='text-2xl w-[60%] leading-9'>If you are ready to expand into the digital world, now you have an option that can adjust to your budget.</h1>

        </div>

        <div className='w-full px-28 py-4'>
            <div className='w-full flex justify-between items-center'>

                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Logo Design</h1>
                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Website</h1>
                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Video</h1>
                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Print Design</h1>
                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Branding</h1>
                
                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Ecommerce </h1>

                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  SEO</h1>

                <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Combo Packages </h1>
            </div>

            <div className='w-full  py-4 flex justify-center items-end  mb-8'>
            <div className= "w-[40%] ">
                <h1 className='text-4xl font-bold text-[#f89521] my-2'>Pricing Plans</h1>
                <h1 className='text-4xl font-bold'>that Work for You!</h1>
            </div>

            <h1 className='text-2xl w-[60%] leading-9'>Ready to get started? Experience the industry’s best design deals structured according to your business needs.</h1>

            </div>

            <div className='w-full flex justify-between items-center flex-wrap gap-y-4'>
                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div> 

                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div>

                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div>   

                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div>

                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div>

                <div className='w-[33%] py-4 bg-[#222222] hover:scale-[105%] transition-all'>
                    <div className='w-full flex justify-center items-center py-2 text-2xl font-semibold border-b-2 border-b-teal-50'>Logo Basic Design</div>

                    <div className='w-full flex justify-center py-4 items-center text-[4rem] font-bold '><span className='text-lg'>$</span>100</div>

                    <div className='w-full px-8 pb-16 font-[500] text-[1rem]'>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                        <p>4 Unique Logo Concepts</p>
                        <p>FREE Icon</p>
                    </div>

                    <div className='w-full flex justify-center items-center py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='w-full flex justify-center items-center  text-lg font-semibold '>adas</div>
                    

                    <div className='w-full py-4 flex justify-center '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div>
            </div>

            

        </div>

        <div className='w-full px-24 flex justify-center items-center py-8 mt-16 bg-gradient-to-t from-[#ef572a] to-[#ef572a]/10'>
            <div className='w-full rounded-xl p-4 border-dashed border-2 border-teal-50 '>
                <h1 className='bg-zinc-950 px-2 py-1 inline-block font-semibold'>OUR AIM IS TO OFFER YOU THE MAXIMUM VALUE</h1>

                <h1 className='text-5xl font-bold my-3' >SUPER  <span className='text-yellow-400'>COMBO PACKAGE</span></h1>

                <p className='tracking-wide mb-3'>
                Our Super Combo Package is specially made for people who have completely made up their minds to expand online. This package is designed to give you maximum value for your budget, so don’t wait and order now.
                </p>

                <div className='flex justify-center items-center w-full gap-2'>
                    <div className='flex-1 flex flex-col'>
                        <h1 className='font-bold text-2xl'>Logo Design</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>Unlimited Logo Design Concepts</li>
                            <li className='mt-2'>Unlimited Revisions</li>
                            <li className='mt-2'>Icon Design</li>
                            <li className='mt-2'>All Final File Formats</li>

                            
                        </ul>

                        <h1 className='font-bold text-2xl'>Stetionary Design</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>Business Card, Letterhead, Envelope</li>
                            <li className='mt-2'>MS Word Letterhead</li>
                        </ul>
                    </div>

                    {/* combo 2 */}
                    <div className='flex-1 flex flex-col'>
                    <h1 className='font-bold text-2xl'>Website Design</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>UNLIMITED Pages Website</li>
                            <li className='mt-2'>Content Management System (CMS)</li>
                            <li className='mt-2'>Mobile Responsive</li>
                            <li className='mt-2'>Any 3 Social Media Platforms</li>

                            
                        </ul>

                        <h1 className='font-bold text-2xl'>Social Media Designs</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>Facebook, Twitter, Youtube, Linkedin</li>

                        </ul>
                    </div>
                    
                    {/* Combo 3  */}
                    <div className='flex-1 flex flex-col'>
                    <h1 className='font-bold text-2xl'>Banner Design</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>2 Design Concepts</li>
                            <li className='mt-2'>2 Stock Photos for Banners</li>        
                        </ul>

                        <h1 className='font-bold text-2xl'>Value Added Services</h1>
                        <ul className='text-sm px-2 list-item my-4'>
                            <li className='mt-2'>Dedicated Account Manager</li>
                            <li className='mt-2'>100% Ownership Rights</li>
                            <li className='mt-2'>100% Money Back Guarantee</li>
                            <li className='mt-2'>Complete Deployment</li>
                        </ul>
                    </div>
                    
                    <div className='flex-1 flex flex-col '>
                    <div className='w-full h-36 my-8' 
                    style={{
                        backgroundImage: `url(${offer})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}> </div>
                        
                    <div className='w-full px-4 py-8 border-teal-50 border-t-2 '>
                        <span className='px-4 py-2 border-2 border-teal-50 font-semibold hover:bg-teal-50 hover:text-zinc-800'>ORDER NOW</span>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners
