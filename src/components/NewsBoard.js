import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const apiKey = '8a57ee897afa41618052fd00b0a637db';

const NewsBoard = ({ cat }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error before fetching
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setArticles(data.articles || []); // Ensure articles is an array
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchNews();
  }, [cat]);

  if (loading) return <p>Loading...</p>; // Display loading message
  if (error) return <p>Error: {error}</p>; // Display error message

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
