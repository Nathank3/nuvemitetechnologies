import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Users, Lightbulb, Target, Activity, Heart, Award, CheckCircle, Linkedin } from 'lucide-react';
import heroOffice from '../assets/hero-office.png';
import colmanImg from '../assets/colman-mwakio.png';
import davidImg from '../assets/david-kimari.png';
import maryImg from '../assets/mary-namunyak.png';
import danielImg from '../assets/daniel-nyagah.png';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-[#0A192F] overflow-x-hidden">
            {/* SECTION 1: THE MANIFESTO */}
            <ManifestoSection />

            {/* SECTION 2: THE NORTH STAR */}
            <NorthStarSection />

            {/* SECTION 3: THE DNA (Core Values) */}
            <CoreValuesSection />

            {/* SECTION 4: THE LEADERSHIP */}
            <LeadershipSection />


        </div>
    );
};

// --- SUB-COMPONENTS ---

const ManifestoSection = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)]" />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        Innovating for <br />
                        Humanity.
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        We don't just talk about systems; we live and breathe systems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const NorthStarSection = () => {
    const [activeTab, setActiveTab] = React.useState('mission');

    return (
        <section className="relative py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div className="space-y-8 py-4 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                             <h2 className="text-4xl font-bold text-[#0A192F] mb-6">Who We Are</h2>
                             <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Nuvemite is a global leader in providing timely, sustainable and innovative software solutions to corporates, governments and non-government organisations.
                                At Nuvemite Technologies, we don’t just talk about systems; we live and breathe systems.
                             </p>

                             {/* Tabs */}
                             <div className="flex gap-6 border-b border-slate-200 mb-8">
                                {['mission', 'vision'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 text-sm font-bold uppercase tracking-widest transition-all relative ${
                                            activeTab === tab 
                                            ? 'text-nuvemite-cyan' 
                                            : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div 
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-1 bg-nuvemite-cyan rounded-t-md"
                                            />
                                        )}
                                    </button>
                                ))}
                             </div>

                             {/* Tab Content */}
                             <div className="min-h-[150px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeTab === 'mission' ? (
                                            <div>
                                                 <h3 className="hidden">The Mission</h3> {/* Accessible but hidden if design implies tab handles title */}
                                                 <p className="text-lg md:text-xl font-medium leading-relaxed text-[#0A192F]">
                                                    To provide timely, innovative, and sustainable IT solutions among global citizens.
                                                 </p>
                                            </div>
                                        ) : (
                                            <div>
                                                 <h3 className="hidden">The Vision</h3>
                                                 <p className="text-lg md:text-xl font-medium leading-relaxed text-[#0A192F]">
                                                    A global leader in information technology delivering practical and viable innovations.
                                                 </p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                             </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative h-[50vh] lg:h-auto self-stretch rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <img 
                            src={heroOffice} 
                            alt="Office Vision" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0A192F]/20 mix-blend-multiply" />
                    </div>

                </div>
            </div>
        </section>
    );
};

const CoreValuesSection = () => {
    const values = [
        { name: 'Quality', icon: Award, desc: 'Excellence is not an act, but a habit.' },
        { name: 'Customer Satisfaction', icon: Heart, desc: 'We put our clients at the heart of everything.' },
        { name: 'Dependability', icon: Shield, desc: 'Reliable systems you can count on 24/7.' },
        { name: 'Trustworthiness', icon: CheckCircle, desc: 'Building relationships through transparency.' },
        { name: 'Integrity', icon: Users, desc: 'Doing the right thing, even when no one is watching.' },
        { name: 'Innovation', icon: Lightbulb, desc: 'Constantly pushing the boundaries of what is possible.' },
        { name: 'Practical Solutions', icon: Target, desc: 'Solving real-world problems with pragmatic tech.' },
        { name: 'Participatory', icon: Activity, desc: 'Engaging stakeholders at every step.' },
    ];

    return (
        <section className="py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0A192F]">Our DNA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, idx) => (
                        <ValueCard key={idx} value={value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ValueCard = ({ value }) => {
    return (
        <div className="group relative h-64 bg-white rounded-2xl shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.2)] transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-100 flex flex-col items-center justify-center p-6 text-center">
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <value.icon className="w-8 h-8" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{value.name}</h3>
                <p className="text-slate-600 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 delay-75">
                    {value.desc}
                </p>
            </div>
        </div>
    );
};

const LeadershipSection = () => {
    const leaders = [
        { name: 'Colman Mwakio', role: 'CEO & Founder', image: colmanImg },
        { name: 'David Kimari', role: 'CTO', image: davidImg },
        { name: 'Mary Namunyak', role: 'CFO', image: maryImg },
        { name: 'Daniel Nyagah', role: 'Senior Developer', image: danielImg },
    ];

    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-[#0A192F]">The Minds Behind the Code</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {leaders.map((leader, idx) => (
                        <div key={idx} className="group relative w-full h-[450px] bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Glassmorphic Bio Card */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-xl font-bold text-[#0A192F]">{leader.name}</h4>
                                <p className="text-blue-600 text-sm font-medium mb-3">{leader.role}</p>
                                <div className="flex justify-end">
                                    <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-600 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default AboutPage;
