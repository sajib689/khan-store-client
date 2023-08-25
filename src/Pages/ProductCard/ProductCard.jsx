import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import {  FaRegEye,FaStar, FaRegStar  } from 'react-icons/fa';
const ProductCard = ({ product }) => {
  const { _id, title, image_url,price, description, rating } = product;
  console.log(product);
  return (

    <div className="card w-96 glass">
      <figure>
        <img
          src={image_url}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 50)}...</p>
        <div className="flex p-2">
        <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar className="text-orange"></FaStar>}
            ></Rating>
            <p className="me-2">{rating.number}</p>
        </div>
        <h5 className="font-semibold">Price: {price}Tk</h5>
        <div className="card-actions justify-start">
          <Link to={`/cart/${_id}`} className="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
