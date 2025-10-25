import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Botón móvil (solo visual) */}
        {/* Botón móvil FUNCIONAL */}
<button 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="md:hidden text-white cursor-pointer"
    aria-label="Toggle menu"
>
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-1"
    >
        <motion.span 
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white transition-all"
        ></motion.span>
        <motion.span 
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white transition-all"
        ></motion.span>
        <motion.span 
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white transition-all"
        ></motion.span>
    </motion.div>
</button>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-black/95 backdrop-blur-lg"
              >
                  <ul className="flex flex-col items-center gap-6 py-8 text-white font-medium">
                      {links.map((link, index) => (
                          <motion.li
                              key={link.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                          >
                              <a
                                  href={link.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="hover:text-orange-500 flex items-center gap-2 text-lg transition-colors duration-200"
                              >
                                  {link.icon} {link.name}
                              </a>
                          </motion.li>
                      ))}
                      <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: links.length * 0.1 }}
                      >
                          <a
                              href="https://github.com/antoniocarvajal938"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                          >
                              <CgGitFork /> <AiFillStar /> GitHub
                          </a>
                      </motion.li>
                  </ul>
              </motion.div>
          )}
      </AnimatePresence>

    </header>
  );
}