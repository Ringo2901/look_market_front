import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './productList/ProductsList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<ProductsList />} />
            </Routes>
        </Router>
    );
};

export default App;
