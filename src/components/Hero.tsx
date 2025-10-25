import React from "react";
import { motion, scale } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myPhoto from "../assets/my-photo.jpg";

export default function Hero() {
  return (
    <section
  className="relative flex flex-col md:flex-row items-center justify-between min-h-screen p-8 text-white overflow-hidden"
>

      {/* Lado izquierdo: texto */}
      <div className="flex flex-col items-start justify-center flex-1 mb-8 md:mb-0">
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
          I'm <span className="text-orange-500 font-bold">Antonio Carvajal</span>
        </motion.h2>
        <br/>
        <br/>
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
      <div className="relative flex flex-col items-center md:items-start justify-center">

        <motion.div
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_20px_#f97316] border-4 border-orange-500 right-80"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          whileHover={{scale: 1.1}} >
          <img
            src={myPhoto.src}
            alt="Antonio Carvajal"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-orange-500 object-cover"
          />
        </motion.div>

        {/* Iconos sociales separados del borde */}
        <motion.div
        className="absolute right-48 flex flex-col gap-6 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}>
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
            href="mailto:carvajalwk@gmail.com" 
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
      
