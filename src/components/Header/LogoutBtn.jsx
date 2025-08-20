import React from 'react';
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="px-6 py-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
             text-black font-semibold rounded-full shadow-lg 
             hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] 
             hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-200
             transition-all duration-300 ease-in-out"
             onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
