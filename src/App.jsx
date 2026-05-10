import React from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Initiatives from './pages/Initiatives';
import MediaPage from './pages/Media';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';

import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
   <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        
      
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
