import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
      <div className="w-full max-w-md bg-gray-950/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-600/30 p-8">

      {/* Logo */}
        <div className="flex justify-center mb-6">
          <span>
            <Logo width="80%" />
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-yellow-400">Sign Up to create Account</h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Already have an Account?&nbsp;
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300 transition">
            Sign In
          </Link>
        </p>
        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center mt-4">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-4">
          <div>
            <Input
            className="w-full bg-gray-900 border border-yellow-600/40 focus:border-yellow-500 focus:ring-yellow-500 text-white rounded-xl px-4 py-2"
              label="Full Name: "
              autoComplete="username"
              placeholder="Enter your Full name"
              {...register('name', {
                required: true,
              })}
            />
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
            <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.02] transform transition duration-300" type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
