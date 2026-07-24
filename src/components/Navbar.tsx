import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonial", label: "Teastimonial" },
  ];

  
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm ">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
             
        <div className="flex items-center cursor-pointer opacity-65 hover:opacity-100 transition-all hover:scale-105 duration-300">
          <div className="w-4  h-4 bg-blue-600 rounded-full "></div>
          <div className="w-4 h-4 -ml-1 bg-red-600 rounded-full"></div>
        </div>

        {/* destktop navItems */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link, index) => {
            return <a  

                 onClick={(e) => {
                    e.preventDefault()
                    setActiveLink(link.href)}}
            key={index} href={link.href} className={`text-sm font-bold relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 hover:after:w-full hover:after:bg-blue-700 after:bg-blue-700 after:transition-all hover:scale-105 ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900" }`}>
                {link.label}
                </a>;
          })}
        </div>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ?  <IoCloseSharp className="size-6"/>  : <IoMenu className="size-6"/>
          }
            </button>




        {/* get In touch box */}

        <div className="md:block hidden">
            <button className="bg-blue-500 px-4 py-2 shadow-sm rounded-full text-white hover:shadow-lg hover:bg-blue-700 cursor-pointer hover:scale-105 transition-all duration-200">
            <a href="#newsletterbutton">Get in touch</a>
            </button>
        </div>

        {/* mobile menu */}

          {
            isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md ">
                <div className="container mx-auto px-4 space-y-3">
                  {navLinks.map((link, index) => {
                    return <a 
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveLink(link.href)
                        setIsMenuOpen(false)
                      }}
                    className={`block py-2 font-medium ${activeLink === link.href ? 'text-blue-500' : 'text-gray-900' }`} key={index} href={link.href}>{link.label}</a>
                  })}

                     <button className="w-full bg-blue-500 px-4 py-2 shadow-sm rounded-full text-white hover:shadow-lg hover:bg-blue-700 cursor-pointer hover:scale-105 transition-all duration-200">
            <a href="#newsletterbutton">Get in touch</a>
            </button>

                </div>
              </div>
            )
          }
      </div>
    </nav>
  );
};

export default Navbar;
