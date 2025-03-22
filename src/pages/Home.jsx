import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-16">
            <section className="relative overflow-hidden rounded-lg">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="p-6">
                        <h1 className="text-4xl font-bold mb-4">Your Craving, Our Creation</h1>
                        <p className="text-gray-600 mb-6">
                            Indulge in the ultimate burger and pizza experience. We craft every dish with passion and the finest ingredients.
                        </p>
                        <Link
                            to="#"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                        >
                            Explore Our Menu
                        </Link>
                    </div>
                    <div className="relative flex justify-center">
                        <img
                            src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-delicious-burger-png-image_9113995.png"
                            alt="Delicious Burger"
                            className="w-full md:w-3/4 lg:w-1/2"
                        />
                    </div>
                </div>
            </section>
            <section className="py-12 text-center">
                <img
                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-sausage-cheese-pizza-slice-three-dimensional-3d-gourmet-food-fast-food-png-image_13137250.png"
                    alt="Pizza Slice"
                    className="mx-auto w-64 mb-8"
                />
                <h2 className="text-3xl font-semibold mb-4">Taste the Paradise</h2>
                <p className="text-gray-600">
                    From classic combinations to bold new flavors, our burgers and pizzas are designed to satisfy your every craving.
                </p>
                
            </section>
        </div>
    );
}