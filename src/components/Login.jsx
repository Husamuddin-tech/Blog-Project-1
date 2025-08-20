import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      console.log('Session created:', session);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log('Current user:', userData);
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error.message || error);
      setError("❌ Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black p-6">
      <div
        className={`w-full max-w-md bg-black border border-yellow-500/40 rounded-lg shadow-lg p-8 
                      hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {/* <span className=""> */}
          <Logo width="120px" />
          {/* </span> */}
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-yellow-400 mb-2">
          Login to your Account
        </h2>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mb-6">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="mb-4 p-2 text-center text-red-500 font-semibold bg-red-100 rounded">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <div className="">
            <Input
              className="w-full bg-gray-900 border border-yellow-600/40 focus:border-yellow-500 focus:ring-yellow-500 text-white rounded-xl px-4 py-2"
              label="Email: "
              placeholder="Enter your Email"
              type="email"
              autoComplete="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.test(
                      value
                    ) || 'Email address must be a valid Address',
                },
              })}
            />
            <Input
              className="w-full bg-gray-900 border border-yellow-600/40 focus:border-yellow-500 focus:ring-yellow-500 text-white rounded-xl px-4 py-2"
              label="Password: "
              placeholder="Enter your Password"
              type="password"
              autoComplete="current-password"
              {...register('password', {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value) ||
                    'Password must contain min 8 chars, at least 1 uppercase, 1 lowercase, 1 number',
                },
              })}
            />
            <Button
              className="w-full mt-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.02] transform transition duration-300"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
