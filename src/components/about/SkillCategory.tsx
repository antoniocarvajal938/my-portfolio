import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import type { TechCategory } from "./techData";

interface SkillCategoryProps {
  category: TechCategory;
  variants: any;
}

export default function SkillCategory({ category, variants }: SkillCategoryProps) {
  const isPrimary = category.priority === "primary";

  return (
    <motion.div
      variants={variants}
      className={`
        relative p-6 rounded-2xl border bg-black/40 backdrop-blur-sm
        ${
          isPrimary
            ? "border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
            : "border-gray-800 hover:border-orange-500/50"
        }
        transition-all duration-300 hover:-translate-y-1
      `}
    >
      {/* Category Title */}
      <h3
        className={`text-xl font-bold mb-6 flex items-center gap-2 ${
          isPrimary ? "text-orange-500" : "text-gray-200"
        }`}
      >
        {category.title}
        {isPrimary && (
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
        )}
      </h3>

      {/* Items Grid */}
      <div className="flex flex-wrap gap-3">
        {category.items.map((tech, i) => (
          <SkillBadge
            key={i}
            name={tech.name}
            icon={tech.icon}
            isPrimary={isPrimary}
          />
        ))}
      </div>
    </motion.div>
  );
}