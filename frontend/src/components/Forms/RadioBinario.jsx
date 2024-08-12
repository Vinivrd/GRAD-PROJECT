import React from "react";
import { motion } from "framer-motion";

const RadioBinario = ({
  textoPrincipal,
  name,
  id1,
  id2,
  idError,
  label,
  label2,
  onChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-gray-500">{textoPrincipal}</p>
      <div className="flex mb-4 space-x-1 pt-5 pb-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200">
        <div className="block">
          <input
            type="radio"
            name={name}
            value="1"
            id={id1}
            className="mr-2 text-black border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={onChange}
          />
          <label htmlFor={id1} className="text-gray-800 text-sm font-normal">
            {label}
          </label>
        </div>

        <div className="block">
          <input
            type="radio"
            name={name}
            value="2"
            id={id2}
            className="mr-2 text-black border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={onChange}
          />
          <label htmlFor={id2} className="text-gray-800 text-sm font-normal">
            {label2}
          </label>
        </div>
      </div>
      <span className="text-sm text-red-600 hidden" id={idError}></span>
    </motion.div>
  );
};

export default RadioBinario;
