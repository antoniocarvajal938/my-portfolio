import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

// Interface defining the structure of the card props
interface FlipCardProps {
  title: string;
  subtitle?: string; // Optional subtitle for the back
  description: string;
  Icon: IconType;
  techStack?: string[]; // Optional array to list specific sub-techs (e.g., "Redux", "Jest")
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  subtitle,
  description,
  Icon,
  techStack,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation variants for the card rotation
  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  /**
   * Handles the flip interaction.
   * We use generic div interaction instead of specific hover to support touch devices better if needed.
   */
  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="group h-[300px] w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 preserve-3d"
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
        variants={variants}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm backface-hidden group-hover:border-orange-500/50">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500/20 to-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Icon className="text-5xl text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold tracking-wider text-white">
            {title}
          </h3>
          <div className="mt-4 h-1 w-12 rounded-full bg-orange-500" />
          <p className="mt-4 text-sm font-light text-gray-400">
            Hover to reveal
          </p>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-orange-500 bg-zinc-950 p-6 text-center shadow-xl shadow-orange-500/10 backface-hidden [transform:rotateY(180deg)]">
          <h4 className="mb-2 text-xl font-bold text-orange-400">
            {subtitle || title}
          </h4>
          
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            {description}
          </p>

          {/* Optional Tech Stack Badges */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300 border border-orange-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;