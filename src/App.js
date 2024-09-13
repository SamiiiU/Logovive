import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ShowCase from './Pages/ShowCase/ShowCase';
import Package from './Pages/Packages/Package';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Showcase" element={<ShowCase/>}/>
     <Route path="/Package" element={<Package/>}/>
     <Route path="/Contact" element={<Contact/>}/>

    </Routes>
  );
}

export default App;
