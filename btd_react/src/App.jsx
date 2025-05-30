import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Homepage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import FindUs from "./pages/FindUs.jsx";
import EasterPreorder from "./pages/EasterPreorder.jsx";
import './App.css';



export default function App() {
 


  
  return (
    <div className='align-items-center justify-content-center text-center'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/findus' element={<FindUs/>}/>
        <Route path='/easter_preorder' element={<EasterPreorder/>}/>
      </Routes>
    </BrowserRouter>    
    </div>
  )
}
