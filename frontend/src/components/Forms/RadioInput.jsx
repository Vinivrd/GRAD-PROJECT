import React from 'react';
import { motion } from 'framer-motion';

const RadioInput = ({ label, name, options, onChange, errorId, errorMessage }) => (
  <motion.fieldset
    className="relative z-0 w-full p-px mb-5"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <legend className="absolute text-gray-500 transform -top-3 origin-0">{label}</legend>
    {options.map((option, index) => (
      <div key={index} className="block pt-5 pb-2">
        <input
          type="radio"
          id={`${name}-${index}`} // Adiciona um ID único para cada radio button
          name={name}
          value={option.value}
          onChange={onChange}
          className="mr-1 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
        />
        <label htmlFor={`${name}-${index}`}> {/* Associa o label ao radio button */}
          {option.label}
        </label>
      </div>
    ))}
    <span className="text-sm text-red-600 hidden" id={errorId}>{errorMessage}</span>
  </motion.fieldset>
);

export default RadioInput;
