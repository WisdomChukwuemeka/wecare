
import Image from "next/image";
export default function About() {
  return (
    <main className=" flex items-center justify-center px-6 py-16">
      <section className="max-w-4xl text-center">
        <header className="mb-10">
          <Image 
            src="/portfolio.png"
            alt="hero image"
            width={500}
            height={38}
             className="w-60 md:w-80 xl:w-100 mx-auto rounded-full mb-10"
           />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Me
          </h1>
          <h2 className="text-xl font-semibold text-indigo-600">
            Wisdom Chukwuemeka Chinagorom
          </h2>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed text-sm md:text-2xl xl:text-3xl">
          <p>
            I am a passionate and detail-oriented professional with a strong interest 
            in building impactful digital experiences. My work focuses on blending 
            clean design principles with functional solutions, ensuring that every 
            project delivers value and excellence.
          </p>

          <p>
            With experience in modern web technologies, I specialize in creating 
            responsive, user-friendly applications that bridge the gap between 
            creativity and technical execution. I enjoy solving complex problems 
            and transforming ideas into scalable solutions.
          </p>

          <p>
            Beyond development, I am driven by continuous learning and innovation. 
            My goal is to contribute to projects that make a meaningful difference 
            while growing both professionally and personally.
          </p>
        </div>
      </section>
    </main>
  );
}
