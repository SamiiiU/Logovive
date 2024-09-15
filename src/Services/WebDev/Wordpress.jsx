import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'

const Wordpress = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[2].name} head = {Webdev[2].heading} para={Webdev[2].paragraph} image={Webdev[2].image} />
        <Footer/>
    </div>
  )
}

export default Wordpress;
