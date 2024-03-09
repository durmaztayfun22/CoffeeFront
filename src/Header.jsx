import React, { useState, useEffect } from 'react';
import { useLocation, Link  } from 'react-router-dom';
import './Header.css';

// Header bileşeni
const Header = () => {
    // pageTitle state'i ve setPageTitle fonksiyonu
    const [pageTitle, setPageTitle] = useState('Coffees');

    // Header bileşeni JSX'i
    return(
        <>
            <div className="container">  
                <header className="header">
                    <div className="header-content">
                        {/* Başlık */}
                        <Link to="/" className="title">
                            <img src="https://i.imgur.com/qscsMyf.png" alt="coffeeCup" />
                            <span className="fs-4">Coffee</span>
                        </Link>

                        {/* Menü */}
                        <ul className="ul">
                            <li className="li"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="li"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="li"><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Başlık */}
                    <div className='headertitlebig'>
                        <h1>{pageTitle}</h1>
                    </div>
                </header>

                {/* Sayfa başlığını güncelleyen bileşen */}
                <PageTitleUpdater setPageTitle={setPageTitle} />
            </div>
        </>
    )
}

// Sayfa başlığını güncelleyen bileşen
function PageTitleUpdater({ setPageTitle }) {
    const location = useLocation();
   
    // useEffect kancası ile sayfa başlığını güncelleme
    useEffect(() => {
       const fetchPageTitle = () => {
         const path = location.pathname;
         switch (path) {
           case '/about':
             setPageTitle('About');
             break;
           case '/contact':
             setPageTitle('Contact Us');
             break;
           default:
             setPageTitle('Coffees');
             break;
         }
       };
   
       fetchPageTitle();
    }, [location, setPageTitle]);
   
    return null; // Bu bileşen hiçbir şey render etmez
}

export default Header;
