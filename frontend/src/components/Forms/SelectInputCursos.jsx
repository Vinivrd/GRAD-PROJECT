import React from 'react';

const SelectInputCursos = ({ label, name, options, onChange, value, errorId, errorMessage }) => (
  <div className="relative z-0 w-full mb-5">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-200"
    >
      <option value="" selected disabled hidden></option>
      {options.map((option, index) => (
        <option key={index} value={option.tag} className={`select-${name}-${index}`}>
          {option.name}
        </option>
      ))}
    </select>
    <label htmlFor={name} className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{label}</label>
    <span className="text-sm text-red-600 hidden" id={errorId}>{errorMessage}</span>
  </div>
);

export default SelectInputCursos;