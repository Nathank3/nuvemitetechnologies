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
      }, 5000); 
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Derived colors for the current selection
  const currentTheme = getThemeColors(selectedProduct.theme);

  return (
    <div className="min-h-screen bg-slate-50">
       <section className="relative pt-32 pb-10 px-4 text-center bg-slate-900 border-b border-slate-800">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Digital Ecosystem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
             Discover our suite of integrated tools designed to power every aspect of your operations.
          </motion.p>
      </section>

      <section className="w-full bg-slate-50 overflow-hidden py-10 px-4 md:px-8 relative" id="products">
         {/* Background Ambience */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 pointer-events-none" />
         
         <div className="relative max-w-[1400px] mx-auto h-full flex flex-col">
            
            {/* Content Layout */}
            <div 
                className="flex flex-col xl:flex-row gap-6 h-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Sidebar Navigation */}
              <div className="w-full xl:w-1/4 flex flex-col gap-2">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`group relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left ${
                      selectedProduct.id === product.id 
                        ? 'bg-white shadow-md border border-slate-100' 
                        : 'hover:bg-white/60 border border-transparent'
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
                            className={`absolute bottom-0 left-0 h-1 bg-slate-100 rounded-b-xl w-full overflow-hidden`}
                        >
                            <motion.div
                                className={`h-full ${product.bgAccent}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </motion.div>
                    )}

                    <div className={`p-2 rounded-lg transition-colors ${selectedProduct.id === product.id ? product.bgAccent + ' text-white' : 'bg-white border border-slate-200 text-slate-400 group-hover:text-slate-600'}`}>
                        <product.icon size={20} />
                    </div>
                    <div className="flex-1">
                        <h3 className={`font-semibold transition-colors ${selectedProduct.id === product.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                            {product.name}
                        </h3>
                    </div>
                    
                    {selectedProduct.id === product.id && (
                      <ArrowRight size={16} className="text-slate-400" />
                    )}
                  </button>
                ))}
              </div>

              {/* Main Display Area (Glassmorphism) */}
              <div className="w-full xl:w-3/4 relative min-h-[500px] bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xl overflow-hidden flex flex-col items-center justify-center">
                 
                 {/* Product Title Overlay */}
                 <div className="absolute top-6 left-6 z-10 max-w-xs">
                     <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 border ${currentTheme.border} mb-3`}>
                        <selectedProduct.icon size={12} className={currentTheme.text} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">{selectedProduct.name}</span>
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">Powering <span className={currentTheme.text}>Innovation</span></h2>
                     <p className="text-slate-500 text-xs leading-relaxed">
                        Connecting every workflow for seamless operations.
                     </p>
                 </div>

                 {/* The Hub Animation */}
                 <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedProduct.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex-1 flex items-center justify-end md:justify-center py-4 scale-75 md:scale-90 lg:scale-100 origin-center" 
                    >
                        <EcosystemHub productKey={selectedProduct.id} />
                    </motion.div>
                 </AnimatePresence>
              </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default ProductsPage;
