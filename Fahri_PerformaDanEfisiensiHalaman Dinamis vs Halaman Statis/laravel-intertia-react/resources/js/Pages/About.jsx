import React from "react";

export default function About() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">About</h1>
            <p className="text-gray-900">This is the about page.</p>
            {/* test tailwind css */}
            <div className="bg-gray-200 p-4">
                <p className="text-gray-800">This is a test of Tailwind CSS.</p>
            </div>
        </div>
    );
}