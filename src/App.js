import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [category, setCategory] = useState('all');

  return (
    <>
      <Navbar setcat={setCategory} />
      <Routes>
        <Route path="/" element={<NewsBoard cat={category} />} />
      </Routes>
    </>
  );
};

export default App;
