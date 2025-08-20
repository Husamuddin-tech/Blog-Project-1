
// Mistake in this
// import React, { useId } from 'react';

// function Select({ options, label, className, ...props }, ref) {
//   const id = useId();
//   return (
//     <div className="w-full">
//       {label && (
//         <label
//           htmlFor={id}
//           className=""
//         ></label>
//       )}
//       <select
//         id={id}
//         ref={ref}
//         className={`w-full px-4 py-2 rounded-md bg-black border border-yellow-500 text-yellow-100
//                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
//                     hover:border-yellow-400 transition-all duration-300 ease-in-out
//                     ${className}`}
//         {...props}
//       >
//         {options?.map((option) => {
//           <option key={option} value={option}>
//             {option}
//           </option>;
//         })}
//       </select>
//     </div>
//   );
// }

// export default React.forwardRef(Select);



import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full px-4 py-2 rounded-md bg-black border border-yellow-500 text-yellow-100
                    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
                    hover:border-yellow-400 transition-all duration-300 ease-in-out
                    ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)