import Container from "../common/Container";
import navbarData from "../../data/navbarData";
import siteData from "../../data/siteData";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

  return (
    <motion.nav 
        initial={{ y: -100, opacity:0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
        className="border-b border-white/10 sticky top-0 z-50 w-full bg-black/20 backdrop-blur-xl"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

            <h1 className="text-2xl font-black tracking-wide">
                <a href="#home">
                {siteData.logo}
                </a>
            </h1>

            <ul className="hidden lg:flex gap-8 items-center">
                {navbarData.map((item) => (
                    <li key={item.id}>
                        <a 
                            onClick={() => {setActiveLink(item.href); setIsOpen(false)}}
                            href={item.href} 
                            className={` relative transition-colors duration-300 ${ activeLink === item.href ? //TERNERY OPERATOR
                                "text-cyan-400" : "text-white hover:text-cyan-400" } `}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}        
            </ul>
                <button 
                    className="text-2xl lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>        
        </div>
      </Container>

      {/* Kalau isOpen bernilai true, maka tampilkan JSX di bawahnya. */}
            {isOpen && ( 
                <div className="border-t border-white/10 bg-black/90 lg:hidden">
                    <ul className="flex flex-col p-6">

                        {navbarData.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                onClick={() => { setActiveLink(item.href); setIsOpen(false); }}
                                className={` block py-3 transition-colors duration-300 ${ activeLink === item.href ?
                                    "text-cyan-400" : "hover:text-cyan-400"}`}
                            >
                            {item.title}
                            </a>
                        </li>
                        ))}

                    </ul>
                </div>
            )
        }
    </motion.nav>
  )
}

export default Navbar
