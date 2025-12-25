import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {


 


  

  return (
    <>
    <div className='h-screen w-full object-cover opacity-30'>
        <video
          className='h-full w-full object-cover'
          playsInline
          autoPlay
          muted
          loop
          style={{ pointerEvents: 'none' }} // Prevent interactions with the video
        >
          <source src='video.mp4' />
        </video>
    

      </div>
      <div className="w-[75%]  m-auto g-y-7">
      <About />

      <Skills/>

      <Experience/>
      </div>
    </>
  );
}
