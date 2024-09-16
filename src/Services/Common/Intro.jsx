import React, { useEffect } from 'react'

const Intro = ({heading  , para , image }) => {

  useEffect(() => {
    const paragraph = document.querySelector('#paragraph');
    if (paragraph) {
      paragraph.innerHTML = para; 
    }
  }, [para]); 
  return (
    <div className='w-full py-12 md:px-28 h-auto sm:px-16 px-8 bg-[#181818]  text-teal-50 '>
        <div className='flex flex-col items-center justify-center w-full h-full gap-4 md:flex-row '>
        <div className='md:flex-1 md:w-[40em] w-[20em] h-[20em]  '
          style={{backgroundImage : `url(${image})` ,
              
          backgroundPosition : "center",
          backgroundSize : "contain",
          backgroundRepeat : 'no-repeat',
                  
        }}/>
        

        <div className='flex-1'>
            <h1 className='my-8 text-3xl font-bold sm:text-4xl'>
                {heading}
            </h1>
            <p id="paragraph"></p>
        </div>
        </div>

    </div>
  )
}

export default Intro 
