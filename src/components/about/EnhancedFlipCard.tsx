import { useState } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon?: React.ElementType;
  emoji?: string;
}

interface EnhancedFlipCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: "orange" | "amber" | "deepOrange"; // 👈 Actualizado
  description: string;
  skills: Skill[];
  stats: Record<string, string | undefined>;
}

const colorStyles = {
  orange: {
    border: "border-orange-500/50",
    gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
    shadow: "shadow-orange-500/20",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    text: "text-orange-500",
    bg: "bg-orange-500",
  },
  amber: {
    border: "border-amber-500/50",
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
    shadow: "shadow-amber-500/20",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    text: "text-amber-500",
    bg: "bg-amber-500",
  },
  deepOrange: {
    border: "border-orange-600/50",
    gradient: "from-orange-600/20 via-red-600/10 to-transparent",
    shadow: "shadow-orange-600/20",
    glow: "shadow-[0_0_30px_rgba(234,88,12,0.3)]",
    text: "text-orange-600",
    bg: "bg-orange-600",
  },
};

export default function EnhancedFlipCard({
  icon: Icon,
  title,
  subtitle,
  color,
  description,
  skills,
  stats,
}: EnhancedFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const styles = colorStyles[color];

  // Función para obtener el color hex según el tipo
  const getColorHex = () => {
    switch(color) {
      case "orange": return "#f97316";
      case "amber": return "#f59e0b";
      case "deepOrange": return "#ea580c";
      default: return "#f97316";
    }
  };

  return (
    <div
      className="relative h-[400px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Animated Border Gradient */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${styles.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        animate={{
          background: isHovered
            ? [
                `linear-gradient(0deg, ${getColorHex()}20, transparent)`,
                `linear-gradient(360deg, ${getColorHex()}20, transparent)`,
              ]
            : undefined,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Card Container */}
      <motion.div
        className="relative w-full h-full [perspective:1000px]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl border-2 ${styles.border} 
            bg-gradient-to-br ${styles.gradient} backdrop-blur-xl
            [backface-visibility:hidden] overflow-hidden
            transition-all duration-300 ${isHovered ? styles.glow : styles.shadow}`}
        >
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 ${styles.bg} rounded-full opacity-20`}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
            {/* Animated Icon */}
            <motion.div
              className={`mb-6 ${styles.text}`}
              animate={isHovered ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Icon className="text-7xl drop-shadow-2xl" />
            </motion.div>

            {/* Title & Subtitle */}
            <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
            <p className={`text-sm ${styles.text} font-semibold mb-4`}>{subtitle}</p>

            {/* Description Preview */}
            <p className="text-gray-300 text-sm text-center leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Flip Indicator */}
            <motion.div
              className="mt-6 flex items-center gap-2 text-xs text-gray-500"
              animate={{ y: isHovered ? [0, -5, 0] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span>Click to explore</span>
              <span className="text-lg">↻</span>
            </motion.div>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl border-2 ${styles.border}
            bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl
            [backface-visibility:hidden] [transform:rotateY(180deg)]
            ${styles.shadow} overflow-hidden`}
        >
          <div className="p-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Icon className={`text-3xl ${styles.text}`} />
              <div>
                <h4 className="text-xl font-bold text-white">{title}</h4>
                <p className={`text-xs ${styles.text}`}>{subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {description}
            </p>

            {/* Skills/Technologies */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                Key Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full 
                      bg-white/5 border border-white/10 text-xs text-gray-300`}
                  >
                    {skill.icon && <skill.icon className={styles.text} />}
                    {skill.emoji && <span>{skill.emoji}</span>}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-auto grid grid-cols-2 gap-4">
              {Object.entries(stats)
                .filter(([, value]) => value !== undefined)
                .map(([key, value], i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg bg-gradient-to-br ${styles.gradient} border border-white/5`}
                  >
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="text-xs text-gray-400 capitalize">{key}</p>
                  </div>
                ))}
            </div>

            {/* Close hint */}
            <div className="mt-4 text-center text-xs text-gray-600">
              Click again to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}