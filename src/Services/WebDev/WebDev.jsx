import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
import Hero from '../Common/Hero'
import {Webdev} from '../Services Data/WebDev'

const WebDev = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Nav/>
        <SideButtons/>
        <Hero name={Webdev[0].name} head = {Webdev[0].heading} para={Webdev[0].paragraph} image={Webdev[0].image} />
        <Footer/>
    </div>
  )
}

export default WebDev
