import React from 'react'
import {BsCircle} from 'react-icons/bs'
import './About.css'
import Mission from '../Mission/Mission'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'


export default function About() {
  const [counter, setCounter] = React.useState(0)
  React.useEffect(()=>{
    if(counter<59){
      setTimeout(()=>{
        setCounter(counter + 1);
      }, 50);
      }
    
  },[counter])
  
  return (
    <>
    <Navbar/>
    <div className='body relative z-[-1]'>
     <div className='bgAbout text-white text-center pt-[100px]'>
     <p  className='md:text-5xl text-3xl font-bold'>About</p>
     <div className='mr-[80px]'>
           <NavLink to={'/'} className='pt-[30px]'>Home<BsCircle className='md:ml-[665px] ml-[187px] font-bold relative bottom-5'/><span className='relative bottom-10 left-[90px]'>About</span></NavLink>
           </div>
    </div>
    <div className='leadend md:py-[80px] py-[20px]'></div>
    <section className="text-[#c0bebe] body-font ">
    <div className="container px-5  md:py-24 py-12 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img className="lg:w-1/2 w-full  object-cover object-center rounded" src="images/about4.jpeg" alt="" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <button className='bg-[#E9E1E42E] text-[#8CC43F] p-1'>ABOUT US</button>
        <h1 className='text-white md:py-[20px] md:text-5xl text-2xl'>Who we are?</h1>
         <p className='md:py-[5px] py-[10px] border-l-[1px]  border-[#8CC43F] pl-5'>Welcome to the  <span className='font-bold'>RISE HEALTH INDIA</span>. We would like to give you an excellent insight about our company and its capabilities. Our overall business attitude is shaped by our value care. The people of <span className='font-bold'>RISE HEALTH INDIA</span> Understand that on the longtime success in business can only be achieved.</p>
         <p className='md:py-[5px] mt-5 py-[10px] border-l-[1px]  border-[#8CC43F] pl-5'>Our mission at  <span className='font-bold'>RISE HEALTH INDIA</span>. is to serve your health needs with the best herbal products.</p>
        <div className='bg-[#E9E1E42E] text-[#8CC43F] md:w-[300px] w-[200px] md:p-[30px] p-[20px] mx-auto md:ml-[-2px] text-center md:pb-5 mt-[20px]'>
         <p data-toggle="counter-up" className='text-5xl pb-3 font-bold'>{counter}</p>
         <p className='text-white'>OUR PRODUCT</p>
        </div>
      </div>
    </div>
  </div>
  <div className='headingBorder md:py-[100px] py-[20px]'></div>
  </section>
  <Mission/>
 </div>
  </>
  )
}
