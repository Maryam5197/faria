"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-none shadow-lg flex flex-col">
        
        {/* Top Thin Border */}
        <div
          className="w-full border-t border-gray-400"
          style={{ borderWidth: "0.5px" }}
        ></div>

        {/* Pic + Name Row */}
        <div className="relative flex items-center justify-center mt-4">
          {/* Pic Left (slightly lower than border) */}
          <div className="absolute left-8 top-2">
            <img
              src="/mypic.jpg" // apni image ko public/mypic.jpg me daalein
              alt="Maryam"
              className="w-20 h-20 rounded-full object-cover border border-pink-400"
            />
          </div>

          {/* Name Center */}
          <h1 className="text-4xl font-bold text-gray-800">Maryam</h1>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-6"></div>

        {/* Bottom (Paragraphs with thick border) */}
        <div className="flex-1 flex items-center justify-center p-8 text-center border-t-4 border-gray-500 mt-4">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I am Maryam, a student who is passionate about exploring new
              technologies and creating creative web projects. This project is
              built with{" "}
              <span className="font-semibold text-pink-500">
                Next.js 15, Tailwind CSS, and TypeScript
              </span>{" "}
              without any extra libraries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My aim is to practice programming, build responsive websites, and
              improve my skills through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
