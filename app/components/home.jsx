"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "./context"

const techStack = [
  {id: 1, name: "GitHub", icon: "/stack/GitHub.png" },
  {id: 2, name: "Tailwind CSS", icon: "/stack/tailwind.png" },     
  {id: 3, name: "VS Code", icon: "/stack/vscode.png" },     
  {id: 4, name: "Django", icon: "/stack/Django.png" },            
  {id: 5, name: "Python", icon: "/stack/Python.png" },        
  {id: 6, name: "Next.js", icon: "/stack/Nextjs.png" },        
];

const projects = [
  {
    id: 1,
    icon: "bi bi-hospital",
    name: "Hospital Management",
    desc: "A life-saving web application that enables users to identify the nearest hospital, check and book available doctors based on their health issues, and also provides basic remedies.",
    features: [
      { id: 5, title: "Core Features" },
      { id: 6, name: "Hospital recommendation" },
      { id: 7, name: "Booking" },
      { id: 8, name: "Basic medication recommendation" },
      { id: 9, name: "Google map location" },
      { id: 10, name: "User Authentication" },
    ],
    Technologies: ["Next.js", "Tailwind", "MySQL", "Django"],
  },
  {
    id: 2,
    icon: "bi bi-cart-check",
    name: "E-Commerce Platform",
    desc: "An online shopping application where users can browse, add to cart, and securely purchase products with integrated payment gateways.",
    features: [
      { id: 11, title: "Core Features" },
      { id: 12, name: "Product catalog" },
      { id: 13, name: "Shopping cart" },
      { id: 14, name: "Wishlist" },
      { id: 15, name: "Payment integration" },
      { id: 16, name: "Order tracking" },
    ],
    Technologies: ["Next.js", "Tailwind", "MySQL", "Django"],
  },
  {
    id: 3,
    icon: "bi bi-book",
    name: "Learning Management System",
    desc: "A platform designed for schools and universities to host courses, allow students to enroll, and track their learning progress.",
    features: [
      { id: 17, title: "Core Features" },
      { id: 18, name: "Course catalog" },
      { id: 19, name: "Student enrollment" },
      { id: 20, name: "Progress tracking" },
      { id: 21, name: "Quizzes & exams" },
      { id: 22, name: "Teacher dashboard" },
    ],
    Technologies: ["Next.js", "Tailwind", "MySQL", "Django"],
  },
  {
    id: 4,
    icon: "bi bi-film",
    name: "Movie Streaming App",
    desc: "A responsive video streaming platform that lets users browse, watch, and save movies with personalized recommendations.",
    features: [
      { id: 23, title: "Core Features" },
      { id: 24, name: "Video streaming" },
      { id: 25, name: "Watchlist" },
      { id: 26, name: "User authentication" },
      { id: 27, name: "Personalized recommendations" },
      { id: 28, name: "Search & filters" },
    ],
    Technologies: ["Next.js", "Tailwind", "Django", "PostgreSQL"],
  },
  {
    id: 5,
    icon: "bi bi-geo-alt",
    name: "Travel Booking System",
    desc: "A booking platform for flights, hotels, and tours that helps users plan and manage their trips seamlessly.",
    features: [
      { id: 29, title: "Core Features" },
      { id: 30, name: "Flight booking" },
      { id: 31, name: "Hotel reservation" },
      { id: 32, name: "Tour packages" },
      { id: 33, name: "User reviews" },
      { id: 34, name: "Payment gateway" },
    ],
    Technologies: ["Vue.js", "Tailwind", "Laravel", "MySQL"],
  },
];

const values = [
  { id: 1, name: "Team Player", icon: "bi bi-people", text: "Thrives in collaborative environments, valuing communication and shared success." },
  { id: 2, name: "Continuous Learning", icon: "bi bi-journal-code", text: "Committed to staying current with emerging technologies and best practices." },
  { id: 3, name: "Problem Solver", icon: "bi bi-lightbulb", text: "Enjoys analyzing complex challenges and crafting efficient, scalable solutions." },
  { id: 4, name: "User-Centered", icon: "bi bi-person-check", text: "Focuses on delivering intuitive, accessible, and engaging user experiences." },
  { id: 5, name: "Quality Driven", icon: "bi bi-check-circle", text: "Dedicated to writing clean, maintainable, and performance-oriented code." },
  { id: 6, name: "Adaptable", icon: "bi bi-arrow-repeat", text: "Quick to embrace new tools, workflows, and evolving project requirements." },
]

export const Homepage = () => {
  const [showScroll, setShowScroll] = useState(false)
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const halfway = document.documentElement.scrollHeight / 2
      setShowScroll(window.scrollY > halfway)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div className="relative">
        {/* hero section */}
        <motion.section 
          id="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4">
            <div className="relative md:w-1/2 p-4">
              <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
                Hello, I'm <span className="text-orange-500">Wisdom Chukwuemeka</span>
              </h1>
              <p className="text mb-4 text-center md:text-left font-medium">
                I’m a passionate Full Stack Web Developer dedicated to turning ideas into powerful, scalable, and user-friendly digital solutions. 
              </p>
              <div className="text-center md:text-left">
                <Link href={"/about"} className="bg-orange-900 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-500">Learn More</Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image 
                src="/portfolio.png"
                alt="hero image"
                width={500}
                height={38}
                className="w-60 md:w-80 xl:w-100 mx-auto rounded-full"
              />
            </motion.div>
          </div>
        </motion.section>
        {/* hero section end */}

        {/* tech stack */}
        <section className="p-9 md:p-20 overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-6">My Tech Stack & Tool</h2>
          <div className={`bg-white h-fit p-2 rounded-2xl overflow-hidden relative 
          w-full xl:max-w-4xl mx-auto backdrop-blur-md bg-opacity-30 
          ${theme === "dark" ? "bg-white/30" : "bg-black/30"}
          `}>
            <div className="animate-scroll-left flex">
              {[...techStack, ...techStack, ...techStack].map((tech) => (
                <motion.div 
                  key={`${tech.id}-${Math.random()}`} 
                  className="flex flex-col items-center text-center space-y-2 px-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image src={tech.icon} alt={tech.name} width={64} height={64} className="w-16 h-16 object-contain"/>
                  <span className={`font-medium 
                    ${theme === "dark" ? "text-white" : "text-gray-800"}
                    `}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center ">
          <hr className="w-full h-2 border-orange-700"/>
          <Image 
                src="/portfolio.png"
                alt="hero image"
                width={50}
                height={50}
                className=" mx-auto rounded-full"
              />
          <hr className="w-full h-2 border-orange-700"/>
          </div>
          <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text font-bold">Wisdom</h1>
          <Link className={`text-center w-fit h-fit p-2 rounded-2xl
          text-base md:text-[1rem] xl:text-3xl 
          hover:bg-black-2/3v 
          ${theme === "dark" ? "bg-orange-800 text-white hover:bg-orange-600 transition duration-500" : "bg-black text-white hover:bg-black/85 transition duration-500"}

          `} href={"/contact"}>Contact me</Link>
          </div>
        </div>

        {/* values */}
        <section className="p-10 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8">My Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <motion.div
                key={value.id}
                className="flex flex-col items-center justify-center text-center p-6 rounded-full shadow-md w-56 h-56 mx-auto bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: value.id * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <i className={`${value.icon} text-4xl text-orange-600 mb-3`}></i>
                <h3 className={`font-semibold text-lg
                ${theme === "dark" ? "text-black" : "text-black"}
                  `}>{value.name}</h3>
                <p className="text-sm text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section className="p-10 mt-5">
          <div className="flex flex-col justify-center items-center mb-5">
            <h2 className="h1-text font-bold text-center mb-2">Projects</h2>
            <p className="text">Showcasing real-world solutions involving technical innovation with human-centered design</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className={`relative group overflow-hidden flex flex-col md:flex-row 
                  gap-4 bg-black text-white p-6 rounded-2xl shadow-lg
                  ${theme === "dark" ? "bg-white" : "bg-black"}
                  `}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-300 via-blue-700 to-orange-600 group-hover:w-full transition-all duration-500"></span>
                <div className="flex-1 space-y-4">
                  <i className={`${project.icon} text-4xl text-orange-200`}></i>
                  <h3 className="font-semibold text-lg md:text-xl xl:text-2xl text-orange-400">{project.name}</h3>
                  <p className={`text-base md:text-lg
                    ${theme === "dark" ? "text-gray-800" : "text-white"}
                    `}>{project.desc}</p>
                  <div className="mt-4">
                    <h4 className="text-orange-400 font-semibold mb-2">Core Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.filter((f) => f.name).map((feature) => (
                        <li key={feature.id} className="bg-orange-900 px-3 py-2 rounded-xl hover:bg-orange-600 transition duration-300">{feature.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-orange-400 font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.Technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-700 transition duration-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* scroll-to-top */}
        {showScroll && (
          <motion.button 
            onClick={scrollToHero} 
            className="fixed bottom-6 right-6 bg-orange-600 text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bi bi-arrow-up"></i>
          </motion.button>
        )}
      </div>
    </>
  )
}
