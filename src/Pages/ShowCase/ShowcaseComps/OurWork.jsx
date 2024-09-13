import React, { useState } from 'react'

const OurWork = () => {

  const [previousElement, setPreviousElement] = useState(null);

const ChangeShow = (e) => {
  // Define gradient classes as an array
  const gradientClasses = ['bg-gradient-to-r', 'from-[#ef572a]', 'to-[#e80e82]'];
  
  let selectedId = e.target.id; // Get the id of the clicked element
  let selectedElement = document.getElementById(selectedId); // Select the element by its id

  // Remove the gradient classes from the previous element if it exists
  if (previousElement) {
    previousElement.classList.remove(...gradientClasses); // Spread operator to pass each class separately
  }

  // Add the gradient classes to the new selected element
  if (selectedElement) {
    selectedElement.classList.add(...gradientClasses); // Spread operator to pass each class separately
    setPreviousElement(selectedElement); // Set the new element as the previous one
  }
};

  return (
    <div className=' bg-[#181818] text-teal-50 sm:px-24 px-8 py-28'>
      <h1 className='py-8 text-5xl'>Our Work</h1>
      <div className='flex flex-col items-start py-8 justify -between gap-y-8 md:flex-row'>
        <p className='flex-1'>Avail of the perfect web plan or any customized plan for over 90 variants. Whether it's for your business or your spending plan. Through us, you can achieve your website for business.</p>

        <div className='flex flex-row items-center justify-center flex-1 font-bold md:flex-col gap-x-8 gap-y-2 lg:flex-row buttons'>
            <div className='hover:text-[#ef572a] flex items-center justify-center gap-2 sm:gap-8'>
              <p>Lets Talks</p>
              <span className='sm:w-12 sm:h-12 w-4 h-4 rounded-full hover:bg-[#ef572a] bg-teal-50'/>
            </div>
            <div className='flex hover:text-[#ef572a] items-center justify-center gap-2 sm:gap-8'>
              <p>+1-877-824-5196</p>
              <span className='sm:w-12 sm:h-12 w-4 h-4 rounded-full hover:bg-[#ef572a] bg-teal-50'/>
            </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center w-full gap-2 cursor-pointer'>
        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Web' onClick={ChangeShow}>Web Design</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Ecommerce' onClick={ChangeShow}>Ecommerce</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Fashion' onClick={ChangeShow}>Ecommerce</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Food' onClick={ChangeShow}>Food</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Conna' onClick={ChangeShow}>Connabis</h1>


        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Insurance' onClick={ChangeShow}>Insurance</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Medical' onClick={ChangeShow}>Medical</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='NFT' onClick={ChangeShow}>NFT</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='AutoMotive' onClick={ChangeShow}>Real Estate</h1>

        <h1 className='px-4 py-1 rounded-md border-2 border-[#e80e82] font-bold ' id='Fitness' onClick={ChangeShow}>Fitness</h1>

        



      </div>

    </div>
  )
}

export default OurWork
