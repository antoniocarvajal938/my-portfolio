import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import { techCategories } from "./techData";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 leading-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-white">MY</span>{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          SKILLS
        </span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {techCategories.map((category, index) => (
          <SkillCategory
            key={category.title || index}
            category={category}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}