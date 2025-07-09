import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const navigate = useNavigate(); //
      const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        // If login is successful:
        navigate('/login'); // 👈 go to a new page
      };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
          </div>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account? 
          <Link to="/login" className="text-purple-400 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}
