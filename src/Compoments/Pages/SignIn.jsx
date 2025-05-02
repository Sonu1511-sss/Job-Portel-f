import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import { toast } from 'react-hot-toast';  // For toast notifications
import axios from 'axios'; // Add this import


const SignIn = ({ type }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);

      toast.success(response.data.message);
      
      // Save the token to localStorage or cookies
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to the dashboard after successful login
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong!');
      }
    }
  };

  const handleForgotPassword = () => {
    toast.info('Redirecting to Forgot Password page...');
    navigate('/reset-password');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Infinity-Jobs</h1>
          <p className="mt-2 text-lg">Make the most of your professional life</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
            {type === 'signUp' ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            {type === 'signUp'
              ? 'Already have an account?'
              : 'Don\'t have an account?'}{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate(type === 'sign-up' ? '/sign-in' : '/sign-up')}
            >
              {type === 'signUp' ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </div>

        {type === 'signIn' && (
          <div className="mt-4 text-center">
            <p className="text-sm">
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
