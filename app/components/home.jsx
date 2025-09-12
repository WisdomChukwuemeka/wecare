"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

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
  {
    id: 1,
    name: "Team Player",
    icon: "bi bi-people",
    text: "Thrives in collaborative environments, valuing communication and shared success."
  },
  {
    id: 2,
    name: "Continuous Learning",
    icon: "bi bi-journal-code",
    text: "Committed to staying current with emerging technologies and best practices."
  },
  {
    id: 3,
    name: "Problem Solver",
    icon: "bi bi-lightbulb",
    text: "Enjoys analyzing complex challenges and crafting efficient, scalable solutions."
  },
  {
    id: 4,
    name: "User-Centered",
    icon: "bi bi-person-check",
    text: "Focuses on delivering intuitive, accessible, and engaging user experiences."
  },
  {
    id: 5,
    name: "Quality Driven",
    icon: "bi bi-check-circle",
    text: "Dedicated to writing clean, maintainable, and performance-oriented code."
  },
  {
    id: 6,
    name: "Adaptable",
    icon: "bi bi-arrow-repeat",
    text: "Quick to embrace new tools, workflows, and evolving project requirements."
  }
]



export const Homepage = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const halfway = document.documentElement.scrollHeight / 2
      if(window.scrollY > halfway){
        setShowScroll(true)
      } else{
        setShowScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    //Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll)
 },[])

 const scrollToHero = () => {
  document.getElementById("hero")?.scrollIntoView({behavior: "smooth"})
 }

    return(
        <>
           <div className="relative">
            {/* hero section */}
             <section id="hero">
                <div className=" flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4">
                    <div className="relative md:w-1/2 p-4">
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Hello,
                        I'm <span className="text-orange-500">Wisdom Chukwuemeka</span>
                        </h1>
                        <p className="text mb-4 text-center md:text-left font-medium">
                            I’m a passionate Full Stack Web Developer dedicated to turning ideas into powerful, scalable, and user-friendly digital solutions. From sleek frontends to robust backends, I help businesses grow by making them visible online.                            </p>
                        
                        <div className="text-center md:text-left">
                            <Link href={"/about"} className="bg-orange-900 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-500">Learn More</Link>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400 rounded-full filter blur-3xl opacity-50 z-0">

                        </div>

                        <div className="py-15 hidden md:flex items-center gap-8">
                        <h3 className="text-sm md:text-lg ">Check Out My</h3>
                        <ul>
                          <Link href={"https://www.linkedin.com/in/wisdomchukwuemeka/"}>
                          <Image 
                          src="/stack/LinkedIn.png"
                          alt="LinkedIn"
                          width={30}
                          height={30}
                      
                          />
                          </Link>
                          
                        </ul>
                    </div>
                    </div>

                    
                    <div>
                        <Image 
                            src="/portfolio.png"
                            alt="hero image"
                            width={500}
                            height={38}
                            className="w-60 md:w-80 xl:w-100 mx-auto rounded-full"
                        />
                    </div>
                </div>
             </section>
             {/* hero section end */}

             {/* section two starts */}
             <section>
  {/* tech stack */}
  <section>
  {/* tech stack */}
  <section>
  <div className="p-9  md:p-20 overflow-hidden">
    <h2 className="text-2xl font-bold text-center mb-6">My Tech Stack & Tool</h2>

    <div className="overflow-hidden relative w-full xl:max-w-4xl mx-auto">
      <div className="animate-scroll-left">
        {/* duplicate once for seamless loop */}
        {[...techStack, ...techStack, ...techStack,].map((tech) => (
          <div 
            key={`${tech.id}-${Math.random()}`} 
            className="flex flex-col items-center text-center space-y-2 px-6 "
          >
            <Image 
              src={tech.icon} 
              alt={tech.name} 
              width={64} 
              height={64} 
              className="w-16 h-16 object-contain"
            />
            <span className="text-gray-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

</section>

</section>

             {/* section two ends */}

             {/* section three begins */}
             <section>
                <div className="flex items-center">
                  <hr className="border-orange-800 w-full h-2"/>
                  <Image 
                      src="/portfolio.png"
                      alt="hero image"
                      width={50}
                      height={50}
                            className="border-3 border-white rounded-full
                            xl:w-70"
                        />
                  <hr className="border-orange-800 w-full h-2"/>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="text-center flex flex-col space-y-2">
                  <p className="font-bold">Wisdom</p>

                  <Link href={"/contact"}>
                  <span className="bg-black w-fit h-fit p-2 rounded-2xl text-sm md:text-lg text-white hover:bg-gray-800 duration-500 shadow-lg">Get in touch</span>
                  </Link>
                  
                  </div>
                </div>
             </section>
             {/* section three ends */}

             {/* Scroll-to-top button */}
              {showScroll && (
                <button onClick={scrollToHero} className="
                fixed bottom-6 right-6 bg-orange-600 text-white p-3 rounded-full
                shadow-lg hover:bg-orange-700 transition">
                  <i className="bi bi-arrow-up"></i>
                </button>
              )}
              {/* scroll top button ends */}

              {/* Value section starts here */}
              <section className="p-10 bg-gray-50 mt-5">
  <h2 className="text-2xl font-bold text-center mb-8">My Core Values</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {values.map((value) => (
      <div
        key={value.id}
        className="flex flex-col items-center justify-center text-center p-6 rounded-full shadow-md w-56 h-56 mx-auto bg-white hover:shadow-lg 
        hover:bg-orange-950 hover:text-white transition duration-500 transform hover:scale-105 hover:translate-y-1
        "
      >
        <i className={`${value.icon}  text-4xl text-orange-600 mb-3`}></i>
        <h3 className="font-semibold text-lg">{value.name}</h3>
        <p className="text-sm text-gray-600">{value.text}</p>
      </div>
    ))}
  </div>
</section>
              {/* Value section ends here */}


          {/* Project section starts here */}
            <section className="p-10 bg-white mt-5">

                <div>
                  <div className="flex flex-col justify-center items-center mb-5">
                    <h2 className="h1-text font-bold text-center mb-2">Projects</h2>
                    <p className="text">Showcasing real-world solutions involving technical innovation with human-centered design</p>
                  </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {projects.map((project) => (
    <div 
      key={project.id}
      className="relative group overflow-hidden transition duration-500 flex flex-col md:flex-row gap-4 bg-black text-white p-6 rounded-2xl shadow-lg"
    >
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-300 via-blue-700 to-orange-600 group-hover:w-full transition-all duration-500"></span>
      {/* Left divider */}
      <hr className="hidden md:flex rounded-2xl w-2 h-auto border-1 border-orange-300 bg-gradient-to-r from-orange-700 to-blue-200"/>

      {/* Project content */}
      <div className="flex-1 space-y-4">
        <i className={`${project.icon} text-4xl text-orange-200`}></i>
        <h3 className="font-semibold text-lg md:text-xl xl:text-2xl text-orange-500">
          {project.name}
        </h3>
        <p className="text-base md:text-lg text-gray-200">{project.desc}</p>

        {/* Core Features */}
        <div className="mt-4">
          <h4 className="text-orange-400 font-semibold mb-2">Core Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features
              .filter((f) => f.name) // ignore the "title" object
              .map((feature) => (
                <li 
                  key={feature.id} 
                  className="bg-orange-900 px-3 py-2 rounded-xl hover:bg-orange-600 transition duration-300"
                >
                  {feature.name}
                </li>
              ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="text-orange-400 font-semibold mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.Technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-700 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

                </div>

            </section>
          {/* Project section ends here */}

           </div>
        </>
    )
}






{/* <div className="mt-8 flex flex-col gap-4 p-2 bg-gray-100">
                <h2 className="text-2xl font-bold text-center">Projects</h2>
                  <div className=" flex flex-col md:flex-row max-w-4xl mx-auto items-center text-center gap-3">
                    
                    {
                      projects.map((item) => (
                        <div key={item.id} 
                        
                        >
                            <Image 
                            src={item.image}
                            alt="Image"
                            width={90}
                            height={90}
                            className="w-50 h-50 object-contain
                            rounded-2xl"
                            />
                            <p>{item.name}</p>
                        </div>
                      ))
                    }
                  </div>
                  </div> */}