import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  { label, type = 'text', className = '', ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1 text-yellow-400 font-medium tracking-wide"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        ref ={ref}
        className={`w-full px-4 py-2 rounded-md bg-black border border-yellow-500 text-yellow-100
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
                    transition-all duration-300 ease-in-out
                    ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
