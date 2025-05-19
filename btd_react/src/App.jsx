import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { HashRouter, Routes, Route } from 'react-router-dom';


import Homepage from "./pages/Homepage.jsx";




export default function App() {
 


  
  return (
    <>
    <Homepage/>
    </>
  )
}

/*
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </HashRouter>
*/