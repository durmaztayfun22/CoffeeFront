import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import './App.css';

const api = 'https://strapidevelopment.onrender.com/api/coffees';


const HomeContent = ({ data }) => (
  <div className="card-container">
    {data?.data?.length > 0 && data?.data?.map((item) => (
      <div key={item.id} className="card">
        <div className="card-img" id='image'>
          <img src={`../images/${item?.attributes?.name}.jpg`} alt={item?.attributes?.name} className="img-fluid" />
        </div>
        <div className="card-body">
          <div className='item-container' id='container'>
            <div className='item-details'>
              <h2 className="card-title">{item?.attributes?.name}</h2>
              <p className='card-text'>Description: {item?.attributes?.description}</p>
              <p className='card-text'>Origin: {item?.attributes?.origin}</p>
              <span className='card-text'>Price: {item?.attributes?.price}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary"> 2024 Company, Copyright belongs to TAYFUN DURMAZ. </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <svg className="bi" width="24" height="24">
            <a href="https://twitter.com/ttyfmdrmz"><image href="../images/twitter.png" width="24" height="24" alt="X" /></a>
          </svg>
        </li>
        <li className="ms-3">
          <svg className="bi" width="24" height="24">
            <a href="https://www.instagram.com/ttyfndrmz/"><image href="../images/instagram.png" width="24" height="24" alt="instagram" /></a>
          </svg>
        </li>
        <li className="ms-3">
          <svg className="bi" width="24" height="24">
            <a href="https://tr-tr.facebook.com/"><image href="../images/facebook.png" width="24" height="24" alt="facebook" /></a>
          </svg>
        </li>
      </ul>
    </footer>
  </div>
);

function App() {
  const [data, setData] = useState([]);

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

  return (
    <>
       <Router>
        <div className="container">  
          <header className="header">
            <video autoPlay loop muted playsInline className="fullscreen-video">
              <source src="/videos/myVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="header-content">
              <a href="/" className="title">
                <span className="fs-4">Coffee</span>
              </a>

              <ul className="ul">
                <li className="li"><a href="/" className="nav-link">Home</a></li>
                <li className="li"><Link to="/about" className="nav-link">About</Link></li>
                <li className="li"><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>

            <div className='headertitlebig'>
              <h1>Coffees</h1>
            </div>
          </header>
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomeContent data={data} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
    
    
  );
}

export default App;
