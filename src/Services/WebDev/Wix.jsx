import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'

const Wix = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[3].name} head = {Webdev[3].heading} para={Webdev[3].paragraph} image={Webdev[3].image} />
        <Footer/>
    </div>
  )
}

export default Wix;
