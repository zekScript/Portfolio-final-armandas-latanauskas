import React from "react";

const Experience = () => {
  return (
    <div>
            <div className='relative'>
            <div className='absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#1a1a1a]'></div>
            <ol className='space-y-16'>
                <li className='relative'>
                  <div className='flex items-center justify-center'>
                    <div className="relative z-10 shrink-0 w-28 h-28 rounded-full bg-white shadow-lg ring-4 ring-white/10 overflow-hidden">
                        <img className="w-full h-full object-contain p-2 bg-white" alt='Company logo' src={"weborigo.png"}></img>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div></div>
       <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl p-6 ">
    <div className='grid grid-cols-1 [@media(min-width:400px)]:grid-cols-[1fr_auto] gap-1 [@media(min-width:400px)]:gap-4 items-start'>
        <h4 className="text-2xl font-bold leading-snug text-[#f2b705] [text-shadow:0_0_8px_rgba(242,183,5,0.66)]">Weborigo</h4>
        <p className="font-semibold text-sm sm:text-base bg-gradient-to-b from-[#ff6a00] to-[#ff9933] bg-clip-text text-transparent [@media(min-width:400px)]:text-right leading-tight">
            Nov. 2025 - Dec. 2025
        </p>
    </div>
    <p className='text-[#f2b705]/80 mt-1'>Internship Web developer</p>
    <p className="mt-3 text-[#f2b705]/80 leading-relaxed">Developed and enhanced existing application. Improving app by client request and collaborating with a team. Gained experience abit of PHP, Laravel, and React </p>
</div>
                  </div>
                </li>
                <li className='relative'>
                  <div className='flex items-center justify-center'>
                    <div className="relative z-10 flex-shrink-0 w-28 h-28 rounded-full bg-white shadow-lg ring-4 ring-white/10 overflow-hidden">
                        <img className="w-full h-full object-contain p-2 bg-white" alt='Company logo' src={"roundedsq.jpg"}></img>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl p-6 ">
    <div className='grid grid-cols-1 [@media(min-width:400px)]:grid-cols-[1fr_auto] gap-1 [@media(min-width:400px)]:gap-4 items-start'>
        <h4 className="text-2xl font-bold leading-snug text-[#f2b705] [text-shadow:0_0_8px_rgba(242,183,5,0.66)]">RoundedSQ</h4>
        <p className="font-semibold text-sm sm:text-base bg-gradient-to-b from-[#ff6a00] to-[#ff9933] bg-clip-text text-transparent [@media(min-width:400px)]:text-right leading-tight">
            Oct. 2024 - Dec. 2024
        </p>
    </div>
    <p className='text-[#f2b705]/80 mt-1'>Internship Web developer</p>
    <p className="mt-3 text-[#f2b705]/80 leading-relaxed">Built Nextjs portfolio/CMS app for users making blog post, customizing settings, handling CRUD operations, and using MDX on the site. Learned new languages like Nextjs, Tailwind, Prisma ORM, React.</p>
</div>
        <div></div>
        
                  </div>
                </li>
                <li className='relative'>
                  <div className='flex items-center justify-center'>
                    <div className="relative z-10 shrink-0 w-28 h-28 rounded-full bg-white shadow-lg ring-4 ring-white/10 overflow-hidden">
                        <img className="w-full h-full object-contain p-2 bg-white" alt='Company logo' src={"images.png"}></img>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div></div>
<div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl p-6 transition-all">
    <div className='grid grid-cols-1 [@media(min-width:400px)]:grid-cols-[1fr_auto] gap-1 [@media(min-width:400px)]:gap-4 items-start'>
        <h4 className="text-2xl font-bold leading-snug text-[#f2b705] [text-shadow:0_0_8px_rgba(242,183,5,0.66)]">KITM</h4>
        <p className="font-semibold text-sm sm:text-base bg-gradient-to-b from-[#ff6a00] to-[#ff9933] bg-clip-text text-transparent [@media(min-width:400px)]:text-right leading-tight">
            Sep. 2023 - Dec. 2025
        </p>
    </div>
    <p className='text-[#f2b705]/80 mt-1'>Javascript programmer student</p>
    <p className="mt-3 text-[#f2b705]/80 leading-relaxed">I was taught from very basics of Html to making CRUD apps with React, MySQL, Git/Github, and fundamentals of workflow. So that led to building various of applications given to us by our IT teacher to gain experience, developing and learning new coding languages</p>
</div>
                  </div>
                </li>
                
            </ol>
            </div>
            
    </div>
  );
};

export default Experience;
