import React from 'react'
import './Contact.css'
import {BsCircle} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
       <Navbar/>
        <div className='bgContact text-white text-center pt-[100px] relative z-[-1]'>
        <p className='md:text-5xl text-3xl  font-bold'>Contact</p>
        <div className='mr-[80px]'>
        <NavLink  to={'/'} className='pt-[30px]'>Home<BsCircle className='md:ml-[665px] font-bold ml-[180px] relative bottom-5'/><span className='relative bottom-10 left-[90px]'>Contact</span></NavLink>
        </div>
        </div>
        <div className='bgDesign md:pt-[100px]  md:pb-[300px] pb-[100px]'>
        <div className=" text-center">
        <div className='textView '>
        <div className='grid md:grid-cols-3 grid-cols-1 text-white gap-[30px] md:p-[50px] md:w-[1240px] mx-auto'>
        <div className='bg-[#E9E1E42E] md:p-8  p-5 md:m-0 m-8 text-center'>
          <img src='images/map.png' className='w-[50px] h-[50px] relative  md:left-[120px] left-[110px]' alt=''/>
          <h1 className='text-3xl font-bold'>Location</h1>
          <p className='pt-[10px]'>Sco 36 ,A Royale Estate, Zirakpur, Punjab 140603</p>
        </div>
        <div className='bg-[#E9E1E42E] md:p-8  p-5 md:m-0 m-8 text-center'>
          <img src='images/telephone-call.png' className='w-[50px] h-[50px] relative  md:left-[120px] left-[110px]' alt=''/>
          <h1 className='text-3xl font-bold'>Phone</h1>
          <div className='flex flex-wrap items-center ml-[30px]'>
          <p><BsFillTelephoneFill/></p>
          <p className='pt-[10px]'>9088295002, 9088295003</p>
        </div>
        </div>
        <div className='bg-[#E9E1E42E] md:p-8  p-5 md:m-0 m-8 text-center'>
          <img src='images/message.png' className='w-[50px] h-[50px] relative md:left-[120px] left-[110px]' alt=''/>
          <h1 className='text-3xl font-bold'>Email</h1>
          <div className='flex flex-wrap items-center ml-[30px]'>
          <p><BiEnvelope/></p>
          <p className='pt-[10px]'>info@risehealthindia.com</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>   
      <Footer/> 
    </div>
  )
}

