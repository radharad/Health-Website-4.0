import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import './Navbar.css'

export default function Navbar() {
  const [toggle,setToggle] = useState(false)

  const handleToggle = () => {
   setToggle(!toggle)
  }

  return (
    <div className='body'>
   <div className='display white bgTop flex justify-end space-x-6 p-3'>
    <BsFillTelephoneFill className='text-white mt-2 relative left-5'/>
     <p className='text-[#8CC43F]'>9088295002 , 9088295003</p>
     <p className='text-white'>|</p>
     <p className='flex text-[#8CC43F] pr-5'><BiEnvelope className='text-white mt-1'/>&nbsp;info@companyname.com</p>
    
   </div>


     <div className='color bg-[#244B45]   overflow-hidden' >
         <div className=' px-4 text-white flex justify-between  items-center'>
        <div className='w-full text-3xl font-bold decoration-none'>
        <NavLink to={"/"}>
        <p><img src='images/RiseLogo.png' className='h-[86.27px] w-[100px]' alt=''/></p>
          </NavLink>
        </div>
        <ul className='hidden md:flex gap-10 text-white pt-3   items-center md:mr-[300px] font-bold '>
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Registeration</NavLink>
        </li>
        </ul>
        <div onClick={handleToggle} className='block md:hidden button py-[10px] px-[20px] text-[20px]'>
        {
          toggle ?
          <AiOutlineClose size={20}/>
          :
          <AiOutlineMenu size={20}/>
        }
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'fixed left-0 top-0 w-[75%] h-[290px] text-center border-r-gray-900 bg-[#244B45] text-white ease-in-out duration-500  z-2' : 'bg-[#244B45] fixed ease-in-out duration-500 top-[-100%] z-2'}>
        <li className='p-3'>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/register"}>Registeration</NavLink>
        </li>
        </ul>
      </div>
     </div>
    </div>
  )
}
