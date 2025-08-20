import React from 'react'

function Logo({ size = "text-2xl", className = "" }) {
  return (
    <h1
      className={`bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
                  text-transparent bg-clip-text font-serif font-bold tracking-wide ${size} ${className}`}
    >
      Maison des Mots
    </h1>
  )
}

export default Logo
