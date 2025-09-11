"use client"
import Link from "next/link"
import Image from "next/image"
import next from "next"
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
  {id: 1, name: "Project one", image: "/stack/work.png"},
  {id: 2, name: "Project two", image: "/stack/work.png"},
  {id: 3, name: "Project three", image: "/stack/work.png"},
  {id: 4, name: "Project four", image: "/stack/work.png"},
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
    <h2 className="text-2xl font-bold text-center mb-6">My Tech Stack</h2>

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
                  <i class="bi bi-arrow-up"></i>
                </button>
              )}
              {/* scroll top button ends */}

              {/* show works section starts */}
              <section>
                <div className="mt-8 flex flex-col gap-4 p-2 bg-gray-100">
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
                  </div>
              </section>
              {/* work section ends here */}

           </div>
        </>
    )
}