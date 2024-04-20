import React from 'react'
import './Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdLocationPin} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='body bgFoot'>
    <div className='pt-[50px] text-white' >
     <div className='grid md:grid-cols-[40%_30%_auto] grid-cols-1 md:w-[1240px] mx-auto mr-[20px] text-left'>
    
     <div className=''>
      <p><img src='images/RiseLogo.png' className='h-[86.27px] w-[100px]   sm:pb-0 pb-5' alt=''/></p>
      <p className='p-[20px]'>We are emerging towards healthy & active life.</p>
      <div className='ml-[13px]'>
      <MdLocationPin className='text-[20px]'/><span className='ml-[25px] spot'> Sco 36 ,A Royale Estate, Zirakpur, Punjab 140603</span>
      <BiEnvelope className='text-[20px]'/><span className='ml-[25px] spot'> 9088295002, 9088295003</span>
      <BsFillTelephoneFill/><span className='ml-[25px] spot'> info@risehealthindia.com</span>
     </div>
     </div>

     <div className='ml-[15px]'>
      <h1 className=' text-[20px] tracking-widest mb-[20px]'>QUICK LINKS</h1>
      <i><FaLeaf/></i><NavLink to={'/'} className="pan">Home</NavLink>
      <i><FaLeaf/></i><NavLink to={'/about'} className="pan">About Us</NavLink>
      <i><FaLeaf/></i><NavLink to={'/business'} className="pan">Business</NavLink>
      <i><FaLeaf/></i><NavLink to={'/contact'} className="pan">Contact Us</NavLink>
     </div>

     <div className='ml-[15px]'>
        <h1 className=' text-[20px] tracking-widest mb-[20px]'>OUR SERVICES</h1>
        <i><FaLeaf/></i><p className="pan">Terms & Conditions</p>
        <i><FaLeaf/></i><p className="pan">Privacy Policy</p>
        <i><FaLeaf/></i><p className="pan">Refund Policy</p>
     </div>
     </div>
     </div>

     <div className='border-t-[1px] border-[#5a5959] mt-[30px] '>
      <div className=' flex flex-wrap justify-between p-[20px] md:mx-[80px]'>
     <p>©2023 <span className='text-[#8CC43F]'>Company Name.</span> All Rights Reserved.</p>
     <p>Designed by <span className='text-[#8CC43F]'>Probuz Technologies Pvt.Ltd.</span></p>
     </div>
     </div>
    
    </div>
  )
}
