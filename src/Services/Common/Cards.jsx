import React from 'react'
import cards from '../../Pages/Home/HomeData/Pricecards'

const Cards = () => {
  return (
    <div className='w-full md:px-28 sm:px-16 px-8 py-16 bg-[#181818] text-teal-50'>
      <div className='flex flex-col items-end justify-center w-full py-4 mb-8 text-3xl gap-y-4 sm:flex-row lg:text-4xl'>
            <div className= "sm:w-[40%] w-full ">
                <h1 className=' font-bold text-[#f89521] my-2'>Choose The Plan</h1>
                <h1 className='font-bold '>That Is Right For You!</h1>
            </div>

            <h1 className='lg:text-2xl text-xl sm:w-[60%] w-full leading-9'>If you are ready to expand into the digital world, now you have an option that can adjust to your budget.</h1>

            </div>

            <div className='relative flex flex-wrap items-center justify-between w-full gap-y-4 '>
                {cards.map((item , idx) => (
                    <div key={idx} className='md:w-[33%] sm:w-[45%] w-full py-4 bg-[#222222] md:hover:scale-[105%] transition-all'>
                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold border-b-2 md:text-2xl border-b-teal-50'>{item.name}</div>

                    <div className='w-full flex justify-center py-4 items-center text-xl md:text-[4rem] font-bold my-2'><span className='text-lg'>$</span>{item.price}</div>

                    <div className='custom-scrollbar w-full h-40 overflow-y-scroll  px-8 pb-16 font-[500] text-xs md:text-sm'>
                       {item.package.map((pkg , index) => (
                        <>
                         <p key={index}>{pkg}</p>
                        </>
                       ))}
                        
                    </div>

                    <div className='flex items-center justify-center w-full py-2 text-lg font-semibold border-y-2 border-teal-50'>speak with us </div>
                    <div className='flex items-center justify-center w-full text-lg font-semibold '>adas</div>
                    

                    <div className='flex justify-center w-full py-4 '><span className='absolute px-4 py-2 
                    bg-gradient-to-r  from-[#ef572a] to-[#e80e82] font-semibold'>ORDER NOW</span></div>

                </div> 
                ))}

            </div>

    </div>
  )
}

export default Cards
