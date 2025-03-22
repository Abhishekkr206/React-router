import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="mb-4 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-600">Menu</Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                        <a href="https://github.com/Abhishekkr206" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                    <p>© 2023 Burger & Pizza Paradise. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}