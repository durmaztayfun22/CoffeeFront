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
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    setIsLoading(true); // Veri yüklenirken true olarak ayarla
    const timer = setTimeout(() => {
      setIsLoading(false); // Veri yüklenmesi tamamlandığında false olarak ayarla
    }, 4500); // 3 saniye sonra

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  if (isLoading) {
    return <LoadingPage />; // Veri yüklenirken LoadingPage göster
  }

  return (
      <Router>
        <Header locale={locale} setLocale={setLocale} />
        <Routes >
          <Route exact path="/" element={<HomeContent locale={locale}/>} />
          <Route exact path="/about" element={<About locale={locale}/>} />
          <Route exact path="/contact" element={<Contact locale={locale}/>} />
          <Route exact path="/coffeeDetails/:slug" element={<CoffeeDetails locale={locale}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer locale={locale} />
      </Router>
  );
}

export default App;
