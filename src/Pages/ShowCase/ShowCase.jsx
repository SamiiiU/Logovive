import React, { useEffect } from 'react'
import Nav from '../../Common/Nav'
import SideButtons from '../../Common/SideButtons'
import Footer from '../../Common/Footer'
import Hero from './ShowcaseComps/Hero'
import OurWork from './ShowcaseComps/OurWork'
import Quote from '../../Common/Quote'

const ShowCase = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  
  return (
    <div className='w-full overflow-x-hidden'>
      <Nav/>
      <SideButtons/>
        <Hero/>
        <Quote/>
        <OurWork/>

      <Footer/>
    </div>
  )
}

export default ShowCase
