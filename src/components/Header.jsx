import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center">
                    <ul className="flex space-x-8 font-medium">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                to='/'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                to='/About'
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                }
                                to='/Contact'
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                {/* Sidebar Toggle Button */}
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden text-gray-700 p-2 focus:outline-none"
                >
                    ☰
                </button>
                
                {/* Sidebar */}
                <div 
                    className={`fixed inset-0 bg-opacity-50 z-50 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform lg:hidden`}
                >
                    <div className="bg-gray-200 h-full w-64 p-5 shadow-lg fixed right-0 top-0">
                        <button 
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-700 p-2 mb-5"
                        >
                            ✖
                        </button>
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                    to='/'
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                    to='/About'
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                                    }
                                    to='/Contact'
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
