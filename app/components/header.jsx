"use client"
import Link from "next/link"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "./context"

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
   const { theme, themeButton } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className="relative">
        <header>
          <nav className="flex justify-between items-center px-4 xl:px-6 shadow-lg">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="w-20 h-20 md:w-30 md:h-30"
              />
            </motion.div>

            <div className="hidden md:flex max-w-6/12 xl:max-w-6/12 bg-gray-200 p-2 rounded-2xl">
              <input type="search" name="" id="" 
              className=" bg-gray-200 border-0
              focus:border-green-200 text"
              placeholder="Search doctor"/>
              <i className="bi bi-search xl:items-end"></i>
            </div>

            {/* Navbar links */}
            <motion.ul
              className="gap-8 text hidden md:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button onClick={themeButton} className="text-base sm:text-2xl md:text-[1.2rem] xl:text-2xl">
              {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-alt-low-fill"></i>}
          </button>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/"}>Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/price"}>Services</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/about"}>About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/contact"}>Contact</Link>
              </motion.li>
            </motion.ul>

            {/* Mobile menu button */}
            <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
              {isOpen ? (
                <i className="bi bi-list text-green-900 btn"></i>
              ) : (
                <i className="bi bi-x-lg btn"></i>
              )}
            </div>
          </nav>
        </header>

        {/* Mobile menu */}
        <section>
          <div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  key="mobile-menu"
                  className="h-fit absolute w-full text-white bg-green-800 shadow-lg p-4 text-center z-10"
                  initial={{ y: [0] }}
                  animate={{ y: [-80, 0] }}
                  exit={{ y: -500 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="relative">
                    <motion.ul
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      <div className="flex justify-center items-center mb-5">
                <div className="bg-gray-300 w-fit h-fit p-1.5 rounded-2xl">
              <input type="search" name="" id="" 
              className=" border-0
              focus:border-green-200 text text-black"
              placeholder="Search doctor"/>
              <i class="bi bi-search text-black"></i>
            </div>
            </div>
            
                      
                      {["Home", "Services", "About", "Contact"].map(
                        (item, idx) => (
                          <motion.li
                            key={idx}
                            className="nav-btn mb-4"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              show: { opacity: 1, x: 0 },
                            }}
                          >
                            <Link
                              href={
                                item === "Home"
                                  ? "/"
                                  : item === "Services"
                                  ? "/price"
                                  : `/${item.toLowerCase()}`
                              }
                              onClick={toggleMenu}
                            >
                              {item}
                            </Link>
                          </motion.li>
                        )
                      )}
                      <button onClick={themeButton} className="text-base sm:text-2xl md:text-[1.2rem] xl:text-2xl">
              {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-alt-low-fill"></i>}
              </button>
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  )
}
