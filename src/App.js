import React , {lazy , Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from './Animation/Loader';
import img from './Assets/HeroAsset/offer.webp'


// Lazy load components
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const ShowCase = lazy(() => import('./Pages/ShowCase/ShowCase'));
const Package = lazy(() => import('./Pages/Packages/Package'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

const WebDev = lazy(() => import('./Services/WebDev/WebDev'));
const Shopify = lazy(() => import('./Services/WebDev/Shopify'));
const Wordpress = lazy(() => import('./Services/WebDev/Wordpress'));
const Wix = lazy(() => import('./Services/WebDev/Wix'));
const Ecommerce = lazy(() => import('./Services/WebDev/Ecommerce'));

const DigitalMarketing = lazy(() => import('./Services/Marketing/DigitalMarketing'));
const ContentWriting = lazy(() => import('./Services/Marketing/ContentWriting'));
const PPC = lazy(() => import('./Services/Marketing/PPC'));
const SEO = lazy(() => import('./Services/Marketing/SEO'));

const IOS = lazy(() => import('./Services/AppDev/IOS'));
const Game = lazy(() => import('./Services/AppDev/Game'));
const Android = lazy(() => import('./Services/AppDev/Android'));
const Hybrid = lazy(() => import('./Services/AppDev/Hybrid'));

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  const imageList = [
    './Assets/logo.png',
    './Assets/logo.png',
    './Assets/HeroAsset/Herobg.jpg',
    './Assets/HeroAsset/manager.jpg',
    './Assets/HeroAsset/glass.webp',
    './Assets/HeroAsset/offer.webp'

  ];

  const preloadImages = (imageList) => {
    return Promise.all(
      imageList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };


  useEffect(() => {
    preloadImages(imageList)
      .then(() => setIsLoading(false))
      .catch((err) => console.error("Failed to load images", err));
  }, []);
  
  
  
  return (
    <>
    {/* Wrap Routes in Suspense */}
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Showcase" element={<ShowCase />} />
        <Route path="/Package" element={<Package />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Services Routes */}
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/wix" element={<Wix />} />
        <Route path="/ecommerce" element={<Ecommerce />} />

        {/* Marketing Pages */}
        <Route path='/digitalMarketing' element={<DigitalMarketing />} />
        <Route path='/contentWriting' element={<ContentWriting />} />
        <Route path='/ppc' element={<PPC />} />
        <Route path='/seo' element={<SEO />} />

        {/* App Development Pages */}
        <Route path='/ios' element={<IOS />} />
        <Route path='/game' element={<Game />} />
        <Route path='/android' element={<Android />} />
        <Route path='/hybrid' element={<Hybrid />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
