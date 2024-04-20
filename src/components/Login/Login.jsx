import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className='bgLogin'>
       <div className='login-16 md:w-[900px] bg-[#122926] mx-auto my-[50px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>
          <div className='p-[50px]'>
          <form className='text-white'>
            <h1 className='font-bold text-2xl text-center mb-[20px]'>USER LOGIN</h1>
            <div className='space-y-7'>
            <div className='border border-1 '><input className='bg-transparent md:w-[347px] w-[300px]' placeholder='UserId' type='text'/></div>
            <div className='border border-1 '><input className='bg-transparent  md:w-[347px] w-[300px]' placeholder='Password'  type='password'/></div>
            </div>
            <NavLink to={"/forgetPassword"} className='float-right relative bottom-2 p-2'>Forgot Password?</NavLink>
            <div className='mt-[30px]'><input type='checkbox'/></div><span className='relative left-[20px] bottom-6 '>keep me logged in</span>
            <button className='bg-[#8CC43F] w-[100%] p-2 font-bold rounded'>LOGIN</button>
            <p>Don't have an account? <NavLink to={'/register'} className='relative'>Register Here</NavLink></p>
          </form>
          </div>
        <div className='logopage text-center text-white py-[70px]'>
          <div className='card py-[50px] mx-[50px]'>
          <p><img src='images/RiseLogo.png' className='h-[86.27px] w-[100px]   sm:pb-0 pb-5 ml-[120px]' alt='img'/></p>
          <h1 className='text-3xl font-bold'>Welcome To <p>Company Name</p></h1>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </div>
          </div>
         </div>
         </div>
        </div>
    </>
  )
}
