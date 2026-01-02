import HeroSection from "@/components/anim/HeroSection";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      {/* Video Hero Section */}
      <div className='relative h-screen w-full overflow-hidden'>
        <HeroSection/>
        <video
          className='absolute inset-0 h-full w-full object-cover '
          playsInline
          autoPlay
          muted
          loop
          style={{ pointerEvents: 'none' }}
        >
          <source src="video.mp4" />
        </video>
        
        {/* Gradient Overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111] pointer-events-none"></div>
      </div>

      {/* Transition Element */}
      <div className="relative -mt-32 z-10">
        <div className="h-32 bg-gradient-to-b from-transparent to-[#111]"></div>
      </div>

      
        <div className="w-[65%] m-auto space-y-7">
          
          <section id="about" className="pt-18 pb-16 text-white">
            <About />
          </section>

          <section id="skills" className="pt-18 pb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </h1>
            <Skills/>
          </section>

          <section id="xp" className="pt-18 pb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h1>
            <Experience/>
          </section>

          <section id="projects" className="pt-18 pb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </h1>
            <Projects/>
          </section>
        
        </div>
    
    </>
  );
}