import React from 'react'
import './Mission.css'
import Footer from '../Footer/Footer'

export default function Mission() {
  return (
    <div className='body'>
    <div className="bgt">
        <h1 className='head text-white text-center font-bold md:text-4xl text-3xl py-[70px]'>Our Mission & Vission</h1>
   <div className='md:w-[800px] mx-auto grid md:grid-cols-2 grid-cols-1 text-center gap-8 text-white box'>
   <div>
     <div className='card bg-[#e9e1e42e] md:p-10 p-5 md:m-0 m-8'>
        <h1 className='text-3xl'>Our Mission</h1>
        <div className='md:py-5 py-3 md:pt-10 pt-5 text-[#c0bebe]  '>
         <p>Our Company is on the mission</p> 
         <p>serve your health needs with the</p>  
         <p>best herbal products.</p>
        </div>
     </div>
    </div>
    <div>
      <div className='card bg-[#e9e1e42e] hover:bg-[#E9E1E42E] md:p-7 p-4 md:m-0 m-8'>
       <h1 className='text-3xl'>Our Vission</h1>
       <div className='md:py-5 py-3 md:pt-10 pt-5 text-[#c0bebe] '>
       <p>Our vision is to bring balance to</p> 
        <p>your body and life through powerful</p> 
        <p>herbal formulations and ancient</p> 
        <p>lifestyle tips.</p>
        </div>
      </div>
    </div>
   </div>
  </div>
  <div className='boxBorder md:py-[100px] py-[20px]'></div>
  <Footer/>
    </div>  
  )
}
