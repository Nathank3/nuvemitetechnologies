import React from 'react';
// Using text placeholders for logos as per plan, styled to look like grayscale logos
// In a real scenario, these would be SVG/PNG imports

const clients = [
  { name: 'IEBC', color: 'text-slate-400' },
  { name: 'Crown Paints', color: 'text-slate-400' },
  { name: 'Syngenta', color: 'text-slate-400' },
  { name: 'Government of Kenya', color: 'text-slate-400' },
  { name: 'USAID', color: 'text-slate-400' },
  { name: 'Amref', color: 'text-slate-400' },
];

const ClientTrustBar = () => {
  return (
    <div className="bg-white py-8 border-b border-slate-100 relative z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              {/* Placeholder text mimicking logo presence */}
              <span className={`text-xl md:text-2xl font-bold font-sans ${client.color} hover:text-nuvemite-blue transition-colors cursor-default`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTrustBar;
