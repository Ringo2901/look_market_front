import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from './defaultImage.png';

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
    <div className="container d-flex justify-content-center mt-5">
        <div className="row">
            {products.map(product => (
                <div key={product.imageId}
                     className="col-md-4 mb-4">
                    <div className="card">
                        {product.imageData ? (
                            <img src={`data:image;base64,${product.imageData}`} alt={product.title}
                                 className="card-img-top"
                                 style={{height: '200px', objectFit: 'cover'}}/>
                        ) : (
                            <img src={defaultImage} alt="Default Image" className="card-img-top"
                                 style={{height: '200px', objectFit: 'cover'}}/>
                        )}
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: {product.price}</p>
                            <p className="card-text">User ID: {product.userId}</p>
                            <p className="card-text">User Login: {product.login}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
    ;
};

export default ProductsList;
