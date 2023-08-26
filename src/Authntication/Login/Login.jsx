import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
        .then( result => {
            const user = result.user
            setSuccess(() => toast("Login Successful !"))
            form.reset();
            navigate('/')
            console.log(user)
        })
        .catch(error => {
          setError(() => toast("Your email or password wrong!"))
        })

    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p>{success}</p>
      <p>{error}</p>
      <ToastContainer></ToastContainer>
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-center text-3xl mb-4">Please Login! </h2>
        <form onSubmit={handleLogin} action="">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
          required
            name="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
          required
            name="password"
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button className="mt-6 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
        <Link to="/register">Register here!</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
