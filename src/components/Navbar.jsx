import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png'; // Ensure logo.png exists in src/assets

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll handler for sticky effect and styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic: White when transparent (top), Deep Blue when scrolled/glassy
  const textColorClass = isScrolled ? 'text-[#005A98]' : 'text-white';
  const logoFilter = isScrolled ? 'none' : 'brightness(0) invert(1)'; // White logo at top, original when scrolled
  
  // Actually, wait. The user logo has blue/cyan colors.
  // If we force white filter at top, we lose the brand colors.
  // Reference site imaralims uses white text at top.
  // The logo:
  // Option A: Keep logo original always. (Might clash with dark background if hero is dark? But we don't control hero)
  // Option B: White filter at top.
  // Let's stick to original logo for brand recognition unless user specified white logo.
  // I will use `filter: brightness(0) invert(1)` ONLY if it matches the "White text" aesthetic requested for top state.
  // But Nuvemite logo has a complex gradient.
  // I will leave the logo natural for now. If it needs to be white, I'd need a white version.
  // I won't apply filter to logo, just text.

  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'Products', 
      href: '#', 
      dropdown: [
        { name: 'Imara LIMS', href: '#' },
        { name: 'Imara School', href: '#' },
        { name: 'Imara ERPNext', href: '#' },
        { name: 'Medick', href: '#' },
        { name: 'Kmacho Data Collection', href: '#' },
      ]
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Software Development', href: '#' },
        { name: 'System Integration', href: '#' },
        { name: 'Consultancy', href: '#' },
        { name: 'Digital Marketing', href: '#' },
      ]
    },
    { 
      name: 'Company', 
      href: '#',
      dropdown: [
        { name: 'About', href: '#' },
        { name: 'Clients', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
          : 'bg-transparent py-5' // Larger padding at top like reference
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
           {/* Placeholder for logo - using img tag */}
           <img 
            src={logo} 
            alt="Nuvemite Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
           />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href}
                className={`flex items-center text-[15px] font-bold tracking-tight transition-colors duration-300 hover:text-nuvemite-cyan ${textColorClass}`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </a>

              {/* DROPDOWN MENU */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-nuvemite-blue transition-colors"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a 
            href="#consultation" 
            className={`transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-nuvemite-blue text-white hover:bg-nuvemite-cyan' 
                : 'bg-white text-[#005A98] hover:bg-slate-100'
            }`}
          >
            Get a Consultation
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${textColorClass} focus:outline-none`}
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
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <div className="font-bold text-slate-800 text-lg">{link.name}</div>
                      <div className="pl-4 border-l-2 border-slate-100 space-y-2">
                        {link.dropdown.map(item => (
                          <a 
                            key={item.name} 
                            href={item.href} 
                            className="block text-slate-600 py-1 hover:text-nuvemite-blue"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={link.href} 
                      className="block font-bold text-slate-800 text-lg hover:text-nuvemite-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a 
                  href="#consultation" 
                  className="block w-full text-center bg-nuvemite-blue text-white py-3 rounded-full font-bold shadow-md active:bg-nuvemite-cyan"
                >
                  Get a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
