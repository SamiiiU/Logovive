import React, { useEffect, useState } from 'react'
import Logo from '../Assets/mern.png'

const Nav = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    console.log("size yera ",screenWidth)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
    <div className={`fixed ${screenWidth > 860 ? "flex" : 'hidden'}  z-40 text-teal-50 w-full px-16 lg:px-20 py-3 bg-[#181818]  justify-between items-center`}>
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
        <div className='flex items-center justify-center w-auto gap-2 text-sm xl:text-lg'>
  
            <span className='cursor-pointer  px-3 py-2 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] flex-nowrap'>(210) 920 8689</span>
            <span className='flex-1 px-2 py-2 font-bold text-center cursor-pointer bg-teal-50 text-blue-950'>Get A Quote</span>
        </div>



      </div>
      
      <div className='w-[80%] '></div>
      </>

  )
}

export default Nav
