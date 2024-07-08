import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faLaptop, faBriefcase, faHeartbeat, faFlask, faFutbol, faFilm } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setcat }) => {
    const navigate = useNavigate();

    const handleCategoryClick = (e, category) => {
        e.preventDefault(); // Prevent default anchor behavior
        setcat(category);   // Update the category
        navigate(`/?category=${category}`); // Update the URL
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"
            style={{  
                border: "1px solid #ddd", 
                borderRadius: "10px", 
                overflow: "hidden", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out" 
            }}>
            <div className="container">
                <a className="navbar-brand d-flex" href="/">
                    <FontAwesomeIcon icon={faNewspaper} className="me-2 fs-3 text-danger" /> 
                    <span className="fs-4 text-danger">NewsToday</span> 
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {[
                            { label: 'Technology', icon: faLaptop, category: 'technology' },
                            { label: 'Business', icon: faBriefcase, category: 'business' },
                            { label: 'Health', icon: faHeartbeat, category: 'health' },
                            { label: 'Science', icon: faFlask, category: 'science' },
                            { label: 'Sports', icon: faFutbol, category: 'sports' },
                            { label: 'Entertainment', icon: faFilm, category: 'entertainment' }
                        ].map(item => (
                            <li className="nav-item" key={item.category}>
                                <button className="nav-link" href="#"
                                   onClick={(e) => handleCategoryClick(e, item.category)}>
                                    <FontAwesomeIcon icon={item.icon} className="me-2" /> {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
