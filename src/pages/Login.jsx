import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate(); //
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    // If login is successful:
    navigate('/dashboard'); // 👈 go to a new page
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
        <h2 className="text-2xl font-semibold text-white mb-2">Log in</h2>
        <p className="text-sm text-gray-400 mb-6">Choose your preferred method to log in</p>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition">
            <FaGoogle className="text-red-400" />
            <span>Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition">
            <FaGithub />
            <span>Continue with GitHub</span>
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-zinc-700"></div>
          <span className="text-gray-500 text-sm px-3">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-zinc-700"></div>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-1" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Please enter your email address"
            className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <button className="w-full flex items-center justify-center space-x-2 bg-white text-black py-2 rounded-md font-medium hover:bg-gray-100 transition">
          <FaEnvelope />
          <span>Log in with Email</span>
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-white hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
