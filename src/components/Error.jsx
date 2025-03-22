import React from "react";
import { Link } from "react-router-dom";
import ErrorGif from "./assets/error.gif";

export default function NotFoundError() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
            <img src={ErrorGif} alt="404 Error" className="w-200 h-auto mb-6 shadow-lg rounded-lg"/>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                <Link to="/">Go Back Home</Link>
            </button>
        </div>
    );
}
