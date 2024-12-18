import { useState, useEffect } from "react";
import axios from 'axios';
import './HomeContent.css'
import Modal from './Modal';
import NotFoundPage from './fourZerofour';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const HomeContent = ({ locale }) => {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    const api = locale === 'tr' ? 'https://st2-x0kh.onrender.com/api/coffees?locale=tr' : 'https://st2-x0kh.onrender.com/api/coffees?locale=en';

    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const veri = await response.data;
        setData(veri);
        } catch (error) {
            console.log(error);
        }    
    };
  
    useEffect(() => {
      fetchData();
    }, [locale]);

    if(!data){
      return <NotFoundPage />;
    }

    const handleCategoryClick = (category) => {
      // Seçilen kategoriye göre filtreleme yap
      const filteredData = data.data.filter(item => 
        item.attributes.rich && item.attributes.rich.includes(category)
      );
      
      // Filtrelenmiş verileri state'e ata
      setFilteredData(filteredData);
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
            <li className={filteredData === "Strong Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Strong Coffees")}>{locale === 'tr' ? 'Sert Kahveler' : 'Strong Coffees'}</li>
            <li className={filteredData === "Soft Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Soft Coffees")}>{locale === 'tr' ? 'Yumuşak Kahveler' : 'Soft Coffees'}</li>
            <li className={filteredData === "Milk Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Milk Coffees")}>{locale === 'tr' ? 'Sütlü Kahveler' : 'Milk Coffees'}</li>
            <li className={filteredData === "Coffees Without Milk" ? "selected" : ""} onClick={() => handleCategoryClick("Coffees Without Milk")}>{locale === 'tr' ? 'Sütsüz Kahveler' : 'Coffees Without Milk'}</li>
            <li className={filteredData === "Hot Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Hot Coffees")}>{locale === 'tr' ? 'Sıcak Kahveler' : 'Hot Coffees'}</li>
            <li className={filteredData === "Cold Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Cold Coffees")}>{locale === 'tr' ? 'Soğuk Kahveler' : 'Cold Coffees'}</li>
          </ul>
        </div>

        <div className="card-container">
          {(filteredData?.length > 0 ? filteredData : data?.data)?.map((item) => {
              return (
                <div key={item?.id} className="card">
                  <div className="card-img" id='image' onClick={() => handleImageClick(`${item?.attributes?.image}`, item?.attributes?.slug)}>
                    <img src={`${item?.attributes?.image}`} alt={item?.attributes?.Name} className="img-fluid" />
                  </div>
                  <Link to={`/coffeeDetails/${item?.attributes?.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card-body">
                      <div className='item-container' id='container'>
                        <div className='item-details'>
                          <h2 className="card-title">{item?.attributes?.Name}</h2>
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


HomeContent.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default HomeContent;
