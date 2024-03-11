import React, { useState, useEffect } from "react";
import axios from 'axios';
import './HomeContent.css'
import Modal from './Modal';
import NotFoundPage from './fourZerofour';

import { Link } from 'react-router-dom';

const api = 'https://strapidevelopment.onrender.com/api/coffees';

const HomeContent = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/`);
        const veri = response.data;
        setData(veri);
      } catch (error) {
        console.log(error);
      }       
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    if(!data){
      return <NotFoundPage />;
    }

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      const filteredItems = data.data.filter(item => item.attributes.rich[0]?.children[0]?.text.includes(category));
      setFilteredData(filteredItems);
    };
  
    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setShowModal(true)
    }
  
    const handleCloseModel = () => {
      setShowModal(false)
    }
  
    return (
      <>
        <div className="sıralama">
          <ul>
            <li className={selectedCategory === "Strong Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Strong Coffees")}>Strong Coffees</li>
            <li className={selectedCategory === "Soft Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Soft Coffees")}>Soft Coffees</li>
            <li className={selectedCategory === "Milk Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Milk Coffees")}>Milk Coffees</li>
            <li className={selectedCategory === "Coffees Without Milk" ? "selected" : ""} onClick={() => handleCategoryClick("Coffees Without Milk")}>Coffees Without Milk</li>
            <li className={selectedCategory === "Hot Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Hot Coffees")}>Hot Coffees</li>
            <li className={selectedCategory === "Cold Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Cold Coffees")}>Cold Coffees</li>
          </ul>
        </div>
        <div className="card-container">
          {(filteredData?.length > 0 ? filteredData : data?.data)?.map((item) => {
            return (
              <div key={item?.id} className="card">
                <div className="card-img" id='image' onClick={() => handleImageClick(`${item?.attributes?.imgUrl}`, item?.attributes?.slug)}>
                  <img src={`${item?.attributes?.imgUrl}`} alt={item?.attributes?.name} className="img-fluid" />
                </div>
                <Link to={`/coffeeDetails/${item?.attributes?.slug}`}>
                  <div className="card-body">
                    <div className='item-container' id='container'>
                      <div className='item-details'>
                        <h2 className="card-title">{item?.attributes?.name}</h2>
                        <p className='card-text'>Description: {item?.attributes?.description}</p>
                        <p className='card-text'>Origin: {item?.attributes?.origin}</p>
                        <span className='card-text price'>Price: {item?.attributes?.price}💲</span>
                      </div>
                    </div>
                  </div>
                </Link>
                {showModal && selectedImage && (
                  <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={handleCloseModel}/>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
    
}

export default HomeContent;
