import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";



const SideButtons = () => {
  return (
    <div className='fixed flex flex-col pt-8 transition-all  gap-4 top-0 z-50 w-[300px] right-0 h-[90vh] '>
      <div className='flex sm:translate-x-[80%] translate-x-[90%] transition-[2s] hover:translate-x-0  items-center justify-center w-full bg-zinc-900 text-teal-50'>
           <div className='flex items-center justify-center p-4 text-xl bg-red-600 sm:text-4xl'> <FaPhoneAlt  /></div>
            <h1 className='w-full px-4 font-semibold'>(210) 920 8689</h1>
      </div>

      <div className='flex items-center justify-center
      sm:translate-x-[80%] translate-x-[90%] transition-[2s] hover:translate-x-0  w-full bg-zinc-900 text-teal-50'>
           <div className='flex items-center justify-center p-4 text-xl bg-red-600 sm:text-4xl'> <BsChatDotsFill  /></div>
            <h1 className='w-full px-4 font-bold '>LIVE CHAT</h1>
      </div>

      <div className='flex items-center justify-center sm:translate-x-[80%] transition-[2s] translate-x-[90%] hover:translate-x-0  w-full h-full bg-zinc-900 text-teal-50'>
      <div className='text-lg font-bold tracking-wider bg-red-600 sm:px-4 py-28 sm:text-2xl sm:py-2 ' style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
        Get FREE design consultation
        </div>
            <h1 className='w-full px-4 font-bold '>LIVE CHAT</h1>
      </div>

      
    </div>
  )
}

export default SideButtons 
