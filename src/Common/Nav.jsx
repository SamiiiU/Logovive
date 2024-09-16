import React, { useEffect, useState } from 'react'
import Logo from '../Assets/mern.png'
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

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

   // State to track visibility
   const [isVisible, setIsVisible] = useState(false);

   const showMenu = () => {
    setIsVisible(true);  // Show the child div when mouse enters parent or child
  };

  const hideMenu = () => {
    setIsVisible(false); // Hide the child div when mouse leaves both parent and child
  };

  // State to control dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={` ${screenWidth > 860 ? "flex" : 'hidden'}  z-40 text-teal-50 w-full px-16 lg:px-20 py-3 bg-[#181818]  justify-between items-center`}>
      {/* Logo */}
      <div className='logo w-[15%] h-12 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat'}}
      ></div>

      {/* NavMenu */}
      <div className='uppercase flex items-center justify-center gap-4 px-4 text-sm lg:gap-8 xl:text-[1rem]'>

         {/* go to Home  */}
        <Link to='/'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1></Link>

          {/* go to about  */}
        <Link to='/About'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> About</h1></Link>

        {/* Complete navigations for services */}
        <div className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'
           onMouseEnter={showMenu}  
        >
           <h1> Services</h1>
           {/* Div containing all the navs of services  */}
           <div className={`animate-fadeUp uppercase z-50 w-[50%] ${isVisible ? 'flex' : 'hidden'} gap-8 justify-between items-start absolute px-8 py-8 bg-[#181818] top-20 right-36 text-teal-50`}
             onMouseEnter={showMenu}  
             onMouseLeave={hideMenu}  
           >
            {/* All web designing navs  */}
            <div className='flex flex-col flex-1 text-sm gap-y-4'>

              <h1 className='mb-4 text-xl'>WEBSITE DESIGN</h1>
              <Link to="/webdev"><p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Design & Development</p></Link>
              <Link to="/shopify"><p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Shopify Website</p></Link>
              <Link to="/wordpress"><p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Wordpress Website</p></Link>
              <Link to="/wix"><p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Wix Website</p></Link>
              <Link to="/ecommerce"><p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>E-commerce Website</p></Link>
            </div>

            {/* All Mob apps navs  */}
            <div className='flex flex-col flex-1 text-sm gap-y-4'>
            <h1 className='mb-4 text-xl'>Mobile Applications </h1>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>IOS APPS</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Game apps</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Abdroid apps</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Hybrid Apps</p>

            </div>

            {/* ALl Marketing navs  */}
            <div className='flex flex-col flex-1 text-sm gap-y-4'>
            <h1 className='mb-4 text-xl'>Marketing</h1>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>SEO</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>PPC</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Digital Marketing</p>
              <p className='w-full py-1 transition-all hover:pl-4 hover:bg-orange-pink'>Content Writing</p>
            </div>

            </div>

        </div>

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


    {/* Started here the nav for small devices  */}
      
    <div className={`fixed top-0 left-0 ${screenWidth < 860 ? "flex" : 'hidden'} z-40 items-center justify-between w-full px-8 mb-6`}>
      {/* Logo  */}
      <div className='logo w-[50%] h-20 '
      style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
      ></div>

      {/* Open button  */}

      <div className='text-4xl rotate-180 text-teal-50' onClick={handlemenu}>
        <AiOutlineMenuFold/>
      </div>
    </div>
      

      {/* Main navigation  */}
     <div className={`fixed pt-28 text-xl transition-all bg-   z-50 top-0 ${isMenuOpen ? 'left-0' : 'left-[-100%]'} w-[100%] h-full  bg-zinc-950/70 text-center text-teal-50`}>

      <div className='absolute text-4xl right-6 top-6 text-teal-50' onClick={handlemenu}>
        <AiOutlineMenuFold/>
      </div>

        <div className='absolute top-4 left-4  w-[50%] h-20 '
        style={{backgroundImage : `url(${Logo})` , backgroundSize : '60%' , backgroundPosition : 'left' , backgroundRepeat : 'no-repeat'}}
        ></div>



        <Link to='/'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'>  Home</h1></Link>


        <Link to='/About'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> About</h1></Link>


        <div onClick={toggleDropdown} className='relative font-medium cursor-pointer '>
          <h1>{"Services ->"}</h1>
          <ul className={`transition-all translate-x-40 text-left duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <li>Web Designing
              <ul className='translate-x-8'>
                <Link to="/webdev"><li>Website </li></Link>
                <Link to="/wordpress"><li>Wordpress</li></Link>
                <Link to="/ecommerce"><li>Ecommerce Web</li></Link>
                <Link to="/shopify"><li>Shopify</li></Link>
                <Link to="/wix"><li>Wix Web</li></Link>
              </ul>
            </li>
            
            <li>App Developement
              <ul className='translate-x-8'>
                <li>Android App </li>
                <li>IOS App </li>
                <li>Hybrid App </li>
                <li>Game Apps </li>
              </ul>
            </li>

            <li>Marketing
            <ul className='translate-x-8'>
                <li>Digital Marketing </li>
                <li>PPC </li>
                <li>SEO</li>
                <li>Content Writing</li>
              </ul>
            </li>
          </ul>
          </div>

        <Link to='/Showcase'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Showcase</h1></Link>

        <Link to='/Package'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Package</h1></Link>

        <Link to='/Contact'><h1 className=' font-medium cursor-pointer hover:text-[#ef572a] transition-all'> Contact</h1></Link>
        

    </div>

    </>

    

  )
}

export default Nav
