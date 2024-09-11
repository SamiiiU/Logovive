import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';


function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>

    </Routes>
  );
}

export default App;
