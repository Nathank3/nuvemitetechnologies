import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const GlobalFooter = () => {
    return (
        <footer className="relative bg-white text-slate-600">
            {/* 1. Pre-Footer CTA with Curved Top */}
            <div className="relative bg-white pt-20">
                 <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
                        <path d="M985.66,92.83C906.67,72,823.78,31,432.84,2c-47.52-3.53-173.6-4.51-344.29,6.24C36.4,9.39,0,13.75,0,13.75V120H1200V13.75C1200,13.75,1102.6,128.8,985.66,92.83Z" className="fill-white"></path>
                    </svg>
                 </div>
                 
                 {/* The Blue CTA Band */}
                 <div className="bg-white pb-16 relative z-10">
                     <div className="container mx-auto px-4">
                         <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-slate-800 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden">
                             {/* Background accent */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                             
                             <div className="relative z-10 text-center md:text-left">
                                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Your Digital Future.</h2>
                                 <p className="text-blue-100/80 text-lg max-w-lg">
                                     Join leading organizations that trust Nuvemite for scalable, innovative software solutions.
                                 </p>
                             </div>
                             
                             <div className="relative z-10 shrink-0">
                                 <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 group">
                                     Start a Project
                                     <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>

            {/* 2. Main Footer Layout (4 Columns) */}
            <div className="bg-white pt-16 pb-12 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        
                        {/* Col 1: Identity */}
                        <div className="space-y-6">
                            <Link to="/" className="block">
                                <img src={logo} alt="Nuvemite" className="h-10 w-auto" />
                            </Link>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                A global leader in providing timely, sustainable, and innovative software solutions designed to empower businesses and communities.
                            </p>
                        </div>

                        {/* Col 2: Products */}
                        <div>
                            <h3 className="text-[#0A192F] font-bold text-lg mb-6">Ecosystem</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Imara LIMS</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Imara School</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Imara ERPNext</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Medick</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Kmacho Data</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Inventory</a></li>
                            </ul>
                        </div>

                        {/* Col 3: Company */}
                        <div>
                            <h3 className="text-[#0A192F] font-bold text-lg mb-6">Company</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Clients</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        {/* Col 4: Contact */}
                        <div>
                            <h3 className="text-[#0A192F] font-bold text-lg mb-6">Get in Touch</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-slate-600">+254 712 984 364</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-slate-600">info@nuvemite.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed text-slate-600">Jenald Plaza, 1st Floor,<br/>Ruiru, Kenya</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="bg-white border-t border-slate-100 py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Nuvemite Technologies. All Rights Reserved.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <SocialIcon Icon={Linkedin} href="#" />
                        <SocialIcon Icon={Twitter} href="#" />
                        <SocialIcon Icon={Facebook} href="#" />
                        <SocialIcon Icon={Instagram} href="#" />
                        <SocialIcon Icon={Youtube} href="#" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ Icon, href }) => (
    <a 
        href={href} 
        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0A192F] hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        <Icon size={18} />
    </a>
);

export default GlobalFooter;
