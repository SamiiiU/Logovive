import React, { useContext, useEffect, useState } from 'react'
import { useGlobalContext} from '../GlobalStates/GlobalState'
import quoteImg from '../Assets/quoteImg.jpg'
import { RxCross1 } from "react-icons/rx";
import {initAOS} from '../Animation/AosAnimation'
import emailjs from 'emailjs-com';


const Orderform = () => {

    const {

        isOrder , setIsOrder,
        price , setPrice,
        packageSelect , setPackage
    } = useGlobalContext();

    const handleClose = () => {
        setIsOrder(false)

    }

    const [name , setName] = useState("");
    const [gmail , setGmail] = useState("");
    const [phone , setPhone] = useState("");
    const [isphone , setIsPhone] = useState(true);
    const [massage , setMassage] = useState("");
    const [issend , setSend] = useState(false);
    const [result , setResult] = useState("");
    
 

    const checkPhone = () => {
        if(phone.length != 11){
          setIsPhone(false)
        }
        else{
          setIsPhone(true)
        }
    }
    
  const handleSend = () => {
    if (name !== "" && gmail !== "" && massage !== "" && phone.length == 11) {
      const templateParams = {
        name: name,
        to_name : "MERN developers" ,
        gmail: gmail,
        massage: massage,
        phone : phone,
        price : price,
        package : packageSelect
      };

      emailjs.send(
        'service_9wdv78p',
        'template_2lnx0ko', 
        templateParams,
        'KMjSwQzTT4RVy5UWU' 
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResult("Message has been sent. Thank you for contacting!");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setResult("Failed to send message. Please try again.");
      });

      setName("");
      setGmail("");
      setMassage("");
      setPhone("");
      setSend(true);
      
    } else {
      setResult("Please fill all input fields");
      checkPhone();
      setSend(true);
    }
  };


    useEffect(() => {
      initAOS( 50 , 100 , 1000);
    }, []);
    
  return (
    <div className={` overflow-y-scroll z-40  top-0 left-0 ${isOrder ? 'fixed' : 'hidden'} flex items-center justify-center w-full h-full sm:pt-0 pt-20 bg-zinc-900/60 `}>
      <div data-aos = "zoom-out" className='relative w-[80%] md:h-full h-fit sm:py-0 py-8 sm:px-20 px-4 bg-white flex md:flex-row flex-col flex-nowrap md:justify-center gap-0 md:items-center' >
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
        <div className='md:w-[50%] w-full md:h-full h-1/2 md:mt-20'
        >
            <h1 className='text-2xl font-bold sm:text-4xl'>{packageSelect} Only ${price} </h1>
            <p className='mt-5'>
                Providing you the solutions for your business grow 
            </p>

            <input type='text' placeholder='Full Name' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900'
            value={name} onChange={(e) => setName(e.target.value)}/>

            <input type='email' placeholder='Email Adress' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' 
            value={gmail} onChange={(e) => setGmail(e.target.value)}/>

            <input type='number' placeholder='Phone No. eg : 03302314563' className={`w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] ${isphone ? 'border-zinc-900' : 'border-red-600'}`}
            value={phone} onChange={(e) => setPhone(e.target.value)} />

            <textarea  placeholder='Brief Description of your project.' className='w-full sm:text-xl text-xs px-4 py-2 mt-5 border-[3px] border-zinc-900' 
            value={massage} onChange={(e) => setMassage(e.target.value)}/>

            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium laboriosam vitae quidem cumque deleniti non, ut tenetur quam a cupiditate harum ratione alias delectus. Voluptatum, impedit illo? Tenetur, ipsum!
            </p>


            <button className='px-4 py-2 mt-4 text-sm font-semibold tracking-wider text-white uppercase bg-black sm:text-2xl' onClick={handleSend}>Sumbit</button>

            <p className='mt-2 font-bold'>{result}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Orderform
