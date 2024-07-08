import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from './components/Footer';  // Import Footer

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const App = () => {
    const query = useQuery();
    const initialCategory = query.get('category') || 'general';
    const [cat, setcat] = useState(initialCategory);

    useEffect(() => {
        setcat(query.get('category') || 'general');
    }, [query]);

    return (
        <div>
            <Navbar setcat={setcat} />
            <NewsBoard cat={cat} />
            <Footer />  
        </div>
    );
}

export default App;
