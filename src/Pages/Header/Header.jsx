import React, { useContext } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div >
      <Link to='/'>
      <img style={{width: '150px'}} src={logo} alt="" />
      </Link>
      </div>
      <div className="hidden md:flex space-x-4 mx-auto">
        <Link className="text-white hover:text-gray-300">Home</Link>
        <Link to='/products' className="text-white hover:text-gray-300">Products</Link>
        <Link to='/category' className="text-white hover:text-gray-300">Category</Link>
        <Link to='/login' className="text-white hover:text-gray-300">Login</Link>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <div className="text-white">{user?.email}</div>
      <button className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v16z"
          />
        </svg>
      </button>
      <button onClick={handleLogOut} className="text-white">Logout</button>
    </div>
  </nav>
  );
};

export default Header;
