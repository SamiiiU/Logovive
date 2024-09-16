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
import DigitalMarketing from './Services/Marketing/DigitalMarketing';
import ContentWriting from './Services/Marketing/ContentWriting';
import PPC from './Services/Marketing/PPC';
import SEO from './Services/Marketing/SEO';
import IOS from './Services/AppDev/IOS';
import Game from './Services/AppDev/Game';
import Android from './Services/AppDev/Android';
import Hybrid from './Services/AppDev/Hybrid';

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

     {/* marketing pages below  */}

    <Route path='/digitalMarketing' element={<DigitalMarketing/>}/>
    <Route path='/contentWriting' element={<ContentWriting/>}/>
    <Route path='/ppc' element={<PPC/>}/>
    <Route path='/seo' element={<SEO/>}/>

    {/* apps pages started */}

    <Route path='/ios' element={<IOS/>}/>
    <Route path='/game' element={<Game/>}/>
    <Route path='/android' element={<Android/>}/>
    <Route path='/hybrid' element={<Hybrid/>}/>
    </Routes>
  );
}

export default App;
