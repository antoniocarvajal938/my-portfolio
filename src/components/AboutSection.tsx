import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Server, 
  Lightbulb, 
  Gamepad2, 
  Rocket 
} from 'lucide-react';

// --- FLIPCARD COMPONENT (Integrated for Preview Stability) ---
interface FlipCardProps {
  title: string;
  subtitle?: string;
  description: string;
  Icon: React.ElementType;
  techStack?: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  subtitle,
  description,
  Icon,
  techStack,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const variants: Variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      className="group h-[300px] w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} // Touch support
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 preserve-3d"
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
        variants={variants}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- FRONT SIDE --- */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 p-6 shadow-xl backdrop-blur-sm"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500/20 to-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-10 w-10 text-orange-500" />
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
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-orange-500 bg-zinc-950 p-6 text-center shadow-xl shadow-orange-500/10"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          <h4 className="mb-2 text-xl font-bold text-orange-400">
            {subtitle || title}
          </h4>
          
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            {description}
          </p>

          {/* Tech Stack Badges */}
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

// --- DATA DEFINITION ---
const PROFESSIONAL_CARDS = [
  {
    id: 1,
    title: "Frontend Architect",
    subtitle: "UI/UX & Performance",
    description: "Especialista en crear experiencias web fluidas y accesibles. Me enfoco en la arquitectura de componentes escalables y la optimización del Core Web Vitals.",
    Icon: Code,
    techStack: ["React", "Astro", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "Mobile Native",
    subtitle: "iOS & Android",
    description: "Llevando la experiencia web al bolsillo. Desarrollo de aplicaciones nativas con un código base unificado sin sacrificar rendimiento.",
    Icon: Smartphone,
    techStack: ["React Native", "Expo", "SwiftUI Basics"]
  },
  {
    id: 3,
    title: "Backend Integration",
    subtitle: "API & Serverless",
    description: "Diseño de APIs RESTful y soluciones Serverless que conectan el frontend con datos robustos y seguros.",
    Icon: Server,
    techStack: ["Node.js", "Firebase", "Supabase", "SQL"]
  }
];

const PERSONAL_CARDS = [
  {
    id: 4,
    title: "Problem Solver",
    subtitle: "Pensamiento Analítico",
    description: "Más allá del código, disfruto desglosando problemas complejos en soluciones lógicas y eficientes. El ajedrez y la lógica son mis gimnasios mentales.",
    Icon: Lightbulb,
    techStack: ["Lógica", "Estrategia"]
  },
  {
    id: 5,
    title: "Gamer & Tech",
    subtitle: "Curiosidad Digital",
    description: "El gaming me inspira en diseño de interfaces inmersivas y gamificación. Entiendo la importancia del feedback visual instantáneo.",
    Icon: Gamepad2,
    techStack: ["UX Inmersivo", "Feedback"]
  },
  {
    id: 6,
    title: "Aprendizaje Continuo",
    subtitle: "Kaizen Developer",
    description: "La tecnología no se detiene, y yo tampoco. Dedico tiempo semanal a explorar nuevas documentaciones, patrones de diseño y tendencias.",
    Icon: Rocket,
    techStack: ["Self-Taught", "Adaptabilidad"]
  }
];

// --- ANIMATION VARIANTS ---
// Explicitly typing these as 'Variants' solves the inference issue with "easeOut" string.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 text-white min-h-screen" id="about">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-500/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Sobre <span className="text-orange-500">Mí</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-orange-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Soy un desarrollador apasionado que combina la <span className="text-orange-200">lógica técnica</span> con la <span className="text-orange-200">creatividad visual</span>. 
            Aquí puedes ver mis dos facetas: la profesional y la personal. Gira las tarjetas para descubrir más.
          </p>
        </motion.div>

        {/* --- PROFESSIONAL GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-orange-500">01.</span> El Profesional
            </h3>
            <div className="h-[1px] flex-1 bg-gray-800" />
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROFESSIONAL_CARDS.map((card) => (
              <motion.div key={card.id} variants={itemVariants}>
                <FlipCard
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  Icon={card.Icon}
                  techStack={card.techStack}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- PERSONAL GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-orange-500">02.</span> La Persona
            </h3>
            <div className="h-[1px] flex-1 bg-gray-800" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PERSONAL_CARDS.map((card) => (
              <motion.div key={card.id} variants={itemVariants}>
                <FlipCard
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  Icon={card.Icon}
                  techStack={card.techStack}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;