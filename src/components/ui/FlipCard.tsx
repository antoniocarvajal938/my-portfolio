// src/components/ui/FlipCard.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

// Detección robusta de Safari (iOS y macOS)
function detectSafari(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  return isSafari;
}

// Detección de touch device
function detectTouch(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore - legacy IE
    navigator.msMaxTouchPoints > 0
  );
}

const FlipCard: React.FC<FlipCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const safari = detectSafari();
    const touch = detectTouch();
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    setIsSafari(safari);
    setIsTouch(touch);
    setCanHover(hover && !touch);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const dx = Math.abs(e.changedTouches[0].clientX - touchStartRef.current.x);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartRef.current.y);

    // Solo flip si fue un tap real (no scroll)
    if (dx < 10 && dy < 10) {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
    touchStartRef.current = null;
  };

  const handleClick = () => {
    if (!isTouch) {
      // Desktop non-hover (no debería llegar aquí normalmente)
      if (!canHover) setIsFlipped((prev) => !prev);
    }
  };

  // ─────────────────────────────────────────────
  // SAFARI: Usamos animación alternativa sin preserve-3d
  // porque Safari iOS rompe preserve-3d con backdrop-filter
  // y Framer Motion matrix transforms.
  // Técnica: cross-fade + scale en el eje X (simula flip 2D)
  // ─────────────────────────────────────────────
  if (isSafari && isTouch) {
    return (
      <div
        className="w-full h-72 cursor-pointer relative"
        style={{ WebkitTapHighlightColor: "transparent" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* FRONT - Safari iOS */}
        <AnimatePresence initial={false}>
          {!isFlipped && (
            <motion.div
              key="front"
              className="absolute inset-0 w-full h-full rounded-2xl border border-gray-800 bg-black/60 p-6 flex flex-col items-center justify-center shadow-lg"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="bg-orange-500/10 p-5 rounded-full mb-6">
                <Icon className="text-4xl text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-orange-300 font-medium tracking-wide text-sm uppercase">
                {subtitle}
              </p>
              <p className="mt-4 text-sm text-gray-400">Tap to explore</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BACK - Safari iOS */}
        <AnimatePresence initial={false}>
          {isFlipped && (
            <motion.div
              key="back"
              className="absolute inset-0 w-full h-full rounded-2xl border-2 border-orange-500 bg-gray-900/95 p-6 flex flex-col items-center justify-center text-center"
              style={{
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p className="text-gray-200 text-base leading-relaxed font-medium">
                {description}
              </p>
              <p className="mt-4 text-sm text-orange-400">Tap to go back</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // RESTO DE BROWSERS (Chrome mobile/desktop, Safari macOS con hover)
  // CSS 3D flip clásico, funciona perfectamente aquí
  // ─────────────────────────────────────────────
  return (
    <div
      className="w-full h-72 cursor-pointer"
      style={{
        perspective: "1000px",
        WebkitPerspective: "1000px",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseEnter={() => canHover && setIsFlipped(true)}
      onMouseLeave={() => canHover && setIsFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transformOrigin: "center center",
          WebkitTransformOrigin: "center center",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-gray-800 bg-black/60 p-6 flex flex-col items-center justify-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            // IMPORTANTE: No usar backdrop-blur aquí en el flip 3D.
            // backdrop-filter rompe preserve-3d en Safari macOS también.
            // Usamos un bg sólido con opacidad en su lugar.
            backgroundColor: "rgba(0, 0, 0, 0.75)",
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
          className="absolute inset-0 w-full h-full rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center justify-center text-center"
          style={{
            transform: "rotateY(180deg)",
            WebkitTransform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "rgba(17, 24, 39, 0.97)",
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