import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/my-photo.jpg";

function Particle({ size, x, y, delay }: { size: number; x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-500 opacity-20"
      style={{
        width: size,
        height: size,
        top: `${y}%`,
        left: `${x}%`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, opacity: [0.2, 0.5, 0.2] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4 + Math.random() * 3,
        delay,
      }}
    />
  );
}

export default function Hero() {
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    size: 10 + Math.random() * 20,
    x: Math.random() * 100,
    y: Math.random() * 80,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-gray-900 text-white overflow-hidden">
      {/* Partículas de fondo */}
      {particles.map((p, i) => (
        <Particle key={i} size={p.size} x={p.x} y={p.y} delay={p.delay} />
      ))}

      {/* Lado izquierdo: texto */}
      <div className="flex flex-col items-start justify-center flex-1 mb-8 md:mb-0 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Hi there <span>👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-mono text-blue-400"
        >
          <Typewriter
            words={["Mobile App Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>
      </div>

      {/* Lado derecho: imagen */}
      <motion.div
        className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 -ml-32 md:-ml-48 z-10"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img
          src={myPhoto.src}
          alt="Antonio Carvajal"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500"
        />
      </motion.div>
    </section>
  );
}
