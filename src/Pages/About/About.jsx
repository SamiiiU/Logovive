import React, { useEffect } from 'react'
import SideButtons from '../../Common/SideButtons'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import Hero from './AboutComps/Hero'
import Strategy from './AboutComps/Strategy'
import Services from './AboutComps/Services'
import Expierence from './AboutComps/Exp'
import ContactForm from '../../Common/ContactForm'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='w-full overflow-x-hidden'>
        <SideButtons/>
        <Nav/>
        <Hero/>
        <Strategy/>
        <Services/>
        <Expierence/>
        {/* Form for contact */}
        <ContactForm/>


        <Footer/>
      
    </div>
  )
}

export default About
