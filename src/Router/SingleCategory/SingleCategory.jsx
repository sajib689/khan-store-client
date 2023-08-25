import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategory = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <h1>Lenght : {products.length}</h1>
        </div>
    );
};

export default SingleCategory;