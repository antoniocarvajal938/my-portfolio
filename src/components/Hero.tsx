import React from "react";
import { motion, scale } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myPhoto from "../assets/my-photo.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen p-8 text-white overflow-hidden">
      {/* Lado izquierdo: texto */}
      <div className="relative flex flex-col items-center md:items-end justify-center mt-8 md:mt-0 md:mr-20 lg:mr-40">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Hi there{" "}
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block origin-bottom-right"
          >
            👋🏻
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-mono text-white mb-2"
        >
          I'm{" "}
          <span className="text-orange-500 font-bold">Antonio Carvajal</span>
        </motion.h2>
        <br />
        <br />
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-mono text-orange-300"
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
        </motion.h3>
      </div>

      {/* Lado derecho: imagen + iconos */}
      <div className="relative flex flex-col items-center md:items-end justify-center mt-8 md:mt-0 md:mr-20 lg:mr-28">
        <motion.div
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_0_20px_#f97316] border-4 border-orange-500"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={myPhoto.src}
            alt="Antonio Carvajal"
            className="w-full h-full rounded-full border-4 border-orange-500 object-cover"
          />
        </motion.div>

        {/* Iconos sociales - Debajo en móvil, al lado en desktop */}
        <motion.div
          className="flex md:flex-col gap-6 z-20 mt-6 md:mt-0 md:absolute md:-right-16 lg:-right-20 xl:-right-24"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.a
            href="https://www.linkedin.com/in/antonio-carvajal-mu%C3%B1oz-21b27a182/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5 }}
            className="text-orange-400 hover:text-orange-500 transition-colors"
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="https://github.com/antoniocarvajal938"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5 }}
            className="text-white hover:text-white transition-colors"
          >
            <FaGithub size={40} />
          </motion.a>

          <motion.a
            href="mailto:carvajalwk@gmail.com?subject=¡Hola Antonio!&body=¡Hola Antonio!%0D%0A%0D%0AMe gustaría contactar contigo.%0D%0A%0D%0ASaludos"
            whileHover={{ scale: 1.5 }}
            className="text-orange-400 hover:text-orange-500 transition-colors"
          >
            <FaEnvelope size={40} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
