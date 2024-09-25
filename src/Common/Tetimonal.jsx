import React, { useState } from 'react';
import client1 from '../Assets/client1.webp'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const Testimonial = () => {

  

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      name : "Jamie Anderson" , 
      position : "Salon Owner", 
      review : "Thanks a lot, guys. Your work has really made some big differences in my salon. I am very happy with the work you have done for my business website and its marketing." 

    },
    {
      name : "karl diago" , 
      position : "Parlor Owner", 
      review : "Thanks a lot, guys. Your work has really made some big differences in my salon. I am very happy with the work you have done for my business website and its marketing." 

    },
    {
      name : "Ameli Jones" , 
      position : "Digital Agency Owner", 
      review : "Thanks a lot, guys. Your work has really made some big differences in my salon. I am very happy with the work you have done for my business website and its marketing." 

    },
    {
      name : "Smith Bobb" , 
      position : "Showroom Owner", 
      review : "Thanks a lot, guys. Your work has really made some big differences in my salon. I am very happy with the work you have done for my business website and its marketing." 

    },
  ];


  // Function to handle the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  console.log(slides.length * 100 , "Curr idx : " , currentIndex)
  return (
    <div className="sm:h-screen py-16 relative md:px-28 sm:px-16 px-8 text-teal-50  bg-[#181818] rounded-lg">
      <div className=' flex md:flex-row flex-col items-center md:justify-between justify-center gap-y-8 w-full md:px-16 px-4 sm:h-[80%] py-8  rounded-[2.5rem] border-dashed border-4 border-teal-50 border-spacing-4 '>
        {/* Heading Section */}
      <div className="">
        <h1 className="px-3 py-1 text-sm font-bold  bg-gradient-to-r  from-[#ef572a] inline-block  to-[#e80e82] rounded-lg">
          Testimonials
        </h1>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl sm:text-4xl ">
          What Our Clients Think About Us
        </h1>

        <div className='relative h-1 mt-4 overflow-hidden bg-black w-28'>
            <span className='absolute left-0 w-4 h-full bg-yellow-400 rounded-full animate-infinteX'/>

            <span className='absolute w-4 h-full bg-yellow-400 rounded-full animate-infinteX left-8'/>
        </div>
        <p className="mt-2 ">
          Our attention to detail style approach has landed our brand in the good books of all our clients. Here are some of their views about our performance.
        </p>
      </div>

      {/* Testimonial Card */}
      
      <div className="relative w-full mx-auto bg-[#2c2c2c] rounded-lg shadow-lg overflow-hidden p-4">
      {/* Slides */}
      <div
        className={` flex w-[400%] justify-between items-center  transition-transform duration-500 bg-zinc-500/0`}
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full px-8">
          {/* Client Image */}
          <img
            src={client1}
            alt="Client"
            className="w-20 h-20 mr-6 rounded-full"
          />
          {/* Client Details */}
          <div>
            <h4 className="text-xl font-semibold text-white">{slide.name}</h4>
            <p className="italic text-yellow-400">{slide.position}</p>
            <blockquote className="mt-2 text-gray-300">{slide.review}
            </blockquote>
          </div>
        </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-0 p-3 text-white transform -translate-y-1/2 rounded-full top-1/2 bg-gray-800/50"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-0 p-3 text-white transform -translate-y-1/2 rounded-full top-1/2 bg-gray-800/50"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
 


      </div>
    </div>
  );
};

export default Testimonial;

// 