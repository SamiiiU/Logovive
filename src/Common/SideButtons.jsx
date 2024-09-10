import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";



const SideButtons = () => {
  return (
    <div className='fixed translate-x-[90%] sm:translate-x-[80%] flex flex-col  pt-8 transition-all gap-16  sm:gap-4 top-0 z-50 w-[300px] right-0 h-[90vh] '>
      <div className='flex  transition-[2s] hover:translate-x-[-90%]  items-center justify-center w-full bg-zinc-900 text-teal-50'>
           <div className='flex items-center justify-center p-4 text-lg bg-red-600 sm:text-xl'> <FaPhoneAlt  /></div>
            <h1 className='w-full px-4 font-semibold'>(210) 920 8689</h1>
      </div>

      <div className='flex items-center justify-center
       transition-[2s] hover:translate-x-[-90%]  w-full bg-zinc-900 text-teal-50'>
           <div className='flex items-center justify-center p-4 text-xl bg-red-600 sm:text-xl'> <BsChatDotsFill  /></div>
            <h1 className='w-full px-4 font-bold '>LIVE CHAT</h1>
      </div>

      <div className='flex items-center justify-center  transition-[2s]  hover:translate-x-[-90%]  w-full h-fit bg-zinc-900 text-teal-50'>
      <div className='px-2 py-2 text-lg font-bold tracking-wider bg-red-600 sm:px-4 sm:text-xl sm:py-16 ' style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
        Get FREE design consultation
        </div>
            <h1 className='w-full px-4 font-bold '>LIVE CHAT</h1>
      </div>

      
    </div>
  )
}

export default SideButtons 
