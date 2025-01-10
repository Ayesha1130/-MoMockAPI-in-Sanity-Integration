import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-28 h-28">
        <div className="flex absolute w-full h-full border-t-4 border-green-600 animate-spin rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-red-600 animate-spin-slow rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-yellow-600 animate-spin-slow rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-pink-600 animate-spin-slow rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;