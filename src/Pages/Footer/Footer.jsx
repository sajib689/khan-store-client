import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Khan Store</h2>
          <p className="mt-2">Discover the best products at amazing prices.</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <ul className="mr-10">
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Products</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
          </ul>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;