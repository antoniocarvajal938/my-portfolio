import type { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number): Variants => {
  const distance = 40;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };

  return variants;
};
