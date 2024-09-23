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
    <div className={`  top-0 left-0 ${isQuote ? 'fixed' : 'hidden'} flex items-center justify-center w-full h-full bg-zinc-900/60 `}>
      <div className='relative w-[80%] h-screen px-8 bg-white flex flex-nowrap justify-center items-center  ' >
        {/* close button  */}

        <div className='absolute flex items-center justify-center w-8 h-8 p-2 text-white bg-red-600 border-8 border-red-600 rounded-full cursor-pointer right-6 top-6' onClick={handleClose}>
            <span className='absolute w-1 h-full rotate-45 bg-white rounded-md'></span>
            <span className='absolute w-1 h-full -rotate-45 bg-white rounded-md'></span>
        </div>

        {/* img of quote  */}
        <div className='w-[50%] h-full mt-36 '
        style={{
            backgroundImage : `url(${quoteImg})` , backgroundSize : '80%',
            backgroundRepeat : 'no-repeat'
          }}
        />
        <div className='w-[50%] h-full mt-36'
        >
            <h1 className='text-4xl font-bold'>Get a Free Quote </h1>
            <p className='mt-5'>
                Providing you the solutions for your business grow 
            </p>

            <input type='text' placeholder='Full Name' className='w-full px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <input type='email' placeholder='Email Adress' className='w-full px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <input type='number' placeholder='Phone No.' className='w-full px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <textarea  placeholder='Brief Description of your project.' className='w-full px-4 py-2 mt-5 border-[3px] border-zinc-900' />

            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium laboriosam vitae quidem cumque deleniti non, ut tenetur quam a cupiditate harum ratione alias delectus. Voluptatum, impedit illo? Tenetur, ipsum!
            </p>


            <button className='px-4 py-2 mt-4 text-2xl font-semibold tracking-wider text-white uppercase bg-black' onClick={handleClose}>Sumbit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Quote
