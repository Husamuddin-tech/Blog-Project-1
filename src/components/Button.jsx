// import React from 'react'

// function Button(
//     children,
//     type = 'button',
//     bgcolor = 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300',
//     textColor = 'text-black',
//     className = '',
//     ...props
// ) {
//   return (
//     <button type={type}
//       className={`${bgcolor} ${textColor} px-5 py-2 font-semibold rounded-full shadow-md
//                   hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] 
//                   hover:brightness-110 transition-all duration-300 ease-in-out
//                   ${className}`}
//       {...props}>
//         {children}
//     </button>
//   )
// }

// export default Button


import React from 'react';

function Button({
  children,
  type = 'button',
  bgColor = 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300',
  textColor = 'text-black',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} px-5 py-2 font-semibold rounded-full shadow-md
                  hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] 
                  hover:brightness-110 transition-all duration-300 ease-in-out
                  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
