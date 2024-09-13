import React from 'react'
import Nav from '../../Common/Nav'
import Footer from '../../Common/Footer'
import SideButtons from '../../Common/SideButtons'
const Contact = () => {
  return (

    <>
    <Nav/>
    <SideButtons/>

    <div className='flex flex-col justify-center items-center px-4 md:px-28 md:flex-row pt-16 sm:pb-0 pb-16  bg-[#181818] text-teal-50 '>
        <div className='flex-1 py-16 pr-8'>
        <h1 className='text-3xl font-bold sm:text-5xl '>Let Us Know Your Concerns And We Will Guide You To The Best Solutions.</h1>
        <p className='my-8 font-semibold'>We are business supporters and we have a dedicated customer support team to help you 24/7. You can contact us through our information at any time and we will always be ready to help.</p>

        <div className='flex justify-between w-full'>
            <div className='flex-1'>
                <h1 className='font-semibold'>Adress</h1>
                <p >4659 Penelope Ln, Plano, TX 75024</p>
            </div>
            <div className='flex-1'>
                <h1 className='font-semibold'>Adress</h1>
                <p>4659 Penelope Ln, Plano, TX 75024</p>
            </div>
        </div>

        <h1 className='my-8 text-3xl italic'>For immediate support, feel free to call us on</h1>

        <h1 className='text-3xl font-semibold tracking-widest sm:text-5xl'>(210) 920-8669</h1>
        </div>

        <div className='h-auto flex-1  bg-[#222222] p-2 sm:p-16'>
            <h1 className='mb-8 text-3xl font-bold tracking-widest sm:text-5xl'>Let’s Connect Online</h1>
            <input type='text' className='w-full p-2 my-4 text-sm bg-white border-none outline-none text-zinc-900' placeholder='Name'/>
            <input type='text' className='w-full p-2 my-4 text-sm bg-white border-none outline-none text-zinc-900' placeholder='Email'/>
            <input type='text' className='w-full p-2 my-4 text-sm bg-white border-none outline-none text-zinc-900' placeholder='Phone Number'/>

            <textarea className='w-full row-span-4 p-2 my-4 text-sm bg-white border-none outline-none text-zinc-900'/>

            <p className='font-semibold'>By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.</p>

            <span className='px-4 py-2 font-bold bg-gradient-to-r  from-[#ef572a]   to-[#e80e82]'>SEND</span>
            
        </div>
    </div>


    <Footer/>
      
    </>
  )
}

export default Contact

