import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import CoffeeDetails from './CoffeeDetails'
import Modal from './Modal';
import NotFoundPage from './fourZerofour';
// import { LanguageProvider } from './LanguageContext';  
// import Header from './Language';
import './App.css';

const api = 'https://strapidevelopment.onrender.com/api/coffees';


function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (src, alt) => {
    setSelectedImage({ src, alt });
    setShowModal(true)
  }

  const handleCloseModel = () => {
    setShowModal(false)
  }

  const HomeContent = ({ data }) => (
    <div className="card-container">
      {data?.data?.length > 0 && data?.data?.map((item) => {
        return (
          <div key={item?.id} className="card">
            <div className="card-img" id='image' onClick={() => handleImageClick(`../images/${item?.attributes?.name}.jpg`, item?.attributes?.slug)}>
              <img src={`${item?.attributes?.imgUrl}`} alt={item?.attributes?.name} className="img-fluid" />
            </div>
            <Link to={`/coffeeDetails/${item?.attributes?.slug}`} href={`${item.id}`} key={item?.id} id={item?.id}>
              <div className="card-body">
                <div className='item-container' id='container'>
                  <div className='item-details'>
                    <h2 className="card-title">{item?.attributes?.name}</h2>
                    <p className='card-text'>Description: {item?.attributes?.description}</p>
                    <p className='card-text'>Origin: {item?.attributes?.origin}</p>
                    <span className='card-text price'>Price: {item?.attributes?.price}</span>
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
              <a href="https://twitter.com/ttyfmdrmz"><image href="https://i.imgur.com/yxHJm4b.png" width="24" height="24" alt="X" /></a>
            </svg>
          </li>
          <li className="ms-3">
            <svg className="bi" width="24" height="24">
              <a href="https://www.instagram.com/ttyfndrmz/"><image href="https://i.imgur.com/AH7rnrW.png" width="24" height="24" alt="instagram" /></a>
            </svg>
          </li>
          <li className="ms-3">
            <svg className="bi" width="24" height="24">
              <a href="https://tr-tr.facebook.com/"><image href="https://i.imgur.com/cYQsBtg.png" width="24" height="24" alt="facebook" /></a>
            </svg>
          </li>
        </ul>
      </footer>
    </div>
  );

  return (
      // <LanguageProvider>
        <Router>
          <div className="container">  
            <header className="header">
              <div className="header-content">
                <Link to="/" className="title">
                  <span className="fs-4">Coffee</span>
                </Link>

                <ul className="ul">
                  <li className="li"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="li"><Link to="/about" className="nav-link">About</Link></li>
                  <li className="li"><Link to="/contact" className="nav-link">Contact</Link></li>
                  {/* <li className='li'><Header/></li> */}
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
              <Route path="/coffeeDetails/:slug" element={<CoffeeDetails />} />
              <Route path="*" element={<NotFoundPage />} /> {/* 404 sayfası rotası */}
            </Routes>
            <Footer />
          </div>
        </Router>
    // </LanguageProvider>
  );
}

export default App;
