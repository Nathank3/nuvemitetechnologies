import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  // Text color logic: White when transparent (top), Deep Blue when scrolled/glassy
  // Nuvemite Blue usually is #005A98 or similar.
  const linkColorClass = isScrolled ? 'text-[#005A98]' : 'text-white';
  
  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
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

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 pb-2 last:border-0">
                   {link.path.startsWith('#') ? (
                      <a 
                        href={link.path}
                        className="block font-bold text-slate-800 text-lg hover:text-blue-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                   ) : (
                      <Link 
                        to={link.path} 
                        className="block font-bold text-slate-800 text-lg hover:text-blue-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                   )}
                </div>
              ))}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-full font-bold shadow-md active:bg-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
// Mobile menu update above, this chunk is just context or placeholder if needed.
// Actually I need to edit App.jsx efficiently.
// I will not edit App.jsx in this MULTI call for Navbar. I'll split it.
// Wait, I can't edit multiple files in one call. I must make a separates call for App.jsx.
// I will only edit Navbar here.
