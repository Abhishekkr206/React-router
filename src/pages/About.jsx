import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-fast-food-big-ham-burger-png-image_8648590.png" alt="About Us" className="w-full rounded-lg" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">About Burger & Pizza Paradise</h2>
                    <p className="text-gray-600 mb-6">
                        We are a team of passionate food lovers dedicated to bringing you the most delicious burgers and pizzas.
                    </p>
                    <p className="text-gray-600">
                        Our mission is to create mouthwatering dishes using the freshest ingredients and innovative recipes. We strive to provide an unforgettable dining experience for every customer.
                    </p>
                    <p className="text-gray-600 mt-4">
                        From our signature burgers to our handcrafted pizzas, every item on our menu is made with care and attention to detail. We are committed to quality and customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
}