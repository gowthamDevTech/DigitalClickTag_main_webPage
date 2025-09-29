// components/Header.jsx
import React from 'react';

export default function  Header  ()  {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span role="img" aria-label="star">⭐</span>
        <p className="text-sm">AI Driven Digital Marketing Solutions - Stay Ahead of Your Competitors!</p>
        <span role="img" aria-label="rocket">🚀</span>
      </div>
      <div className="flex items-center space-x-4">
        
        <span className="text-sm">Spark Edge Optimization</span>
      </div>
    </header>
  ); 
};

// export default Header;
