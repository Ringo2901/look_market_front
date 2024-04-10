import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://lookmarket-8b7afe9ac5cf.herokuapp.com/api/web/product');
                const { status, code, message, payload } = response.data;
                if (status === 'OK') {
                    setProducts(payload);
                } else {
                    console.error('Error fetching products:', message, code);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Список товаров</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={`data:image;base64,${product.imageData}`} alt={product.title} />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.userId}</p>
                        <p>{product.login}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
