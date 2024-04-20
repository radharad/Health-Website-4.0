
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/service/Service'
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';
import Business from './components/Business/Business';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PageNotFound from './components/pageNotFound';
import ScrollToTop from "react-scroll-to-top";
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

function App() {
  
  return (
   <>
  <ScrollToTop smooth top="20" style={{backgroundColor:"#8CC43F",paddingLeft:"5px"}} color='white'/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path="/navbar" element={<Navbar/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/service' element={<Service/>}/>
   <Route path='/mission' element={<Mission/>}/>
   <Route path='/footer' element={<Footer/>}/>
   <Route path='/business' element={<Business/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/forgetPassword' element={<ForgetPassword/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </BrowserRouter> 
   </>
  );
}

export default App;
