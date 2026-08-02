import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import GalleryPage from '@/pages/GalleryPage';
import LocationPage from '@/pages/LocationPage';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    if (pathname === '/') window.scrollTo(0, 0);
  }, [hash, pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
