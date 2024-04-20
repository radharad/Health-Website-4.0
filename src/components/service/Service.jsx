import React from 'react'
import Mission from '../Mission/Mission'
import './Service.css'

export default function Service() {
  return (
    <>
    <div className='body serviceresponsive bgtService'>
    <div className='text-center  pb-[100px] '>
    <button className='bg-[#E9E1E42E] text-[#8CC43F] p-1'>OUR SURVICE</button>
    <h1 className='text-4xl font-bold p-2 mt-6 text-white'>Our Best Services</h1>
    </div>
    <div className='slider pb-24'>
      <div className='slide-track'>

       <div className='slide'>
        <img src='images/p1.jpeg' className='slideImg' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p3.jpeg' className='slideImg 1' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p6.jpeg' className='slideImg 2' alt=''/>
       </div>

       <div className='slide'>
        <img src='images/p1.jpeg' className='slideImg 3' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p3.jpeg' className='slideImg 4' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p6.jpeg' className='slideImg 5' alt=''/>
       </div>

       <div className='slide'>
        <img src='images/p1.jpeg' className='slideImg 6' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p3.jpeg' className='slideImg 7' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p6.jpeg' className='slideImg 8' alt=''/>
       </div>

       <div className='slide'>
        <img src='images/p1.jpeg' className='slideImg 9' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p3.jpeg' className='slideImg' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p6.jpeg' className='slideImg' alt=''/>
       </div>

       <div className='slide'>
        <img src='images/p1.jpeg' className='slideImg' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p3.jpeg' className='slideImg' alt=''/>
       </div>
       <div className='slide'>
        <img src='images/p6.jpeg' className='slideImg' alt=''/>
       </div>
      </div>
    </div>
    </div>
    <Mission/>
    </>
  )
}
