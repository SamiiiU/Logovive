import React, { useEffect } from 'react'
import special from '../../../Assets/HeroAsset/special.jpg'
import {initAOS} from '../../../Animation/AosAnimation'

const Special = () => {
  useEffect(() => {
    initAOS( 50 , 500 , 1000 );
  }, []);

  return (
    <div className='w-full  py-8 bg-[#181818] text-teal-50'>
      <div className='flex flex-col items-center justify-start w-full px-8 mb-16 sm:px-16 md:px-28 '>
      <h1 data-aos="fade-up" className='px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]   mb-2 to-[#e80e82]'>Our Service</h1>
      
      <h1 data-aos="fade-up" className="my-2 text-3xl font-bold text-center uppercase md:text-5xl sm:text-4xl">We Specialized In Web-Based Services</h1>

      <p data-aos="fade-up" className='mb-8 font-medium text-center'>Our team is comprised of expert designers, programmers, and marketers. The total combined experience in our company is over 200 years in multiple fields. We can support your business to build up its worth online.</p>

        <div className='flex flex-wrap justify-between w-full mb-8 text-3xl font-bold gap-y-8'>
            <div  data-aos="zoom-in" className='hover:scale-[105%] transition-all w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#17094b] h-44'>Logo Designing</div>

            <div data-aos="zoom-in" className='hover:scale-[105%] transition-all  w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#79d5dd] h-44'>Web & CMS Developent</div>

            <div data-aos="zoom-in" className='hover:scale-[105%] transition-all w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#191e2a] h-44'>Mobile Apps</div>

            <div data-aos="zoom-in" className='hover:scale-[105%] transition-all w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#333333] h-44'>Video Animation</div>

            <div  data-aos="zoom-in" className='hover:scale-[105%] transition-all w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#62cdb0] h-44'>Digital Marketing</div>

            <div data-aos="zoom-in" className='hover:scale-[105%] transition-all w-full md:w-[32%] p-8 rounded-2xl  text-center flex justify-center items-center bg-[#c4a1b4] h-44'>Coporate Branding</div>
        </div>

      </div>

      <div data-aos="fade-up" className='w-full flex justify md:flex-row flex-col center h-screen sm:h-[50vh] bg-zinc-950'>
        <div className='flex-1 h-40 sm:h-full' 
        style={{
            backgroundImage: `url(${special})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',

        }}
        ></div>
        <div className='flex flex-col items-start justify-center flex-1 gap-4 px-8 py-8 sm:h-full '>
            <h1 className='text-3xl font-bold sm:text-4xl '>Let Us Give Your Customers <br/> The Ultimate Web Experience</h1>

            <p>You and your customers deserve the best, so that is what we promise to deliver. Our experts will make sure that your customers are easily converted to clients.</p>

           


        </div>
      </div>
    </div>
  )
}

export default Special
