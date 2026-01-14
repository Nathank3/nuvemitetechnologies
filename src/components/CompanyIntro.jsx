import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CountUp = ({ to, duration = 2, suffix = "" }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = animate(0, to, {
            duration: duration,
            onUpdate(value) {
                node.textContent = Math.floor(value) + suffix;
            }
        });

        return () => controls.stop();
    }, [isInView, to, duration, suffix]);

    return <span ref={nodeRef} />;
};

const CompanyIntro = () => {
  const containerRef = useRef(null);
  
  // -- Parallax Logic for Glass Stack --
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(y, [-1, 1], [10, -10]); 
  const rotateY = useTransform(x, [-1, 1], [-10, 10]);
  
  const layer1X = useTransform(x, [-1, 1], [-10, 10]);
  const layer1Y = useTransform(y, [-1, 1], [-10, 10]);
  
  const layer2X = useTransform(x, [-1, 1], [-20, 20]);
  const layer2Y = useTransform(y, [-1, 1], [-20, 20]);
  
  const layer3X = useTransform(x, [-1, 1], [-30, 30]);
  const layer3Y = useTransform(y, [-1, 1], [-30, 30]);


  // -- Scroll Animation for "Growing Line" --
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <section 
        ref={containerRef} 
        className="bg-[#F9FAFB] py-24 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: The Pitch */}
          <div className="w-full lg:w-1/2 relative">
             {/* The "Growing Line" Bridge */}
             <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 hidden lg:block -ml-8">
                <motion.div 
                    style={{ height: lineHeight }} 
                    className="w-full bg-nuvemite-cyan origin-top"
                />
             </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-nuvemite-blue text-xs font-bold tracking-wider mb-6">
                    WHO WE ARE
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                    More Than Code. <br/>
                    <span className="text-nuvemite-blue">We Build Legacies.</span>
                </h2>

                {/* Body Text */}
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    At Nuvemite, we don't just talk about systems; we live and breathe them. With over <strong className="text-slate-900">16 years of experience</strong>, we empower startups, governments, and enterprises with cutting-edge technology that stands the test of time.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 border-t border-slate-200 pt-8">
                    <div className="flex flex-col items-start">
                        <h4 className="text-3xl font-bold text-slate-900 leading-none mb-1">
                             <CountUp to={16} suffix="+" />
                        </h4>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Experience</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="text-3xl font-bold text-slate-900 leading-none mb-1">Global</h4>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Reach</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="text-3xl font-bold text-slate-900 leading-none mb-1">
                            <CountUp to={100} duration={2.5} suffix="%" />
                        </h4>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Client Satisfaction</p>
                    </div>
                </div>

                {/* CTA Link */}
                <a 
                    href="#about" 
                    className="group inline-flex items-center gap-2 font-bold text-slate-900 hover:text-nuvemite-blue transition-colors"
                >
                    <span>Read Our Story</span>
                    <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>
          </div>


          {/* Right Column: 3D Glass Stack */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
             <div 
                className="relative w-80 h-96 md:w-[400px] md:h-[500px] cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
             >
                {/* Back Layer */}
                <motion.div 
                    style={{ x: layer1X, y: layer1Y, rotateX, rotateY }}
                    className="absolute top-0 right-10 w-full h-full bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl opacity-60 z-10 origin-center"
                />

                {/* Middle Layer */}
                <motion.div 
                    style={{ x: layer2X, y: layer2Y, rotateX, rotateY }}
                    className="absolute top-8 right-5 w-full h-full bg-gradient-to-br from-blue-50/50 to-white/10 backdrop-blur-lg rounded-2xl border border-white/60 shadow-2xl opacity-80 z-20 origin-center flex flex-col p-6 overflow-hidden"
                >
                    {/* Abstract Grid / Charts UI */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                         <div className="bg-white/30 rounded-lg h-24 w-full" />
                         <div className="bg-white/30 rounded-lg h-24 w-full" />
                         <div className="col-span-2 bg-white/20 rounded-lg flex-1 mt-4" />
                    </div>
                </motion.div>

                {/* Front Layer (The Browser Dashboard) */}
                <motion.div 
                    style={{ x: layer3X, y: layer3Y, rotateX, rotateY }}
                    className="absolute top-16 right-0 w-full h-full bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-30 origin-center overflow-hidden flex flex-col"
                >
                     {/* Window Controls (Traffic Lights) */}
                     <div className="h-12 border-b border-white/20 flex items-center px-6 gap-2 bg-white/10">
                         {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((color, i) => (
                             <motion.div 
                                key={i}
                                className={`w-3 h-3 rounded-full ${color}`}
                                animate={{ scale: [1, 1.2, 1], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                             />
                         ))}
                     </div>

                     {/* Browser Interior (Skeleton UI) */}
                     <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-1/4 h-full border-r border-white/20 bg-white/10 flex flex-col gap-4 p-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-400/20 mb-4" />
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-full h-2 rounded-full bg-slate-400/20" />
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col p-6">
                             {/* Hero Block */}
                             <div className="w-full h-32 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-white/30 mb-6 flex items-center p-4">
                                 <div className="w-12 h-12 rounded-full bg-white/40 shadow-sm" />
                                 <div className="ml-4 space-y-2 flex-1">
                                     <div className="w-1/2 h-3 rounded bg-white/40" />
                                     <div className="w-3/4 h-2 rounded bg-white/30" />
                                 </div>
                             </div>

                             {/* Content Rows */}
                             <div className="space-y-4">
                                 <div className="flex justify-between">
                                     <div className="w-1/3 h-8 rounded bg-slate-200/30" />
                                     <div className="w-1/4 h-8 rounded bg-slate-200/30" />
                                 </div>
                                 <div className="w-full h-24 rounded-xl bg-slate-50/30 border border-white/20" />
                             </div>
                        </div>
                     </div>
                </motion.div>

                {/* Floating Badge (Refined) */}
                <motion.div 
                    style={{ x: layer3X, y: layer3Y, z: 100 }}
                    className="absolute -bottom-6 -left-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl z-40 border border-white/10 flex items-center gap-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                     <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none mb-1">Status</span>
                        <span className="font-bold text-sm leading-none">System Operational</span>
                     </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
