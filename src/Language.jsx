import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import NotFoundPage from './fourZerofour';
import axios from 'axios';
const api = 'https://strapidevelopment.onrender.com/api/coffees';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(`${api}?locale=${locale}`)
        const coffeeData = response.data.data.find(item => item.attributes.locale === locale)
        setData(coffeeData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <NotFoundPage />;
  }

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <ul>
      <li>
        <button onClick={() => handleLanguageChange('en')}>English</button>
      </li>
      <li>
        <button onClick={() => handleLanguageChange('tr')}>TÜRKÇE</button>
      </li>
    </ul>
  );
};

export default Header;
