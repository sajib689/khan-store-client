import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-center text-3xl mb-4">Please Login! </h2>
        <div>
          <label htmlFor="name" className="block mb-1">
            Email
          </label>
          <input
          name='email'
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block mb-1">
            Password
          </label>
          <input
          name='password'
            type="password"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <button
          
          className="mt-6 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
        <Link to='/register'>Register here!</Link>
      </div>
    </div>
    );
};

export default Login;