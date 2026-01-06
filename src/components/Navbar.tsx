import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const linkVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
    }),
  };

  const links = [
    { name: "Home", icon: <AiOutlineHome />, href: "#hero" },
    { name: "About", icon: <AiOutlineUser />, href: "#about" },
    {
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
      href: "#projects",
    },
    { name: "CV", icon: <CgFileDocument />, href: "#cv" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-md" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <motion.div variants={logoVariant} initial="hidden" animate="visible">
          <a
            href="#hero"
            className="text-white font-bold text-xl md:text-2xl tracking-wide"
          >
            Antonio Carvajal
          </a>
        </motion.div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center text-white font-medium">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              custom={index}
              variants={linkVariant}
              initial="hidden"
              animate="visible"
            >
              <a
                href={link.href}
                className="hover:text-orange-500 flex items-center gap-1 transition-colors duration-200"
              >
                {link.icon} {link.name}
              </a>
            </motion.li>
          ))}

          <motion.li
            custom={links.length}
            variants={linkVariant}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://github.com/antoniocarvajal938"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
            >
              <CgGitFork /> <AiFillStar />
            </a>
          </motion.li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-8 py-10 text-white">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
    flex items-center gap-4
    px-6 py-3
    text-xl font-medium
    rounded-full
    bg-white/5
    hover:bg-orange-500/10
    hover:text-orange-400
    transition-all duration-300
  "
                  >
                    <span className="text-2xl text-orange-400">
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
