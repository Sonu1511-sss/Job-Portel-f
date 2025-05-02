import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';  // Import Axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Axios POST request to sign up
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);

      toast.success(response.data.message);
      navigate('/sign-in'); // Redirect to sign-in after successful registration
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong!');
      }
    }
  };


  return (

<div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
<div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-blue-500">Infinity-Jobs</h1>
    <p className="mt-2 text-lg">Make the most of your professional life</p>
  </div>
  
  {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
  
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold focus:outline-none hover:bg-blue-700"
    >
      Sign Up
    </button>
  </form>

  <div className="mt-4 text-center">
    <p className="text-sm">
      Already have an account?{' '}
      <span
        className="text-blue-500 cursor-pointer"
        onClick={() => navigate('/sign-in')} // Navigate to SignIn page
      >
        Sign In
      </span>
    </p>
  </div>
</div>
</div>
  );
};

export default SignUp;

