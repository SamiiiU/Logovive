import React from 'react'
import SideButtons from '../Common/SideButtons'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import Hero from './AboutComps/Hero'
import Strategy from './AboutComps/Strategy'
import Services from './AboutComps/Services'
import Expierence from './AboutComps/Exp'

const About = () => {
  return (
    <div className='w-full'>
        <SideButtons/>
        <Nav/>
        <Hero/>
        <Strategy/>
        <Services/>
        <Expierence/>


        <Footer/>
      
    </div>
  )
}

export default About
