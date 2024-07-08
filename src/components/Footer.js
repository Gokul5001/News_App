import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-light py-3" style={{
            borderTop: "1px solid #ddd",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 -4px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
        }}>
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} NewsToday. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
