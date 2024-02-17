import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CoffeeDetails.css'
const api = 'https://strapidevelopment.onrender.com/api/coffees';

const CoffeeDetails = () => {
    const { id } = useParams(); // useParams hook'u kullanarak id'yi alıyoruz
    const [coffee, setCoffee] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`${api}/${id}`);
              setCoffee(response.data.data); // Burada response.data.data olabilir, veri yapısına göre değişir
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchData();
    }, [id])

    if (!coffee) {
        return <div>Loading...</div>;
    }
    console.log(coffee)

    return(
        <>
            <div className='container'>
                <div className='div-image'>
                    <img src={`../images/${coffee?.attributes?.name}.jpg`} alt={coffee?.attributes?.name} />
                </div>
                <h2>{coffee?.attributes?.name}</h2>
                <p>Description: {coffee?.attributes?.description}</p>
                <p>Origin: {coffee?.attributes?.origin}</p>
                <p>Price: {coffee?.attributes?.price}</p>
            </div>
        </>
    )
}

export default CoffeeDetails;
