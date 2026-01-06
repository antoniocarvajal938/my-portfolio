// src/components/FlipCard.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon: Icon, title, subtitle, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="w-full h-72 cursor-pointer group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full text-center transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-md p-6 flex flex-col items-center justify-center shadow-lg group-hover:border-orange-500/50 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-orange-500/10 p-5 rounded-full mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
            <Icon className="text-4xl text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-orange-300 font-medium tracking-wide text-sm uppercase">{subtitle}</p>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border-2 border-orange-500 bg-gray-900/95 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-gray-200 text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;