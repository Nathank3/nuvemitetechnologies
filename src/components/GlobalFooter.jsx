import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const GlobalFooter = () => {
    return (
        <footer className="relative bg-white text-slate-600">


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
                                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                                <li>
                                    <a href="/#partners" className="hover:text-blue-600 transition-colors">Clients</a>
                                </li>
                                <li><span className="text-slate-400 cursor-not-allowed">Careers</span></li>
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
