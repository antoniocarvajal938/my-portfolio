import { motion, type Variants } from "framer-motion";
import EnhancedFlipCard from "../about/EnhancedFlipCard";
import { FaBug, FaHandshake, FaGamepad } from "react-icons/fa";
import { 
  SiCypress, SiPostman, SiKotlin, SiReact, 
  SiJira, SiGithub, SiTypescript
} from "react-icons/si";

const cardsData = [
  {
    icon: FaBug,
    title: "Dev Edge",
    subtitle: "Hybrid Profile",
    color: "orange" as const, // 🟠 Naranja principal
    description: "My background in Mobile & Web Development gives me a unique edge. I don't just find bugs; I understand the code behind them, making communication with developers seamless.",
    skills: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Cypress", icon: SiCypress },
    ],
    stats: { 
      mobile: "Android", 
      web: "React" 
    }
  },
  {
    icon: FaHandshake,
    title: "Teamwork",
    subtitle: "Soft Skills",
    color: "amber" as const, // 🟡 Naranja-amarillo (más claro)
    description: "I believe quality is a team effort. I strive for clear documentation, open communication, and a collaborative environment where we all aim for the same goal: excellence.",
    skills: [
      { name: "Agile/Scrum", icon: SiJira },
      { name: "Git/GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ],
    stats: { 
      methodology: "Agile", 
      collaboration: "High" 
    }
  },
  {
    icon: FaGamepad,
    title: "Offline",
    subtitle: "Personal Life",
    color: "deepOrange" as const, // 🔥 Naranja oscuro/rojo
    description: "When I'm not testing or coding, I'm probably lifting weights at the gym 🏋🏻, lost in a video game 🎮, or exploring new places. Balance is key to performance.",
    skills: [
      { name: "Fitness", emoji: "🏋🏻" },
      { name: "Gaming", emoji: "🎮" },
      { name: "Travel", emoji: "✈️" },
    ],
    stats: { 
      mindset: "Growth", 
      lifestyle: "Active" 
    }
  },
];

export default function BeyondTheCode() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      }
    },
  };

  return (
    <motion.div
      className="mt-32 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative Background - Solo naranjas */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beyond <span className="text-orange-500">The Code</span>
        </motion.h3>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          What makes me a valuable team member beyond technical skills
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cardsData.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <EnhancedFlipCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-sm">
          💡 Click on each card to discover more
        </p>
      </motion.div>
    </motion.div>
  );
}