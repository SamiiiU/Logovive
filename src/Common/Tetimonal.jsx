import React from 'react';
import client1 from '../Assets/client1.webp'
const Testimonial = () => {
  return (
    <div className="sm:h-screen py-16 relative md:px-28 sm:px-16 px-8 text-teal-50  bg-[#181818] rounded-lg">
      <div className=' flex md:flex-row flex-col items-center md:justify-between justify-center gap-y-8 w-full md:px-16 px-4 sm:h-[80%] py-8  rounded-[2.5rem] border-dashed border-4 border-teal-50 border-spacing-4'>
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
      <div className="relative p-6 bg-[#2c2c2c] rounded-lg shadow-lg">
        <div className="flex flex-col items-center md:flex-row">
          {/* Client Image */}
          <img
            src={client1}
            alt="Client"
            className="w-20 h-20 mr-6 rounded-full"
          />
          {/* Client Details */}
          <div>
            <h4 className="text-xl font-semibold text-white">James William</h4>
            <p className="italic text-yellow-400">Salon Owner</p>
            <blockquote className="mt-2 text-gray-300">
              Thanks a lot, guys. Your work has really made some big differences in my salon. I am very happy with the work you have done for my business website and its marketing.
            </blockquote>
          </div>
        </div>

        {/* Decorative Arrow (Optional) */}
        {/* <div className="absolute bottom-0 w-16 h-8 bg-blue-500 right-8"></div> */}
      </div>
      </div>
    </div>
  );
};

export default Testimonial;

// 