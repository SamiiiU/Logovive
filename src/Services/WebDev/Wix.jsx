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


const Wix = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[3].name} head = {Webdev[3].heading} para={Webdev[3].paragraph} image={Webdev[3].image} />

        <Intro heading={Webdev[3].introHead} para={Webdev[3].introPara} image={Webdev[3].introImage}/>

        <Portfolio idx={3}/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Wix;
