import * as React from 'react'
import './Home.css'
import Service from '../service/Service'
import Navbar from '../Navbar/Navbar'

export default function Home() {
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
   
     <div className='body'>
     <div className=' text-white'>
     <div  className='wrapper'>
  
      <div className='bg1 font-bold text-center'>
        <div className='bg-[rgba(0,0,0,0.5)]'>
         <div className='md:py-[165px] py-[120px] mx-auto'>
         <p className='md:text-xl text-[20px]  tracking-widest'>WELCOME TO COMPANY NAME</p>
         <h1 className='md:text-6xl text-xl p-5 font-bold'>An Ancient Key For Total Wellbeing</h1>
         <button className='p-5 border  border-white'>Discover More</button>
        </div>
        </div>
        </div>

      <div className='bg5 font-bold text-center'>
      <div className='bg-[rgba(0,0,0,0.5)]  bg'>
        <div className='md:py-[165px] py-[120px] mx-auto'>
        <p className='md:text-xl text-[20px] tracking-widest'>WELCOME TO COMPANY NAME</p>
        <h1 className='md:text-6xl text-xl p-5 font-bold'>Renew Yourself With Ayurveda</h1>
        <button className='p-5 border  border-white'>Discover More</button>
      </div>
    </div>
   </div>
  
   </div>
   <div className='borderHome md:py-[100px] py-[50px]'>
</div>
<section className="text-[#c0bebe] body-font ">
  <div className="container px-5  md:py-24 py-12 mx-auto ">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img className="lg:w-1/2 w-full  object-cover object-center rounded" src="images/about4.jpeg" alt=""/>
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

  <div className='text-center md:w-[1100px] mx-auto text-[#c0bebe] md:p-[0] p-[20px] '>
    <h1 className='md:py-[100px] py-[50px] md:text-5xl text-3xl text-white'>Ayurveda - The Power of Nature</h1>
    <p className='text-[18px]'>The term Ayurveda combines the Sanskrit words Ayur means life and Veda means science or knowledge. Ayurveda 's main goal is to prevent and promote the body's own ability to maintain and balance. With the help of Ayurveda.</p>
    <p className='text-[18px] mt-5 pb-[50px]'>We understand that health reflects a person's harmony with nature and disease when a person is out of harmony with nature's cycles. All living and non- living things in the universe are united in Ayurveda.</p>
  </div>
 <div className='borderHome md:py-[100px] py-[30px]'></div>
  </section>
  </div>
  </div>
  <Service/>
   </>
  )
}
