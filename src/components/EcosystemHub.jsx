import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ecosystemData, getThemeColors } from '../data/ecosystemData';

const EcosystemHub = ({ productKey }) => {
  const data = ecosystemData[productKey] || ecosystemData['lims'];
  const colors = getThemeColors(data.theme);
  const Icon = data.icon;
  const features = data.features;

  // Responsive layout logic
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Constants for layout - Tighter radius on mobile
  const CENTER_SIZE = isMobile ? 120 : 160; 
  const RADIUS_X = isMobile ? 180 : 300; 
  const RADIUS_Y = isMobile ? 140 : 220; 
  
  // Calculate node positions
  const nodes = useMemo(() => {
    return features.map((feature, i) => {
      const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2; // Start from top (-90deg)
      const x = Math.cos(angle) * RADIUS_X;
      const y = Math.sin(angle) * RADIUS_Y;
      return { x, y, feature, angle };
    });
  }, [features, RADIUS_X, RADIUS_Y]);

    return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
      
      {/* 1. Connections (Highways) & Particles */}
      {/* 
         Using a fixed viewBox ensures that the coordinate system for lines and particles 
         is identical and predictable, preventing "misplaced" particles. 
         The SVG scales responsively while preserving internal alignment.
      */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="20" refY="3" orient="auto" markerUnits="strokeWidth">
             <path d="M0,0 L0,6 L9,3 z" fill={colors.stroke} opacity="0.4" />
            </marker>
        </defs>
        {nodes.map((node, i) => {
            // Calculate absolute coordinates based on fixed viewBox center (400, 300)
            const centerX = 400;
            const centerY = 300;
            const targetX = centerX + node.x;
            const targetY = centerY + node.y;

            return (
                <g key={i}>
                     {/* The Line */}
                     <line 
                        x1={centerX} 
                        y1={centerY} 
                        x2={targetX} 
                        y2={targetY} 
                        stroke={colors.stroke} 
                        strokeWidth="2" 
                        strokeOpacity="0.15" 
                        strokeDasharray="6 6"
                     />
                     
                     {/* The Particle Traffic (Core -> Satellite -> Core) */}
                     {/* 
                        Now using exact viewBox coordinates for cx/cy animation. 
                        This ensures the particle travels EXACTLY on the line.
                     */}
                     <motion.circle 
                        r="4"
                        fill={colors.stroke}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            cx: [centerX, targetX, centerX],
                            cy: [centerY, targetY, centerY],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + i * 0.2, // Slightly faster variation
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15,
                            times: [0, 0.5, 1]
                        }}
                     />
                </g>
            );
        })}
      </svg>

      {/* 2. The Core (Center) */}
      <motion.div
        className={`relative z-20 flex flex-col items-center justify-center p-4 rounded-3xl shadow-2xl ${colors.shadow} border-2 ${colors.border}`}
        // Solid background to hide lines behind it ("Solid so words are well seen")
        style={{ 
            width: CENTER_SIZE, 
            height: CENTER_SIZE * 0.8,
            backgroundColor: '#0f172a' // slate-900 (Solid, matches theme background)
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`p-3 rounded-full bg-white/10 mb-1 ${colors.text}`}>
            <Icon size={isMobile ? 24 : 28} />
        </div>
        <h3 className={`text-white font-bold text-center leading-tight ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {data.name}
        </h3>
        {/* Glow behind Core */}
         <div className={`absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-20 ${colors.bg}`} />
      </motion.div>

      {/* 3. The Satellites (Features) */}
      {nodes.map((node, i) => (
        <motion.div
            key={i}
            className={`absolute z-10 px-4 py-2 rounded-full border flex items-center gap-2 whitespace-nowrap shadow-lg
                        bg-slate-900 ${colors.border} ${colors.text}`} // Solid bg-slate-900 for legibility
            style={{ 
                x: node.x, 
                y: node.y 
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
        >
            <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
            <span className="text-xs font-semibold text-white tracking-wide">{node.feature}</span>
        </motion.div>
      ))}

    </div>
  );
};

export default EcosystemHub;
