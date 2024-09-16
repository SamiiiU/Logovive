import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import { android } from '../Services Data/AndroidData'
import Intro from '../Common/Intro'
import Cards from '../Common/Cards'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'

const Android = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

      
  return (
    <div className='w-full overflow-x-hidden'>
    <Nav/>
    <SideButtons/>
    <Hero name={android[2].name} head = {android[2].heading} para={android[2].paragraph} image={android[2].image} />
    <Intro heading={android[2].introHead} para={android[2].introPara} image={android[2].introImage}/>
    <Cards/>
    <Portfolio idx={2}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default Android
