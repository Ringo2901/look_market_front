import React from 'react';
import { Routes, Route} from "react-router-dom";
import ProductsList from './productList/ProductsList';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
        </Routes>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Добро пожаловать!</p>
        </div>
    );
};

export default App;