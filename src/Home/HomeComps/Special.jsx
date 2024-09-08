import React from 'react'
import special from '../../Assets/HeroAsset/special.jpg'

const Special = () => {
  return (
    <div className='w-full  py-8 bg-[#181818] text-teal-50'>
      <div className='w-full px-28 mb-16  flex flex-col justify-start items-center '>
      <h1 className='px-3 font-bold rounded-md bg-gradient-to-r  from-[#ef572a]   mb-2 to-[#e80e82]'>Our Service</h1>
      
      <h1 className="font-bold uppercase text-5xl my-2">We Specialized In Web-Based Services</h1>

      <p className='text-center font-medium mb-8'>Our team is comprised of expert designers, programmers, and marketers. The total combined experience in our company is over 200 years in multiple fields. We can support your business to build up its worth online.</p>

        <div className='w-full flex flex-wrap gap-y-4 justify-between mb-8'>
            <div className='hover:scale-[105%] transition-all w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#17094b] h-44'>Logo Designing</div>

            <div className='hover:scale-[105%] transition-all  w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#79d5dd] h-44'>Web & CMS Developent</div>

            <div className='hover:scale-[105%] transition-all w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#191e2a] h-44'>Mobile Apps</div>

            <div className='hover:scale-[105%] transition-all w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#333333] h-44'>Video Animation</div>

            <div className='hover:scale-[105%] transition-all w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#62cdb0] h-44'>Digital Marketing</div>

            <div className='hover:scale-[105%] transition-all w-[32%] p-8 rounded-2xl font-bold text-3xl text-center flex justify-center items-center bg-[#c4a1b4] h-44'>Coporate Branding</div>
        </div>

      </div>

      <div className='w-full flex justify center h-[50vh] bg-zinc-950'>
        <div className='flex-1 h-full' 
        style={{
            backgroundImage: `url(${special})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',

        }}
        ></div>
        <div className='flex-1 h-full px-8 py-8 flex flex-col justify-center items-start gap-4   '>
            <h1 className='font-bold text-4xl '>Let Us Give Your Customers <br/> The Ultimate Web Experience</h1>

            <p>You and your customers deserve the best, so that is what we promise to deliver. Our experts will make sure that your customers are easily converted to clients.</p>

           


        </div>
      </div>
    </div>
  )
}

export default Special
