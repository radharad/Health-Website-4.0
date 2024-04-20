import React from 'react'
import {BsCircle} from 'react-icons/bs'
import {FaDownload} from 'react-icons/fa'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Business.css'
import { NavLink } from 'react-router-dom'


export default function Business() {
  return (
    <div>
      <Navbar/>
        <div className='bgBusiness text-white text-center pt-[100px] relative z-[-1]'>
           <p className='md:text-5xl text-3xl  font-bold'>Business</p>
           <div className='mr-[80px]'>
           <NavLink to={'/'} className='pt-[30px]'>Home<BsCircle className='md:ml-[665px] ml-[180px] font-bold relative bottom-5'/><span className='relative bottom-10 left-[90px]'>Business</span></NavLink>
           </div>
           </div>
           <div className='bgDesign pt-[100px] pb-[400px]'>
           <div className=" text-center">
            <div className='textView '>
            <h2 className="mb-5 md:text-4xl text-2xl font-bold text-white">To Know About Our Business </h2>
            <a className='pdf' href="images/Risehealthbusinessplan.pdf"  target="_blank">
            <div className='group flex flex-wrap items-center relative w-[200px] font-bold p-3 mx-auto text-white bg-[#8CC43F] rounded-[30px]'> 
            <div className='group-hover:bg-[#8CC43F] group-hover:text-[white]  bg-white text-[#8CC43F] p-2 rounded-[50%]'><FaDownload className=''/> </div>
            <div>
            <span className="hover1 group-hover:hidden">&nbsp; Download PDF</span>
            <span className="group-hover:block hover2 relative left-[30px] font-bold">Click here</span>
            </div>
            </div>
            </a>
            </div>
            </div>
            </div>
          <Footer/>
        </div>
  )
}
