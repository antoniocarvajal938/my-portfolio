// src/components/GridBackground.tsx
import { motion } from 'framer-motion';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-black to-black" />
      
      {/* Grid horizontal y vertical - MÁS VISIBLE */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 115, 22, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Puntos de intersección brillantes */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Spotlight naranja sutil superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl" />
      
      {/* Spotlight inferior izquierda */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
    </div>
  );
};

export default GridBackground;