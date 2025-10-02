// components/FuturisticHero.tsx

import React from 'react';

// A simple Hero component with futuristic styling
const FuturisticHero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center border-b border-gray-800">
      
      {/* Main Headline with Accent Color */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-50">
        <span className="text-teal-400">PROJECT:</span> XENOVILLAGE
      </h1>
      
      {/* Sub-Headline/Mission Statement */}
      <p className="mt-6 text-xl text-slate-400 max-w-2xl font-mono leading-relaxed">
        // Initiating Data Stream... Securing the future of our community through technology and collaboration. //
      </p>
      
      {/* Call to Action Button */}
      <a 
        href="/donate" 
        className="mt-10 px-8 py-3 text-lg font-bold uppercase rounded-md bg-teal-500 text-gray-900 transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50"
      >
        Access Console
      </a>
      
    </div>
  );
};

export default FuturisticHero;
