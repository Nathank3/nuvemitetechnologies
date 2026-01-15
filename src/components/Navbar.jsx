import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package, Zap, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for sticky effect and styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Text color logic: White when transparent (top), Deep Blue when scrolled/glassy
  // Nuvemite Blue usually is #005A98 or similar.
  const linkColorClass = isScrolled ? 'text-[#005A98]' : 'text-white';
  
  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 w-full transition-all duration-500 ${
        mobileMenuOpen ? 'z-[9999]' : 'z-50'
      } ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center gap-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
           <img 
            src={logo} 
            alt="Nuvemite Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
           />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.path.startsWith('#') ? (
                  <a 
                    href={link.path}
                    className={`flex items-center text-[15px] font-bold tracking-tight transition-colors duration-300 hover:text-cyan-500 ${linkColorClass}`}
                  >
                    {link.name}
                  </a>
              ) : (
                  <Link 
                    to={link.path}
                    className={`flex items-center text-[15px] font-bold tracking-tight transition-colors duration-300 hover:text-cyan-500 ${linkColorClass}`}
                  >
                    {link.name}
                  </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA BUTTON ("Get Started") */}
        <div className="hidden md:block">
          <Link 
            to="/contact"
            className={`inline-block transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-cyan-500' // Blue rect, white words
                : 'bg-white text-blue-600 hover:bg-slate-100' // White rect, blue words
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden ml-auto">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${linkColorClass} focus:outline-none`}
          >
            {mobileMenuOpen ? <X className="w-8 h-8 text-slate-800" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
    </nav>


      {/* MOBILE MENU OVERLAY - Moved outside nav to avoid clipping by backdrop-filter */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] md:hidden bg-slate-900/95 backdrop-blur-lg flex flex-col"
          >
            {/* Header with Logo and Close Button */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-slate-800/50 bg-slate-900 shadow-sm">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                    <img src={logo} alt="Nuvemite" className="h-8 w-auto transition-all duration-300" />
                </Link>
                <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-slate-800/50 rounded-full text-slate-400 hover:text-white transition-colors border border-slate-700/50"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Links Container */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                 <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                 >
                    {link.path.startsWith('#') ? (
                       <a 
                         href={link.path}
                         onClick={() => setMobileMenuOpen(false)}
                         className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all group"
                       >
                         <span className="flex items-center gap-4 font-semibold text-lg">
                            <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                                {link.name === 'Products' && <Package className="w-5 h-5 text-blue-400" />}
                                {link.name === 'Services' && <Zap className="w-5 h-5 text-purple-400" />}
                                {link.name === 'About' && <Info className="w-5 h-5 text-cyan-400" />}
                            </div>
                            {link.name}
                         </span>
                         <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                       </a>
                    ) : (
                       <Link 
                         to={link.path} 
                         onClick={() => setMobileMenuOpen(false)}
                         className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all group"
                       >
                         <span className="flex items-center gap-4 font-semibold text-lg">
                            <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                                {link.name === 'Products' && <Package className="w-5 h-5 text-blue-400" />}
                                {link.name === 'Services' && <Zap className="w-5 h-5 text-purple-400" />}
                                {link.name === 'About' && <Info className="w-5 h-5 text-cyan-400" />}
                            </div>
                            {link.name}
                         </span>
                         <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                       </Link>
                    )}
                 </motion.div>
              ))}
            </div>

            {/* Footer / CTA - Solid BG */}
            <div className="relative z-10 p-6 border-t border-slate-800/50 bg-slate-900 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-[0.98]"
                >
                  Get Started
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
// Mobile menu update above, this chunk is just context or placeholder if needed.
// Actually I need to edit App.jsx efficiently.
// I will not edit App.jsx in this MULTI call for Navbar. I'll split it.
// Wait, I can't edit multiple files in one call. I must make a separates call for App.jsx.
// I will only edit Navbar here.
