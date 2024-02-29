import React, { useState, useEffect } from 'react';
import { useLocation, Link  } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [pageTitle, setPageTitle] = useState('Coffees');
    return(
        <>
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
                    </ul>
                </div>

                <div className='headertitlebig'>
                    <h1>{pageTitle}</h1>
                </div>
                </header>
                <PageTitleUpdater setPageTitle={setPageTitle} />
            </div>
        </>
    )
}

function PageTitleUpdater({ setPageTitle }) {
    const location = useLocation();
   
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
   
    return null;
}

export default Header;
