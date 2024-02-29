import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './About'; 
import Contact from './Contact'; 
import NotFoundPage from './fourZerofour';
import HomeContent from './HomeContent';
import CoffeeDetails from './CoffeeDetails';
import LoadingPage from "./Loading";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Yeni durum değişkeni

  useEffect(() => {
    setIsLoading(true); // Veri yüklenirken true olarak ayarla
    const timer = setTimeout(() => {
      setIsLoading(false); // Veri yüklenmesi tamamlandığında false olarak ayarla
    }, 4000); // 10 saniye sonra

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  if (isLoading) {
    return <LoadingPage />; // Veri yüklenirken LoadingPage göster
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coffeeDetails/:slug" element={<CoffeeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
