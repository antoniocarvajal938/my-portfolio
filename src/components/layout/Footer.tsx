import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent backdrop-blur-md border-t border-orange-500 py-6 text-white">
      {/* Social icons */}
      <div className="flex justify-center gap-8 mb-3 text-2xl">
        <a
          href="https://www.linkedin.com/in/antonio-carvajal-mu%C3%B1oz-21b27a182/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/antoniocarvajal938"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <AiFillGithub />
        </a>
        <a
          href="mailto:carvajalwk@gmail.com"
          className="text-orange-400 hover:text-orange-400 transition-colors"
        >
          <AiOutlineMail />
        </a>
      </div>

      {/* Info row */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2 md:gap-0">
        <p className="order-1 md:order-2 md:text-left">
          Designed & Developed by <span className="text-white">Antonio Carvajal</span>
        </p>
        <p className="order-2 md:order-1">
          © {year} All Rights Reserved
        </p>
      </div>

      {/* Tech stack line */}
      <div className="mt-2 text-center text-xs text-gray-500">
        Built with Astro, React, TailwindCSS & TypeScript.
      </div>
    </footer>
  );
}
