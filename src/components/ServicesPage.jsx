import React from 'react';
import { motion } from 'framer-motion';
import { Code, Printer, PenTool, Search, Smartphone, ShieldCheck, Server, Database, Network, ShoppingBag, MessageSquare, Monitor, Globe } from 'lucide-react';
import SEO from './SEO';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Building robust, scalable applications tailored to your specific business challenges.",
      icon: Code,
      color: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      id: 2,
      title: "System Integration",
      description: "Seamlessly connecting your disparate tools into a unified, efficient ecosystem.",
      icon: Network,
      color: "bg-purple-500",
      textColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "Reimagining your business processes for the digital age to drive growth.",
      icon: Globe,
      color: "bg-cyan-500",
      textColor: "text-cyan-500"
    },
    {
      id: 4,
      title: "E-commerce Development",
      description: "Creating high-converting online stores with secure payment gateways.",
      icon: ShoppingBag,
      color: "bg-emerald-500",
      textColor: "text-emerald-500"
    },
    {
      id: 5,
      title: "Printing & Branding",
      description: "High-quality bulk printing and strategic brand identity design.",
      icon: Printer,
      color: "bg-pink-500",
      textColor: "text-pink-500"
    },
    {
      id: 6,
      title: "Bulk SMS Services",
      description: "Reliable messaging platforms for mass communication and marketing.",
      icon: MessageSquare,
      color: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your visibility and engagement online.",
      icon: Monitor,
      color: "bg-red-500",
      textColor: "text-red-500"
    },
    {
      id: 8,
      title: "ICT Consulting",
      description: "Expert advice to align your technology infrastructure with business goals.",
      icon: Server,
      color: "bg-indigo-500",
      textColor: "text-indigo-500"
    }
  ];



  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": "Nuvemite Technologies"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <SEO 
        title="Our Services" 
        description="Professional IT services including Software Development, System Integration, Digital Transformation, E-commerce, and Bulk SMS." 
        keywords="Software Development Kenya, IT Services, System Integration, Digital Marketing, Bulk SMS, Web Design, Nuvemite Services"
        schema={serviceSchema}
      />
      {/* 1. Hero Section with Glassmorphic Spinner */}
      <section className="relative pt-32 pb-20 px-4 bg-slate-900 overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
              
              {/* Text Content */}
              <div className="max-w-2xl text-center lg:text-left z-10 mb-16 lg:mb-0">
                  <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                  >
                    Our Solutions. <br />
                    <span className="text-blue-500">Your Success.</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                  >
                    We provide a comprehensive suite of digital services designed to elevate your business in an increasingly connected world.
                  </motion.p>
              </div>

              {/* Glass Spinner */}
              <div className="relative w-[500px] h-[500px] flex items-center justify-center hidden md:flex">
                  {/* Rotating Container */}
                  <div className="group relative w-full h-full animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]">
                        {/* Orbit Track */}
                        <div className="absolute inset-0 rounded-full border border-blue-100/50" />
                        <div className="absolute inset-16 rounded-full border border-blue-50/50" />

                        {/* Orbiting Icons */}
                        {[Code, Network, Globe, MessageSquare, Printer, Server].map((Icon, i) => {
                            const angle = (i * 60) * (Math.PI / 180); // 6 icons distributed
                            const radius = 220; // distance from center
                            const x = Math.cos(angle) * radius + 250 - 32; // center (250) - half icon size (32)
                            const y = Math.sin(angle) * radius + 250 - 32;

                            return (
                                <div 
                                    key={i}
                                    className="absolute w-16 h-16 bg-white/80 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl flex items-center justify-center text-blue-600 hover:scale-125 transition-transform duration-300"
                                    style={{ 
                                        left: x, 
                                        top: y,
                                        transform: `rotate(-${i * 60}deg)` // Counter-rotation logic if needed, but styling handled by animate-spin parent. 
                                        // Actually, if parent spins, children spin with it. To keep them upright, they need counter-animation.
                                        // For simplicity, letting them spin is often acceptable for abstract designs, but "Glassmorphic spinner" usually implies the classic 3D card feel.
                                        // Let's rely on the parent spin.
                                    }}
                                >
                                    <div className="animate-[spin_20s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                                         <Icon size={28} />
                                    </div>
                                </div>
                            );
                        })}
                  </div>

                  {/* Central Hub */}
                  <div className="absolute w-32 h-32 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center z-20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-500" />
                        <span className="relative text-white font-bold text-xl tracking-wider">NUVEMITE</span>
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-blue-400/20 blur-[100px] -z-10 rounded-full" />
              </div>
          </div>
      </section>

      {/* 2. Detailed Service Grid */}
      <section className="py-24 px-4 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                    >
                        {/* Top Accent */}
                        <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`} />
                        
                        <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className={service.textColor} size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>

                        <div className="absolute bottom-0 right-0 p-32 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                            <service.icon className="w-full h-full text-slate-900" />
                        </div>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
