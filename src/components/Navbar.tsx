// Navbar.jsx
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react"
import {fadeIn, textVariant } from "../utils/motion.js"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };



  return (
    <motion.nav 
      variants={textVariant(0)}
      initial="hidden"
      animate="show"
      // whileInView="show"
      // viewport={{once: true}}

    className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center cursor-pointer opacity-65 hover:opacity-100 transition-all hover:scale-105 duration-300">
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="w-4 h-4 -ml-1 bg-red-600 rounded-full"></div>
        </div>




        {/* desktop navItems */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`text-sm font-bold relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 hover:after:w-full hover:after:bg-blue-700 after:bg-blue-700 after:transition-all hover:scale-105 ${
                activeLink === link.href 
                  ? "text-blue-600 after:w-full" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoCloseSharp className="size-6"/> : <IoMenu className="size-6"/>}
        </button>

        {/* Get In Touch */}
        <div className="md:block hidden">
          <button className="bg-blue-500 px-4 py-2 shadow-sm rounded-full text-white hover:shadow-lg hover:bg-blue-700 cursor-pointer hover:scale-105 transition-all duration-200">
            <a href="#newsletterbutton">Get in touch</a>
          </button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 space-y-3 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`block py-2 font-medium ${
                    activeLink === link.href ? 'text-blue-500' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-blue-500 px-4 py-2 shadow-sm rounded-full text-white hover:shadow-lg hover:bg-blue-700 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="#newsletterbutton">Get in touch</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;