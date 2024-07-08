import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const apiKey = 'pub_481486c97b376eaaa1df4cc0d6d213b33268c';

const NewsBoard = ({ cat }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en&category=${cat}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setArticles(data.results || []); // Assuming the API response has a 'results' field for articles
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [cat]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-9">Latest News 24/7</h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.image_url} // Adjust this based on the actual API response structure
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
