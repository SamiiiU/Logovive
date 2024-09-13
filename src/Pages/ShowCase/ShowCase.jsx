import React from 'react'
import Nav from '../../Common/Nav'
import SideButtons from '../../Common/SideButtons'
import Footer from '../../Common/Footer'
import Hero from './ShowcaseComps/Hero'
import OurWork from './ShowcaseComps/OurWork'

const ShowCase = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Nav/>
      <SideButtons/>
        <Hero/>
        <OurWork/>

      <Footer/>
    </div>
  )
}

export default ShowCase
