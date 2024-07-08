import React from 'react';
import image from '../assets/image.jpg';
import './NewsItem.css'; 

const NewsItem = ({ title, description, url, src }) => {
    return (
        <div 
            className="card bg-light text-dark mb-3 mx-2 news-item" 
            style={{ 
                maxWidth: "400px", 
                border: "1px solid #ddd", 
                borderRadius: "10px", 
                overflow: "hidden", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out" 
            }}
        >
            <img 
                src={src ? src : image} 
                className="card-img-top" 
                alt="News thumbnail" 
                style={{ width: "100%", height: "180px", objectFit: "cover" }} 
            />
            <div className="card-body p-3">
                <h5 className="card-title" 
                    style={{ 
                        fontSize: "1.2em", 
                        marginBottom: "0.5em", 
                        fontWeight: "bold" 
                    }}
                >
                    {title.slice(0, 50)}
                </h5>
                <p className="card-text" 
                    style={{ 
                        fontSize: "0.9em", 
                        color: "#555" 
                    }}
                >
                    {description ? description.slice(0, 90) : "Stay informed with our daily dose of global news and updates."}
                </p>
                <a href={url} className="btn btn-outline-primary btn-sm" 
                    style={{ marginTop: "0.5em" }}
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
