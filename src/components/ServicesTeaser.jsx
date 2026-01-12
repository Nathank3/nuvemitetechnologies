import React from 'react';
import { ArrowRight, Code, Hammer, Network, Puzzle, PenTool, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesTeaser = () => {
  const servicesList = [
    "Software Development",
    "System Integration",
    "Digital Transformation",
    "E-commerce Development",
    "Printing & Branding",
    "Bulk SMS Services",
    "Digital Marketing",
    "ICT Consulting"
  ];

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Text & CTA */}
          <div className="flex-1 text-left">
             <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 tracking-wide uppercase">
                Our Expertise
             </div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A192F] leading-tight">
                Comprehensive solutions to drive your <span className="text-blue-600">digital transformation.</span>
             </h2>
             <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                We identify your distinct needs and tailor practical IT strategies to help you scale, innovate, and stay ahead of the curve.
             </p>
             <Link 
                to="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25 group"
             >
                Explore All Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          {/* Right: Summary Grid */}
          <div className="flex-1 w-full">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {servicesList.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-lg font-semibold text-slate-700 group-hover:text-[#0A192F] transition-colors">
                            {service}
                        </span>
                    </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
