import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <div className='w-full'>
        <Header className="shadow-lg shadow-yellow-500/10" />
        <main className="flex-grow container mx-auto px-6 py-10" >
          <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl shadow-yellow-500/20 p-6">
        < Outlet />
        </div>
        </main>
        <Footer className="border-t border-yellow-500/30 py-6 text-center text-sm text-gray-400" />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-black text-yellow-400 text-xl font-semibold">
      Loading...
    </div>
  )
}

export default App