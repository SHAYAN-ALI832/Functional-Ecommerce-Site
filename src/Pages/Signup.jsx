import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Signimg from '../assets/signinimg.png';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(formData));
    alert('Account created');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 shadow-md rounded-sm overflow-hidden">
        <div className="bg-[#eaf8fb] flex items-center justify-center">
          <img src={Signimg} alt="Shopping Illustration" className="w-full h-auto object-contain" />
        </div>

        <div className="p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-1">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm"
              required
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm"
              required
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-sm hover:bg-red-700 transition-all"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-sm text-sm hover:bg-gray-50 transition-all"
            >
              <FcGoogle size={20} /> Sign up with Google
            </button>
          </form>

          {/* <p className="text-center text-sm text-gray-500 mt-6">
            Already have account?{' '}
            <Link to="/login" className="text-red-600 font-medium cursor-pointer hover:underline">
              Log In
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
