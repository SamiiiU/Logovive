import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'

const Ecommerce = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[4].name} head = {Webdev[4].heading} para={Webdev[4].paragraph} image={Webdev[4].image} />
        <Footer/>
    </div>
  )
}

export default Ecommerce;
