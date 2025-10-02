// app/page.tsx

import React from 'react';
import FuturisticHero from '../components/FuturisticHero';
import DataConsoleCard from '../components/DataConsoleCard';

export default function Home() {
  return (
    // Set the overall dark theme background and text color for the page
    <main className="bg-gray-950 min-h-screen text-gray-100">
      
      {/* --------------------- 1. FUTURISTIC HERO --------------------- */}
      <FuturisticHero />

      {/* --------------------- 2. DATA CONSOLE SECTION --------------------- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-50 uppercase tracking-wider">
            Operational Metrics
          </h2>
          
          {/* Grid to hold the console cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <DataConsoleCard 
              title="Funds Raised" 
              value="1.2M" 
              unit="$" 
              description="Total capital allocated to active community projects this cycle."
            />
            
            <DataConsoleCard 
              title="People Impacted" 
              value="98.5K" 
              unit="Lives" 
              description="Direct beneficiaries of our technology and outreach programs."
            />
            
            <DataConsoleCard 
              title="Active Projects" 
              value="007" 
              unit="Units" 
              description="Currently running initiatives in research, infrastructure, and education."
            />

          </div>
        </div>
      </section>
      
      {/* --------------------- 3. ADDITIONAL CONTENT (Placeholder) --------------------- */}
      <section className="py-16 px-4 text-center border-t border-gray-800">
        <p className="text-lg text-slate-500 font-mono">
          [System Status: Online. Ready for next data push.]
        </p>
      </section>

    </main>
  );
}
