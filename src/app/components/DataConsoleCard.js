// components/DataConsoleCard.js

import React from 'react';

const DataConsoleCard = ({ title, value, unit }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border-2 border-teal-500 neon-border transition-transform hover:scale-[1.02] duration-300">
      <p className="text-sm uppercase tracking-widest text-slate-400 font-mono">
        // {title} //
      </p>
      <div className="mt-2 flex items-baseline">
        <span className="text-4xl md:text-5xl font-bold text-teal-400">
          {value}
        </span>
        <span className="ml-2 text-xl text-slate-300">
          {unit}
        </span>
      </div>
    </div>
  );
};

export default DataConsoleCard;
