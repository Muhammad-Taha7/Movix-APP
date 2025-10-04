import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* GIF */}
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404 Not Found"
        className="w-64 h-64 md:w-96 md:h-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-300 mb-8 text-center">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
