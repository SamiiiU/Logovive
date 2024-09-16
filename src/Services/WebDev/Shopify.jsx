import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'
import Intro from '../Common/Intro'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'


const Shopify = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[1].name} head = {Webdev[1].heading} para={Webdev[1].paragraph} image={Webdev[1].image} />
        <Intro heading={Webdev[1].introHead} para={Webdev[1].introPara} image={Webdev[1].introImage}/>
        <Portfolio idx={1}/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Shopify;
