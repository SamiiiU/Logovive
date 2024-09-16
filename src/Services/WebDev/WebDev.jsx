import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'
import Intro from '../Common/Intro'
import Cards from '../Common/Cards'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'

const WebDev = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[0].name} head = {Webdev[0].heading} para={Webdev[0].paragraph} image={Webdev[0].image} />
        <Intro heading={Webdev[0].introHead} para={Webdev[0].introPara} image={Webdev[0].introImage}/>
        <Cards/>
        <Portfolio idx={0}/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default WebDev
