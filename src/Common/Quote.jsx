import React, { useContext } from 'react'
import { useGlobalContext} from '../GlobalStates/GlobalState'
import quoteImg from '../Assets/quoteImg.jpg'
import { RxCross1 } from "react-icons/rx";



const Quote = () => {
    const {
        isDarkMode, 
        toggleDarkMode ,
        isQuote , 
        setIsQuote 
    } = useGlobalContext();

    const handleClose = () => {
        setIsQuote(false)
        console.log(isQuote)
        console.log(213123)
    }
    
  return (
    <div className={` overflow-y-scroll  top-0 left-0 ${isQuote ? 'fixed' : 'hidden'} flex items-center justify-center w-full h-full sm:pt-0 pt-20 bg-zinc-900/60 `}>
      <div className='relative w-[80%] md:h-full h-fit sm:py-0 py-8 sm:px-20 px-4 bg-white flex md:flex-row flex-col flex-nowrap md:justify-center gap-0 md:items-center' >
        {/* close button  */}

        <div className='absolute flex items-center justify-center w-2 h-2 p-2 text-white bg-red-600 border-4 border-red-600 rounded-full cursor-pointer sm:border-8 sm:w-8 sm:h-8 sm:right-6 sm:top-6 top-2 right-2 ' onClick={handleClose}>
            <span className='absolute w-1 h-full rotate-45 bg-white rounded-md'></span>
            <span className='absolute w-1 h-full -rotate-45 bg-white rounded-md'></span>
        </div>

        {/* img of quote  */}
        <div className='md:relative  md:w-[50%] sm:w-56 sm:h-56   md:h-full md:mt-36 '
        style={{
            backgroundImage : `url(${quoteImg})` , backgroundSize : '80%',
            backgroundRepeat : 'no-repeat'
          }}
        />
        <div className='md:w-[50%] w-full md:h-full h-1/2 md:mt-36'
        >
            <h1 className='text-2xl font-bold sm:text-4xl'>Get a Free Quote </h1>
            <p className='mt-5'>
                Providing you the solutions for your business grow 
            </p>

            <input type='text' placeholder='Full Name' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <input type='email' placeholder='Email Adress' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <input type='number' placeholder='Phone No.' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <textarea  placeholder='Brief Description of your project.' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium laboriosam vitae quidem cumque deleniti non, ut tenetur quam a cupiditate harum ratione alias delectus. Voluptatum, impedit illo? Tenetur, ipsum!
            </p>


            <button className='px-4 py-2 mt-4 text-sm font-semibold tracking-wider text-white uppercase bg-black sm:text-2xl' onClick={handleClose}>Sumbit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Quote
