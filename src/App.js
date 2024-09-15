import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ShowCase from './Pages/ShowCase/ShowCase';
import Package from './Pages/Packages/Package';
import Contact from './Pages/Contact/Contact';
import WebDev from './Services/WebDev/WebDev';
import Shopify from './Services/WebDev/Shopify';
import Wordpress from './Services/WebDev/Wordpress'
import Wix from './Services/WebDev/Wix'
import Ecommerce from './Services/WebDev/Ecommerce'


function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Showcase" element={<ShowCase/>}/>
     <Route path="/Package" element={<Package/>}/>
     <Route path="/Contact" element={<Contact/>}/>

     {/* Services ROutes here  */}

     {/* Web Designings below  */}

     <Route path="/webdev" element={<WebDev/>} />
     <Route path="/shopify" element={<Shopify/>} />
     <Route path="/wordpress" element={<Wordpress/>} />
     <Route path="/wix" element={<Wix/>} />
     <Route path="/ecommerce" element={<Ecommerce/>} />

    </Routes>
  );
}

export default App;
