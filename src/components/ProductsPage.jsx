import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import EcosystemHub from './EcosystemHub';
import { ecosystemData, getThemeColors } from '../data/ecosystemData';

const products = Object.entries(ecosystemData).map(([key, data]) => ({
  id: key,
  ...data,
  // Helper to resolve specific color classes for the sidebar list
  colorClass: getThemeColors(data.theme).text,
  bgAccent: getThemeColors(data.theme).bg
}));

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setSelectedProduct((prev) => {
          const currentIndex = products.findIndex((p) => p.id === prev.id);
          const nextIndex = (currentIndex + 1) % products.length;
          return products[nextIndex];
        });
      }, 5000); // 5 seconds loop (Increased time as per complexity)
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Derived colors for the current selection
  const currentTheme = getThemeColors(selectedProduct.theme);

  return (
    <section className="relative min-h-screen w-full bg-slate-900 overflow-hidden py-20 px-4 md:px-8" id="products">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto h-full flex flex-col">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Ecosystem
          </motion.h2>
          <p className="text-slate-400 max-w-2xl">
            Discover our suite of integrated tools designed to power every aspect of your operations.
          </p>
        </div>

        {/* Content Layout */}
        <div 
            className="flex flex-col xl:flex-row gap-8 h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Sidebar Navigation */}
          <div className="w-full xl:w-1/4 flex flex-col gap-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                  selectedProduct.id === product.id 
                    ? 'bg-white/10 shadow-lg border border-white/10' 
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                {/* Active Indicator Line */}
                {selectedProduct.id === product.id && (
                    <motion.div 
                        layoutId="activeIndicator"
                        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${product.bgAccent}`} 
                    />
                )}
                 {/* Progress/Timer Bar for Autoplay */}
                 {selectedProduct.id === product.id && !isPaused && (
                    <motion.div 
                        className={`absolute bottom-0 left-0 h-1 bg-white/20 rounded-b-xl w-full overflow-hidden`}
                    >
                        <motion.div
                            className={`h-full ${product.bgAccent}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    </motion.div>
                )}

                <div className={`p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors ${selectedProduct.id === product.id ? product.colorClass : ''}`}>
                    <product.icon size={20} />
                </div>
                <div className="flex-1">
                    <h3 className={`font-semibold transition-colors ${selectedProduct.id === product.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {product.name}
                    </h3>
                </div>
                
                {selectedProduct.id === product.id && (
                  <ArrowRight size={16} className="text-white" />
                )}
              </button>
            ))}
          </div>

          {/* Main Display Area (Glassmorphism) */}
          <div className="w-full xl:w-3/4 relative min-h-[700px] bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
             
             {/* Product Title Overlay (Optional, for context) */}
             <div className="absolute top-8 left-8 z-10">
                 <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border ${currentTheme.border} mb-4`}>
                    <selectedProduct.icon size={14} className={currentTheme.text} />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">{selectedProduct.name}</span>
                 </div>
                 <h2 className="text-3xl font-bold text-white mb-2">Powering <span className={currentTheme.text}>Innovation</span></h2>
                 <p className="text-slate-400 max-w-md text-sm">
                    Connecting every workflow for seamless operations.
                 </p>
             </div>

             {/* The NEW Hub Animation */}
             <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedProduct.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex-1 flex items-center justify-center py-10 md:py-0 scale-50 md:scale-90 lg:scale-100 origin-center" 
                >
                    <EcosystemHub productKey={selectedProduct.id} />
                </motion.div>
             </AnimatePresence>

             {/* CTA Button - Static on Mobile, Absolute on Desktop */}
             <div className="relative md:absolute bottom-8 right-8 z-10 mt-auto md:mt-0">
                <button className={`group flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${currentTheme.bg}`}>
                    <span>Explore {selectedProduct.name.split(' ')[1] || selectedProduct.name}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
