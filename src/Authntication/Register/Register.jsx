import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const { formSign } = useContext(AuthContext);
  const [success, setSuccess] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const file = form.file.value
    formSign(email, password, name, file);
    setSuccess(() => toast('Registration Success!'))
    form.reset();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p>{success}</p>
      <ToastContainer></ToastContainer>
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center font-semibold">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block mb-1">
              Upload File
            </label>
            <input name="file" type="file" id="file" className="w-full" />
          </div>
          <button
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
          <Link to='/login'>Are you have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
