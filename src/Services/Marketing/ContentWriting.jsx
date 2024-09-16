import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import { marketing } from '../Services Data/Marketing'
import Intro from '../Common/Intro'
import Cards from '../Common/Cards'
import Portfolio from '../Common/Portfolio'
import Experience from '../../Pages/Home/HomeComps/Expierence'
import Contact from '../../Common/ContactForm'

const DigitalMarketing = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <div className='w-full overflow-x-hidden'>
    <Nav/>
    <SideButtons/>
    <Hero name={marketing[3].name} head = {marketing[3].heading} para={marketing[3].paragraph} image={marketing[3].image} />
    <Intro heading={marketing[3].introHead} para={marketing[3].introPara} image={marketing[3].introImage}/>
    <Cards/>
    <Portfolio idx={0}/>
    <Experience/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default DigitalMarketing
