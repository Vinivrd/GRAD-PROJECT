import React from 'react';
import { motion } from 'framer-motion';

const SelectInputDisciplinas = ({ label, name, options, onChange, value, errorId, errorMessage }) => (
  <motion.div
    className="relative z-0 w-full mb-5"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <select
      id={name + "id"}
      name={name}
      value={value}
      onChange={onChange}
      className="pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-200"
    >
      <option value="" disabled hidden></option>
      {options.map((option, index) => (
        <option
          key={index}
          value={`${option.Nome}-${option.Disciplina}-${option.CreditosAula}`}
          className={`select-${name}-${index}`}
        >
          {`${option.Nome}-${option.Disciplina}-${option.CreditosAula}`}
        </option>
      ))}
    </select>
    <label htmlFor={name} className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
      {label}
    </label>
    <span className="text-sm text-red-600 hidden" id={errorId}>
      {errorMessage}
    </span>
  </motion.div>
);

export default SelectInputDisciplinas;
