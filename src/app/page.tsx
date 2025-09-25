"use client";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      
      {/* Top Heading Center */}
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Maryam
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-xl p-6 max-w-4xl w-full">
        
        {/* Left Side Picture */}
        <img
          src="/images/maryam.png"   // 👈 apni pic yahan save karein
          alt="Maryam"
          className="w-56 h-56 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* Right Side Authentic Intro */}
        <div className="text-center md:text-left space-y-3">
          <p className="text-gray-700 text-lg">
            Hello! My name is <span className="font-semibold">Maryam</span>. I have a strong
            interest in technology and enjoy learning how modern websites and
            applications are built.
          </p>
          <p className="text-gray-700 text-lg">
            Currently, I am practicing <span className="font-semibold">Next.js 15, Tailwind CSS, 
            and TypeScript</span> to improve my development skills. My goal is to
            create clean, responsive, and user-friendly web projects.
          </p>
          <p className="text-gray-700 text-lg">
            This project is a simple example that highlights my journey in web
            development, and I look forward to building more advanced projects
            in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
