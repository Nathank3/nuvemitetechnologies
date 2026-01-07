import React from 'react';

// Import logos (Vite will handle the paths)
import polucon from '../assets/partners/polycon.png';
import aqualytic from '../assets/partners/aqualytic.png';
import somlab from '../assets/partners/somlab.png';
import fivet from '../assets/partners/fivet.png';
import qplus from '../assets/partners/qplus.png';
import crown from '../assets/partners/crown.png';
import syngenta from '../assets/partners/sygenta.png';
import nas from '../assets/partners/nas.png';
import jasiri from '../assets/partners/jasiri.png';

const partners = [
    { name: 'Polucon', logo: polucon },
    { name: 'Aqualytic', logo: aqualytic },
    { name: 'Somlab', logo: somlab },
    { name: 'Fivet', logo: fivet },
    { name: 'Quality Plus', logo: qplus },
    { name: 'Crown Paints', logo: crown },
    { name: 'Syngenta', logo: syngenta },
    { name: 'NAS Servair', logo: nas },
    { name: 'Jasiri', logo: jasiri },
];

const ClientTrustBar = () => {
  return (
    <div className="bg-white py-12 border-b border-slate-100 relative z-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>
        
        {/* Logo Grid - Responsive Layout */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center w-32 md:w-36 transition-all duration-300 transform hover:scale-105">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-w-full h-auto max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTrustBar;
