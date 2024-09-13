import React, { useEffect, useState } from 'react'
import Logo from '../Assets/mern.png'
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";

const Nav = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpen , setMenuOpen] = useState(false)

  useEffect(() => {
    // Function to update the screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    console.log("size yera ",screenWidth)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlemenu = () => {
    setMenuOpen(!isMenuOpen);

  }

  return (
    <>
    <div className={` ${screenWidth > 860 ? "flex" : 'hidden'}  z-40 text-teal-50 w-full px-16 lg:px-20 py-3 bg-[#181818]  justify-between items-center`}>
      {/* Logo */}
      <div className='logo w-[15%] h-12 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}
      ></div>

      {/* NavMenu */}
      <div className='flex items-center justify-center gap-4 px-4 text-sm lg:gap-8 xl:text-[1rem]'>
        <Link to='/'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1></Link>
        <Link to='/About'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> About</h1></Link>
        <h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Services</h1>
        <Link to='/Showcase'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>Showcase</h1></Link>
        <Link to='/Package'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Packages</h1></Link>
        <Link to='/Contact'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Contact</h1></Link>
      </div>

        {/* Buttons  */}
        <div className='flex items-center justify-center w-auto gap-2 text-sm xl:text-sm'>
  
            <span className='cursor-pointer  px-3 py-2 font-bold text-center  bg-gradient-to-r  from-[#ef572a] to-[#e80e82] flex-nowrap'>(210) 920 8689</span>
            <span className='flex-1 px-3 py-2 font-bold text-center cursor-pointer bg-teal-50 text-blue-950'>Get A Quote</span>
        </div>



    </div>
      
    <div className={`fixed top-0 left-0 ${screenWidth < 860 ? "flex" : 'hidden'} z-40 items-center justify-between w-full px-8 mb-6`}>
      <div className='logo w-[50%] h-20 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
      ></div>

      <div className='text-4xl text-teal-50' onClick={handlemenu}>
        <AiOutlineMenuFold/>
      </div>
    </div>

    <div className={`fixed pt-28 text-xl transition-all   z-50 top-0 ${isMenuOpen ? 'left-0' : 'left-[-100%]'} w-[70%] h-full bg-teal-50 text-center`}>


        <div className='absolute top-4 left-4  w-[80%] h-20 '
        style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
        ></div>


        <Link to='/'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1></Link>
        <Link to='/About'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> About</h1></Link>
        <Link to='/Showcase'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Services</h1></Link>

        <Link to='/Showcase'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Showcase</h1></Link>

        <Link to='/Package'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Package</h1></Link>

        <Link to='/Contact'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Contact</h1></Link>
        

    </div>
    </>

    

  )
}

export default Nav
