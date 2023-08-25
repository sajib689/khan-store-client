import React from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const signleProduct = useLoaderData();
  const { title, description, price, image_url, rating } = signleProduct;
  return (
    <div className="mt-10">
      <div className="container w-1/2 m-10  card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <p className="text-red-400 text-xl text-semibold"> Quantity: </p>
          <input
            value="0"
            className="p-1 rounded-md focus:border-teal-500 w-20 border border-red-200"
            type="number"
            name=""
            id=""
          />
            <p className="text-xl">Price: {price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
