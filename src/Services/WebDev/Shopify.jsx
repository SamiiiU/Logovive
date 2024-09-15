import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'

const Shopify = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[1].name} head = {Webdev[1].heading} para={Webdev[1].paragraph} image={Webdev[1].image} />
        <Footer/>
    </div>
  )
}

export default Shopify;
