import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/my-photo.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-start min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      
      {/* Fondo dinámico con capas flotantes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl -bottom-24 right-16"></div>
      </motion.div>

      {/* Contenido */}
      <div className="flex flex-col items-start justify-center flex-1 z-10 mb-8 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Hi there 

          {/* Emoji 👋🏻 animado de saludo */}
          <motion.span
          role="img"
          aria-label="wave"
          className="inline-block ml-3"
          animate={{ rotate: [0, 20, -20, 20, 0]}}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut"}}
          >👋🏻</motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          I'm <span className="text-blue-400">Antonio Carvajal</span>
        </motion.h2>
        <br></br>
        <br></br>
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

      {/* Imagen a la derecha */}
      <motion.div
        className="w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 ml-12 z-10"
        initial={{ opacity: 0, x: 50 }} //entra desde la derecha
        animate={{ opacity: 1, x: 0 }}  //se posiciona en su lugar
        transition={{ type: "spring", stiffness: 50, damping: 12 }}
      >
        <motion.img
          src={myPhoto.src}
          alt="Antonio Carvajal"
          className="w-full h-full object-cover rounded-full border-4 border-blue-500"
          animate={{ y: [0, -15, 0] }}  //flotación suave vertical
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
}
