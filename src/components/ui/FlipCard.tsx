// src/components/FlipCard.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [canHover, setCanHover] = useState(false);

  // Detect real hover capability (Safari iOS safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setCanHover(supportsHover && !isTouchDevice);
  }, []);

  return (
    <div
      className="w-full h-72 cursor-pointer perspective-1000"
      onMouseEnter={() => canHover && setIsFlipped(true)}
      onMouseLeave={() => canHover && setIsFlipped(false)}
      onClick={() => !canHover && setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full transform-gpu will-change-transform"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-md p-6 flex flex-col items-center justify-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="bg-orange-500/10 p-5 rounded-full mb-6">
            <Icon className="text-4xl text-orange-500" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

          <p className="text-orange-300 font-medium tracking-wide text-sm uppercase">
            {subtitle}
          </p>

          <p className="mt-4 text-sm text-gray-400">
            {canHover ? "Hover to explore" : "Tap to explore"}
          </p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border-2 border-orange-500 bg-gray-900/95 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center"
          style={{
            transform: "rotateY(180deg)",
            WebkitTransform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
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
