import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Signimg from '../assets/signinimg.png'; // Adjust the path if needed

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert('Login successful!');
      // Example redirect:
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 shadow-md rounded-sm overflow-hidden">
        {/* Left Side Image */}
        <div className="bg-[#eaf8fb] flex items-center justify-center">
          <img
            src={Signimg}
            alt="Shopping Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-1">Log in to Exclusive</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm"
              required
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-sm hover:bg-red-700 transition-all"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-sm text-sm hover:bg-gray-50 transition-all"
            >
              <FcGoogle size={20} /> Sign in with Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{' '}
            <span className="text-red-600 font-medium cursor-pointer hover:underline">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
