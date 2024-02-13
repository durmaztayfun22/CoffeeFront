import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import './App.css';

const api = 'https://strapidevelopment.onrender.com/api/coffees';

// Ana sayfa içeriği
const HomeContent = ({ data }) => (
  <>
    {data && data.data && data.data.length >  0 && data.data.map((item) => {
      return (
        <div key={item.id}>
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <div className='item-container' id='container'>
                <div className='item-details'>
                  <h2 className="display-5">{item.attributes.name}</h2>
                  <p>Description: {item.attributes.description}</p>
                  <p>Origin: {item.attributes.origin}</p>
                </div>
              </div>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" id='image' >
              <img src={`../images/${item.attributes.name}.jpg`} alt={item.attributes.name} />
            </div>
          </div>
        </div>
      );
    })}
  </>
);

const Footer = () => (
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">&copy;  2024 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
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
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            <span className="fs-4">Coffee</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
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
  );
}

export default App;
