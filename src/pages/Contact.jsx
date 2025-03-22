import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-6">Have any questions? Reach out to us for the best burger and pizza experience.</p>
                    <div className="mb-4">
                        <p className="font-semibold">Address:</p>
                        <p className="text-gray-600">123 Food Street, Tasty Town, CA 12345</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Phone:</p>
                        <p className="text-gray-600">+91 (555) BURG-PIZZA</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-gray-600">order@burgerpizzaparadise.com</p>
                    </div>
                </div>
                <form className="p-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" id="name" className="w-full border rounded-lg p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" className="w-full border rounded-lg p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea id="message" className="w-full border rounded-lg p-2" rows="4"></textarea>
                    </div>
                    <Link to='#' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Submit</Link>
                </form>
            </div>
        </div>
    );
}