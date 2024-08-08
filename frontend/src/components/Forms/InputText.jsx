import React from "react";

const InputText = ({label, name, type = "text", pattern, placeholder, onChange, value, errorId, errorMessage,maxlength }) => {
    return (
        <div className="relative z-0 w-full mb-5">
            <input
                id={name+'id'}
                type={type}
                name={name}
                pattern={pattern}
                placeholder=" "
                required
                className="pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-200"
                onChange={onChange}
                value={value}
                maxLength = {maxlength}
            />
            <label htmlFor={name} className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{label}</label>
            <span className="text-sm text-red-600 hidden FADE" id={errorId}>{errorMessage}</span>
        </div>
    ); 
}

export default InputText;
