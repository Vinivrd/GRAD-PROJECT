import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="bg-blue-950 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://www.icmc.usp.br/templates/icmc2015/img/logo.png" alt="Logo" className='self-center text-2xl font-semibold whitespace-nowrap' />
                </a>

                {/* Botao*/}
                <div class="absolute inset-y-0 right-7 flex items-center sm:hidden">
                    {/*Mobile menu button*/}
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={toggleMenu}>

                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        {/*
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
                        */}
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/*
                                Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden"
                            */}
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>



                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex items-center justify-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-950 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/exclusao"
                                className="cursor-pointer block py-2 px-3 text-gray-50 hover:text-gray-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Exclusão de disciplinas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/trancamento"
                                className="cursor-pointer block py-2 px-3 text-gray-50 hover:text-gray-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trancamento de disciplinas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/matricula"
                                className="cursor-pointer block py-2 px-3 text-gray-50 hover:text-gray-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Matrícula<br />menos de 12 créditos-aula<br />mais de 40 créditos-aula
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/trancamentoTotal"
                                className="cursor-pointer block py-2 px-3 text-gray-50 hover:text-gray-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trancamento total do curso
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="relative z-0 w-full mb-5"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}  
                        >
                            <div class="sm:hidden" id="mobile-menu">
                                <div class="flex items-center justify-center mt-5">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <a href="/"
                                        class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                    >Home</a>
                                    <a href="/exclusao"
                                        class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"
                                    >Exclusão</a>

                                    <a href="/trancamento"
                                        class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                    >Trancamento</a>

                                    <a href="/matricula"
                                        class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                    >Matrícula</a>

                                    <a href="/trancamentoTotal"
                                        class="flex items-center justify-center rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                    >Trancamento Total</a>


                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;
