import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Users, Lightbulb, Target, Activity, Heart, Award, CheckCircle, Linkedin } from 'lucide-react';
import heroOffice from '../assets/hero-office.png';

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
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
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
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white"
                >
                    Innovating for Humanity.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-300 font-light"
                >
                    We don't just talk about systems; we live and breathe systems.
                </motion.p>
            </div>
        </section>
    );
};

const NorthStarSection = () => {
    return (
        <section className="relative py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Sticky Left Column */}
                    <div className="relative h-[60vh] lg:h-auto lg:sticky lg:top-32 self-start rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                            src={heroOffice} 
                            alt="Office Vision" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0A192F]/20 mix-blend-multiply" />
                    </div>

                    {/* Scrolling Right Column */}
                    <div className="space-y-20 py-8">
                        <ContentBlock 
                            title="The Vision"
                            text="A global leader in information technology delivering practical and viable innovations."
                        />
                        <ContentBlock 
                            title="The Mission"
                            text="To provide timely, innovative, and sustainable IT solutions among global citizens."
                        />
                         <div className="h-20" /> {/* Spacer */}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContentBlock = ({ title, text }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="pl-8 border-l-4 border-blue-600"
        >
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">{title}</h3>
            <p className="text-3xl md:text-4xl font-bold leading-tight text-[#0A192F]">
                {text}
            </p>
        </motion.div>
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

import colmanImg from '../assets/colman-mwakio.png';
import davidImg from '../assets/david-kimari.png';
import maryImg from '../assets/mary-namunyak.png';
import danielImg from '../assets/daniel-nyagah.png';

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
