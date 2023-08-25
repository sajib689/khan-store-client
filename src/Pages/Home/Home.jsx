import React from "react";
import banner from "../../assets/banner_two.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Banner" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to Khan Store
        </h1>
        <p className="text-white text-lg mb-6">
          Discover the best products at amazing prices.
        </p>
        <Link to='/products' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
