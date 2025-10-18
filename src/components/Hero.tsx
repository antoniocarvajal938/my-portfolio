import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/my-photo.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-gray-900 text-white">
      
      {/* Lado izquierdo: texto */}
      <div className="flex flex-col items-start justify-center flex-1 mb-8 md:mb-0">
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex-1 flex justify-center md:justify-end md:pr-16"
      >
        <img
          src={myPhoto.src}
          alt="Antonio Carvajal"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-500 object-cover"
        />
      </motion.div>
    </section>
  );
}