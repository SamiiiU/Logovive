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

const Wordpress = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[2].name} head = {Webdev[2].heading} para={Webdev[2].paragraph} image={Webdev[2].image} />
        <Intro heading={Webdev[2].introHead} para={Webdev[2].introPara} image={Webdev[2].introImage}/>
        <Portfolio idx={2}/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Wordpress;
