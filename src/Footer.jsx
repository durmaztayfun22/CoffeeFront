import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap" /></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary"> 2024 Company, Copyright belongs to TAYFUN DURMAZ. </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="https://twitter.com/ttyfmdrmz">
                            <FontAwesomeIcon icon={faTwitterSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.instagram.com/ttyfndrmz/">
                            <FontAwesomeIcon icon={faInstagramSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://tr-tr.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/tayfun-durmaz-405399277/">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/durmaztayfun22">
                            <FontAwesomeIcon icon={faGithubSquare} style={{ color: 'black', fontSize: '24px' }} />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
