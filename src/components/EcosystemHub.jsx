import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ecosystemData, getThemeColors } from '../data/ecosystemData';

// 1. Helper to determine variant based on name
const getVariant = (variant, name) => {
  if (variant) return variant.toUpperCase();
  if (!name) return 'MOLECULE';
  const n = name.toLowerCase();
  if (n.includes('lims') || n.includes('hospital')) return 'MOLECULE';
  if (n.includes('school') || n.includes('accounting')) return 'ORBIT';
  if (n.includes('property') || n.includes('inventory')) return 'BLUEPRINT';
  if (n.includes('kmacho') || n.includes('logistics')) return 'RADAR';
  return 'MOLECULE'; // Default
};

const EcosystemHub = ({ productKey }) => {
  const data = ecosystemData[productKey] || ecosystemData['lims'];
  const colors = getThemeColors(data.theme);
  const Icon = data.icon;
  const features = data.features;
  const variant = getVariant(data.variant, data.name);

  // Responsive layout
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // -- LAYOUT CONFIGURATION --
  const VIEWBOX_W = 800;
  const VIEWBOX_H = 500;
  const CX = VIEWBOX_W / 2;
  const CY = VIEWBOX_H / 2;

  // Radius handling
  const getRadius = () => {
      switch (variant) {
          case 'ORBIT': return { x: isMobile ? 100 : 200, y: isMobile ? 100 : 200 };
          case 'BLUEPRINT': return { x: isMobile ? 110 : 280, y: isMobile ? 100 : 200 };
          case 'RADAR': return { x: isMobile ? 110 : 260, y: isMobile ? 100 : 180 };
          default: return { x: isMobile ? 110 : 250, y: isMobile ? 100 : 180 };
      }
  };
  const { x: RADIUS_X, y: RADIUS_Y } = getRadius();
  const CENTER_SIZE = isMobile ? 90 : 130;


  // -- NODE POSITIONS --
  const nodes = useMemo(() => {
      return features.map((feature, i) => {
          const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2;
      return {
          x: Math.cos(angle) * RADIUS_X,
          y: Math.sin(angle) * RADIUS_Y,
          feature,
          angle,
          i,
          randomDuration: 3 + Math.random() // Unique duration for each node
      };
    });
  }, [features, RADIUS_X, RADIUS_Y]);


  // -- VARIANT SPECIFIC LOGIC --
  const getPath = (node) => {
      const tx = CX + node.x;
      const ty = CY + node.y;
      
      switch (variant) {
          case 'MOLECULE':
              // Angled/Organic: Center -> Knee -> Node
              const midX = (CX + tx) / 2;
              return `M ${CX} ${CY} L ${midX} ${ty} L ${tx} ${ty}`;
          case 'BLUEPRINT':
              // Stepped: Horizontal then Vertical
              return `M ${CX} ${CY} L ${tx} ${CY} L ${tx} ${ty}`;
          case 'RADAR':
              // Curved
              const cpX = CX + (node.x * 0.5); 
              return `M ${CX} ${CY} Q ${cpX} ${ty} ${tx} ${ty}`;
          default:
              return '';
      }
  };

  // Node Animation configs
  const nodeAnim = variant === 'MOLECULE' 
      ? { y: [0, -8, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }
      : (variant === 'RADAR' 
          ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 3 } } 
          : {});

  return (
    <div 
        key={productKey} // Strict Re-render
        className="relative w-full h-[500px] flex items-center justify-center overflow-visible"
    >
      
      {/* 1. BACKGROUNDS */}
      {variant === 'ORBIT' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <motion.div 
                className={`rounded-full border border-dashed ${colors.border} opacity-30`} 
                style={{ width: RADIUS_X * 1.5, height: RADIUS_Y * 1.5 }} 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             />
             <motion.div 
                className={`absolute rounded-full border ${colors.border} opacity-20`} 
                style={{ width: RADIUS_X * 2.2, height: RADIUS_Y * 2.2 }} 
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
             />
          </div>
      )}

      {variant === 'RADAR' && (
           <motion.div 
            className={`absolute rounded-full border border-dashed ${colors.border} opacity-20`}
            style={{ width: Math.max(RADIUS_X, RADIUS_Y)*2.4, height: Math.max(RADIUS_X, RADIUS_Y)*2.4 }}
          >
             <motion.div 
                className={`w-full h-full rounded-full bg-gradient-to-r from-transparent via-${data.theme}-500/10 to-transparent`}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
          </motion.div>
      )}

      {/* 2. SVG PATHS (Non-Orbit) */}
      {variant !== 'ORBIT' && (
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <marker id={`arrow-${variant}`} markerWidth="10" markerHeight="10" refX="20" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill={colors.stroke} opacity="0.4" />
                </marker>
            </defs>
            {nodes.map((node, i) => {
                const d = getPath(node);
                return (
                    <g key={i}>
                        <path 
                            d={d}
                            stroke={colors.stroke}
                            strokeWidth={variant === 'BLUEPRINT' ? 1.5 : 2}
                            strokeOpacity={0.2}
                            strokeDasharray={variant === 'BLUEPRINT' ? "4 4" : "0"}
                            fill="none"
                        />
                        <motion.circle 
                            r={3} 
                            fill={colors.stroke}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                        >
                            <animateMotion 
                                dur={`${node.randomDuration}s`}
                                repeatCount="indefinite"
                                path={d}
                            />
                        </motion.circle>
                    </g>
                )
            })}
        </svg>
      )}

      {/* 3. CORE */}
      <motion.div
        className={`relative z-20 flex flex-col items-center justify-center p-4 rounded-3xl shadow-2xl ${colors.shadow} border-2 ${colors.border} bg-white`}
        style={{ width: CENTER_SIZE, height: CENTER_SIZE * 0.8 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
         <Icon size={isMobile ? 24 : 28} className={`mb-1 ${colors.text}`} />
         <span className={`font-bold text-center leading-tight ${isMobile ? 'text-[10px]' : 'text-xs'} text-slate-800`}>
            {data.name}
         </span>
         <div className={`absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-20 ${colors.bg}`} />
      </motion.div>

      {/* 4. SATELLITES */}
      {/* ORBIT: Rotates entire container */}
      {variant === 'ORBIT' ? (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
              {nodes.map((node, i) => (
                  <div 
                    key={i} 
                    className="absolute flex items-center justify-center"
                    style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                  >
                      <motion.div 
                        className={`px-3 py-1.5 rounded-full border bg-white shadow-md ${colors.border} ${colors.text} flex items-center gap-2`}
                        // Counter-rotate to keep text upright
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                          <span className="text-[10px] font-semibold text-slate-700 whitespace-nowrap">{node.feature}</span>
                      </motion.div>
                  </div>
              ))}
          </motion.div>
      ) : (
          /* OTHERS: Static placement + individual animations */
          nodes.map((node, i) => (
              <motion.div
                key={i}
                className={`absolute z-10 px-3 py-1.5 rounded-full border bg-white shadow-md ${colors.border} ${colors.text} flex items-center gap-2`}
                style={{ 
                    left: '50%', top: '50%', 
                    marginLeft: node.x, marginTop: node.y, 
                    transform: 'translate(-50%, -50%)' 
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, ...nodeAnim }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                  <span className="text-[10px] font-semibold text-slate-700 whitespace-nowrap">{node.feature}</span>
              </motion.div>
          ))
      )}

    </div>
  );
};

export default EcosystemHub;