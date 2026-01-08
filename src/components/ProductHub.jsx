import React from 'react';
import { motion } from 'framer-motion';

const ProductHub = ({ centerIcon: CenterIcon, satellites, colorTheme }) => {
  // Radius for satellites
  const radius = 160;
  const center = 250; // Half of 500x500 container

  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center select-none">
      
      {/* Connecting Lines & Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        {satellites.map((_, index) => {
          const angle = (index * 360) / satellites.length;
          const radian = (angle * Math.PI) / 180;
          
          const x = center + radius * Math.cos(radian);
          const y = center + radius * Math.sin(radian);

          return (
            <g key={index}>
              {/* Static Line */}
              <motion.line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />

              {/* Moving Particle (Center to Satellite) */}
              <motion.circle
                r="3"
                fill="currentColor"
                className={colorTheme} 
              >
                <animateMotion
                  dur={`${2 + Math.random()}s`}
                  repeatCount="indefinite"
                  path={`M${center},${center} L${x},${y}`}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </motion.circle>

               {/* Moving Particle (Satellite to Center) */}
               <motion.circle
                r="2"
                opacity="0.6"
                fill="currentColor"
                className={colorTheme}
              >
                <animateMotion
                  dur={`${3 + Math.random()}s`}
                  repeatCount="indefinite"
                  path={`M${x},${y} L${center},${center}`}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>

      {/* Center Node */}
      <motion.div
        className={`relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-slate-900 border-2 border-white/10 flex items-center justify-center shadow-2xl ${colorTheme}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pulsing Shadow/Glow */}
        <motion.div
          className={`absolute inset-0 rounded-3xl opacity-20 bg-current`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Icon */}
        <CenterIcon size={48} className="text-white relative z-20" />
      </motion.div>

      {/* Satellite Nodes */}
      {satellites.map((sat, index) => {
        const angle = (index * 360) / satellites.length;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center justify-center gap-2"
            style={{ 
              x: x, 
              y: y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Node Circle */}
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group`}>
                <div className={`w-2 h-2 rounded-full bg-current opacity-80 group-hover:animate-ping ${colorTheme}`} />
            </div>
            
            {/* Label */}
            <span className="text-xs md:text-sm font-medium text-slate-300 bg-slate-900/50 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5 whitespace-nowrap">
              {sat}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductHub;
