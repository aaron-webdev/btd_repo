import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Homepage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import FindUs from "./pages/FindUs.jsx";




export default function App() {
 


  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/findus' element={<FindUs/>}/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}
