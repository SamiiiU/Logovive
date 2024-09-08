import React from 'react'
import Logo from '../Assets/logo.png'

const Nav = () => {
  return (
    <div className='fixed z-50 text-teal-50 w-full px-20 py-3 bg-[#181818] flex justify-between items-center'>
      {/* Logo */}
      <div className='logo w-[15%] h-12 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}
      ></div>

      {/* NavMenu */}
      <div className='flex px-4 justify-center items-center gap-8'>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  About Us</h1>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Services</h1>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Showcase</h1>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Packages</h1>
        <h1 className='text-lg font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Contact</h1>
      </div>

        {/* Buttons  */}
        <div className='flex justify-center items-center w-[25%]  gap-2'>
            <span className='cursor-pointer flex-1 px-3 py-3 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] flex-nowrap'>(210) 920 8689</span>
            <span className='cursor-pointer  flex-1 px-4 py-3 bg-teal-50 text-blue-950 font-bold text-center'>Get A Quote</span>
        </div>

        

    </div>

  )
}

export default Nav
