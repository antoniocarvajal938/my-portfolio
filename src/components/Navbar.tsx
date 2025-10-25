import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    //Detecta scroll para cambiar opacidad
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
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
    { name: "Home", icon: <AiOutlineHome />, href: "/" },
    { name: "About", icon: <AiOutlineUser />, href: "/about" },
    { name: "Projects", icon: <AiOutlineFundProjectionScreen />, href: "/projects" },
    { name: "Resume", icon: <CgFileDocument />, href: "/resume" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo animado */}
        <motion.div variants={logoVariant} initial="hidden" animate="visible">
          <a href="/" className="text-white font-bold text-xl md:text-2xl tracking-wide">
            Antonio Carvajal
          </a>
        </motion.div>

        {/* Menú desktop */}
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
                className="hover:text-blue-500 flex items-center gap-1 transition-colors duration-200"
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

        {/* Botón móvil (solo visual) */}
        <div className="md:hidden text-white cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}