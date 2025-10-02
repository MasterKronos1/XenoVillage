// components/DataConsoleCard.tsx

import React from 'react';

interface DataConsoleCardProps {
  title: string;
  value: string;
  unit: string;
  description: string;
}

const DataConsoleCard: React.FC<DataConsoleCardProps> = ({ title, value, unit, description }) => {
  return (
    // Apply dark background, neon border, and the CSS animation class
    <div className="bg-gray-900 p-6 rounded-lg border-2 neon-border transition-transform hover:scale-[1.02] duration-300">
      
      {/* Title */}
      <p className="text-sm uppercase tracking-widest text-slate-400 font-mono mb-2">
        // {title} //
      </p>
      
      {/* Value */}
      <div className="flex items-baseline mb-4">
        <span className="text-4xl md:text-5xl font-bold text-teal-400">
          {value}
        </span>
        <span className="ml-2 text-xl text-slate-300">
          {unit}
        </span>
      </div>
      
      {/* Description/Context */}
      <p className="text-sm text-gray-400 border-t border-gray-700 pt-3">
        {description}
      </p>

    </div>
  );
};

export default DataConsoleCard;
