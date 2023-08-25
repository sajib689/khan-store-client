import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './../Category/Category';

const CategoryCard = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-4 p-5 mt-9 mb-9'>
         {
            data.map( category => <Category key={category.id} category={category}></Category>)
         }
        </div>
    );
};

export default CategoryCard;