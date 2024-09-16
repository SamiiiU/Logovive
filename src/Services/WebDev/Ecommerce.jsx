import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'
import Intro from '../Common/Intro'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'
import Cards from '../Common/Cards'

const Ecommerce = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[4].name} head = {Webdev[4].heading} para={Webdev[4].paragraph} image={Webdev[4].image} />
        <Intro heading={Webdev[4].introHead} para={Webdev[4].introPara} image={Webdev[4].introImage}/>
        <Cards type={"ecommerce"}/>
        <Portfolio idx={4}/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Ecommerce;
