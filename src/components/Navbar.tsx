"use client"
import React from "react";

const Navbar = () => {
 
  return (
    <div className="fixed left-0 top-0 w-full z-9999 bg-black border-b-2 border-[#f2b705] shadow-[0_0_20px_rgba(242,183,5,0.5)] p-3">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex gap-8 md:gap-16 lg:gap-24 justify-center text-sm md:text-xl font-mono text-[#f2b705] uppercase tracking-wider">
          <li>
            <a
              href="#about"
    
              className="hover:text-[#ff6a00] hover:[text-shadow:0_0_10px_rgba(255,106,0,0.8)] transition-all duration-300 [text-shadow:0_0_8px_rgba(242,183,5,0.66)]"
            >
              &gt; About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-[#ff6a00] hover:[text-shadow:0_0_10px_rgba(255,106,0,0.8)] transition-all duration-300 [text-shadow:0_0_8px_rgba(242,183,5,0.66)]"
            >
              &gt; Skills
            </a>
          </li>
          <li>
            <a
              href="#xp"
              className="hover:text-[#ff6a00] hover:[text-shadow:0_0_10px_rgba(255,106,0,0.8)] transition-all duration-300 [text-shadow:0_0_8px_rgba(242,183,5,0.66)]"
            >
              &gt; Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#ff6a00] hover:[text-shadow:0_0_10px_rgba(255,106,0,0.8)] transition-all duration-300 [text-shadow:0_0_8px_rgba(242,183,5,0.66)]"
            >
              &gt; Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;