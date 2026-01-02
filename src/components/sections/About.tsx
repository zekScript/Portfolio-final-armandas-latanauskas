import React from "react";
import AboutData from "./AboutData";

const About = () => {
  return (
    <div className="h-125 w-full flex mt-24 p-12 rounded-lg font-mono">
      <AboutData />
      <div className="text-[#f2b705] [text-shadow:0_0_8px_rgba(242,183,5,0.4)] ml-12">
        <h1 className='text-2xl mb-4 before:content-["C:\>_"] before:text-[#f2b705]'>
          Hi there!
        </h1>
        <p className="leading-relaxed text-sm sm:text-base ">
          I like looking at errors and take time solve problems with trial and
          error. Also love building websites with alot of functionality. My
          dream life is having fully remote job and camping around with
          Transit/Sprinter vans. Learning new coding languages and adapting to
          new tech it's a plus to me, always motivated to work hard.
        </p>
      </div>
    </div>
  );
};

export default About;
