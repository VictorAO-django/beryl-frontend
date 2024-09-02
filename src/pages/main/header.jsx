import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaShoppingBasket, FaUser } from "react-icons/fa";

function Header(){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <nav className="w-full flex-col items-center p-4 bg-white shadow-md z-0">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-between grow">
                        <div className="text-lg">
                            <NavLink to="/" className="font-montserrat-semi hover:text-gray-300 text-main-color">
                                Beryl Store
                            </NavLink>
                        </div>
                        <div className="hidden space-x-4 lg:space-x-10 lg:flex items-center">
                            <NavLink to="/" className="font-montserrat-medium text-[14px]  hover:text-main-color transition-all duration-300">
                                Categories
                            </NavLink>
                            <NavLink to="/about" className="font-montserrat-medium text-[14px]  hover:text-main-color transition-all duration-300">
                                Deals
                            </NavLink>
                            <NavLink to="/resume" className="font-montserrat-medium text-[14px]  hover:text-main-color transition-all duration-300">
                                What's New
                            </NavLink>
                            <NavLink to="/impact" className="font-montserrat-medium text-[14px]  hover:text-main-color transition-all duration-300">
                                Delivery
                            </NavLink>
                        </div>
                    </div>

                    <div className="grow hidden items-center justify-around md:flex">
                        <div className="w-full lg:w-auto">
                            <form action="" className="relative flex items-center justify-center">
                                <input 
                                placeholder="Search Product" 
                                type="text" 
                                className="w-full text-gray-700 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main-color text-[14px] pr-10 px-4 py-1 font-montserrat-regular"
                                />
                                <span className="absolute inset-y-0 flex items-center pl-3 right-4">
                                    <FaSearch className="text-gray-600" />
                                </span>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-end pr-6 grow lg:grow-0">
                        <div className="flex items-center space-x-1">
                            <span className="inset-y-0 flex items-center pl-3 right-4 w-[38px]">
                            <img src="/account.png" alt="account" />
                            </span>
                            <NavLink to="/account/settings" className="mt-[8px] font-montserrat-medium text-[14px]">
                            Account
                            </NavLink>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="inset-y-0 flex items-center pl-3 right-4 w-[36px]">
                                <img src="/shopping_cart.png" alt="cart" />
                            </span>
                            <NavLink to="/cart" className="mt-[8px] font-montserrat-medium text-[14px]">
                            Cart
                            </NavLink>
                        </div>
                    </div>

                    <div className="lg:hidden flex justify-around">
                        <button 
                        className="text-black focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-4 lg:hidden bg-white shadow-lg flex flex-col absolute z-30 top-14 right-0 w-[200px] border rounded-lg border-gray-200 space-y-2">
                        <NavLink to="/" className="font-montserrat-regular text-[14px] bg-gray-50 p-4  hover:text-main-color transition-all duration-300">
                           Categories
                        </NavLink>
                        <NavLink to="/about" className="font-montserrat-regular text-[14px] bg-gray-50 p-4  hover:text-main-color transition-all duration-300">
                            Deals
                        </NavLink>
                        <NavLink to="/resume" className="font-montserrat-regular text-[14px] bg-gray-50 p-4  hover:text-main-color transition-all duration-300">
                                What's New
                        </NavLink>
                        <NavLink to="/impact" className="font-montserrat-regular text-[14px] bg-gray-50 p-4  hover:text-main-color transition-all duration-300">
                            Delivery
                        </NavLink>
                    </div>
                )}
            </nav>

            <div className="min-h-[350px] flex justify-start items-center py-10">
                <div className="mx-5 xs:mx-10 lg:mx-20">
                    <p className="text-5xl font-montserrat-medium">
                        Shopping And <br />Department Store.
                    </p>
                    <p className="font-montserrat-regular text-[14px] my-6">
                        Shopping is a bit of a relaxing hobby for me, which <br className="hidden xs:flex" /> is sometimes troubling for the bank balance.
                    </p>
                    <NavLink to="/doc" className="bg-main-color rounded-full font-montserrat-medium text-[14px] text-white py-2.5 px-5 hover:bg-hover transition-all duration-300 shadow-md">
                        Learn More
                    </NavLink>
                    <form action="" className="relative top-8 md:hidden flex items-center justify-center">
                        <input 
                        placeholder="Search Product" 
                        type="text" 
                        className="w-full text-gray-700 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main-color text-[14px] pr-10 px-4 py-3 font-montserrat-regular"
                        />
                        <span className="absolute inset-y-0 flex items-center pl-3 right-4">
                            <FaSearch className="text-gray-600" />
                        </span>
                    </form>
                </div>
            </div>
        </section>
        
    )
 };

 export default Header;