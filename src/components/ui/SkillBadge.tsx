import React from "react";

interface SkillBadgeProps {
  name: string;
  icon: React.ElementType;
  isPrimary: boolean;
}

export default function SkillBadge({ name, icon: Icon, isPrimary }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/30 transition-colors group cursor-default">
      <Icon
        className={`text-lg ${
          isPrimary
            ? "text-orange-400"
            : "text-gray-400 group-hover:text-orange-300"
        }`}
      />
      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}