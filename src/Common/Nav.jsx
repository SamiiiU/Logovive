import React from 'react'
import Logo from '../Assets/logo.png'

const Nav = () => {
  return (
    <div className='md:flex hidden z-50 text-teal-50 w-full px-20 py-3 bg-[#181818]  justify-between items-center'>
      {/* Logo */}
      <div className='logo w-[15%] h-12 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}
      ></div>

      {/* NavMenu */}
      <div className='flex items-center justify-center gap-4 px-4 text-sm lg:gap-8 xl:text-lg'>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  About Us</h1>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Services</h1>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Showcase</h1>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Packages</h1>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Contact</h1>
      </div>

        {/* Buttons  */}
        <div className='flex justify-center items-center w-[25%] xl:text-lg text-sm gap-2'>
            <span className='cursor-pointer flex-1 px-3 py-3 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] flex-nowrap'>(210) 920 8689</span>
            <span className='flex-1 px-4 py-3 font-bold text-center cursor-pointer bg-teal-50 text-blue-950'>Get A Quote</span>
        </div>



      </div>

  )
}

export default Nav
