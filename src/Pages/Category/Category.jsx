import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {id, name, img} = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-circle w-20" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
         
          <div className="card-actions">
            <Link to={`/category/${id}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Category;