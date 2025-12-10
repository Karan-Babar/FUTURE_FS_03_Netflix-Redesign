"use client";

import { FiDownloadCloud } from "react-icons/fi";

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-6 mb-4 -mt-10">
      
      {/* Icon */}
      <FiDownloadCloud className="text-gray-400 text-7xl mb-6" />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3">
        No Downloads Yet
      </h1>

      {/* Subtitle message */}
      <p className="text-white/70 text-center max-w-md mb-8">
        You haven’t downloaded anything yet.  
        Download your favorite movies and shows to watch offline anytime.
      </p>

      {/* Button */}
      <a
        href="/movies"
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-lg font-semibold"
      >
        Browse Movies
      </a>
    </div>
  );
}
