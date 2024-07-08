import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const apiKey = '8a57ee897afa41618052fd00b0a637db'; 

const NewsBoard = ({ cat }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [cat]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-9">Latest News 24/7</h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
