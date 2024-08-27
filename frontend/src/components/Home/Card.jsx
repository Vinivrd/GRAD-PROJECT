// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-4 lg:mb-0 lg:flex-1">
            <Link 
                to={link}
                className='mb-2 text-2xl font-bold tracking-tight text-gray-900 h-24'
            >
                {title}
            </Link>
            <p className="mb-3 font-normal text-gray-700 overflow-auto h-80">{description}</p>
            <Link
                to={link}
                className='flex justify-center w-full  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                formulário
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    );
};

export default Card;
