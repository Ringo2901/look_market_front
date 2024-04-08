import React from 'react';
import { Routes, Route} from "react-router-dom";
import ProductsList from './productList/ProductsList';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsList />} />
        </Routes>
    );
};

export default App;
