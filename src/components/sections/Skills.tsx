import React from 'react'
import { data } from '@/app/data/data'
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiGithub,
  SiGit,
  SiC,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiPython,
  SiKotlin,
  SiGo,
  SiRuby,
  // SiJava,
  // SiCsharp
} from 'react-icons/si';

import { FaJava, FaAngular, FaGitlab } from "react-icons/fa6";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { FaVuejs } from "react-icons/fa";
import { LuMonitorSmartphone } from "react-icons/lu";




// Icon mapping object
export const iconMap: { [key: string]: any } = {
  "React": <SiReact />,
  "Nextjs": <SiNextdotjs />,
  "Javascript": <SiJavascript />,
  "Typescript": <SiTypescript />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "NodeJS": <SiNodedotjs />,
  "MySQL": <SiMysql />,
  "MongoDB": <SiMongodb />,
  "NeonDB": <SiNodedotjs />,
  "Express": <SiExpress />,
  "Prisma ORM": <SiPrisma />,
  "Github": <SiGithub />,
  "Git": <SiGit />,
  "CI/CL": <HiOutlineCommandLine />,
  "Node": <SiNodedotjs />,
  // "Bun": <span>🥟</span>,
  "C language": <SiC />,
  "C++": <SiCplusplus />,
  "Java": <FaJava />,
  "PHP": <SiPhp />,
  "Laravel": <SiLaravel />,
  "Symfony": <SiSymfony />,
  "Python": <SiPython />,
  "C#": <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M17.16 11.5h.94v.94h-.94z"></path><path d="M20.68 7a1.76 1.76 0 0 0-.68-.64C17.67 5 15.29 3.64 12.93 2.27a1.73 1.73 0 0 0-1.89 0L4 6.36a1.67 1.67 0 0 0-.9 1.52v8.24a1.75 1.75 0 0 0 .21.87 2 2 0 0 0 .16.23l.08.09.13.11a2 2 0 0 0 .25.18l.83.47.27.16.23.13.12.07.37.21.32.19.27.15.54.31.14.08.35.2.14.08 3.5 2a1.73 1.73 0 0 0 1.89 0l7.1-4.01a1.7 1.7 0 0 0 .65-.65 1.75 1.75 0 0 0 .21-.87V7.88a1.8 1.8 0 0 0-.18-.88m-8.56 11.61h-.07a6.61 6.61 0 1 1 0-13.22 6.61 6.61 0 0 1 5.71 3.28l-2.88 1.66a3.27 3.27 0 0 0-2.8-1.62A3.29 3.29 0 0 0 8.75 12a3.2 3.2 0 0 0 .44 1.63 3.29 3.29 0 0 0 5.73 0l2.88 1.66a6.6 6.6 0 0 1-5.68 3.32m7.38-7.11h-.93v.94h.93v.47h-.93v.94h-.47v-.94h-.94v.94h-.47v-.94h-.94v-.47h.94v-.94h-.94V11h.94v-.9h.47v.9h.94v-.9h.47v.9h.93z"></path>
</svg>,
  "Kotlin": <SiKotlin />,
  "React Native": <SiReact />,
  "Golang": <SiGo />,
  "Ruby": <SiRuby />,
  "Vue": <FaVuejs/>,
  "Angular": <FaAngular/>,
  "Gitlab": <FaGitlab/>,
  "Responsive Design": <LuMonitorSmartphone/>
};

const Skills = () => {
  return (
    <div className='mt-12'>
      <div className='grid grid-cols-5 '>
        <div className='flex flex-col mr-4'>
          <h3 className='text-[#fb7e14] text-2xl mb-3'>FrontEnd</h3>
          <div className='h-[2px] bg-[#fb7e14] opacity-30 '></div>
          <ul className='mt-4 '>
            {data.frontend.languages.map(lang => (
              <li key={lang} className='w-full mb-[6px] text-[#f2b705] left-0 top-0 [text-shadow:0_0_8px_rgba(242,183,5,0.66)] transition-opacity duration-150 ease-linear group px-2 py-2 text-base bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-amber-800/40 hover:border-[#f2b705]/50 hover:shadow-lg hover:shadow-[#f2b705]/20 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start'>
                <span className='text-xl'>{iconMap[lang] || <span>📦</span>}</span>
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col mr-4'>
          <h3 className='text-[#fb7e14] text-2xl mb-3'>Backend</h3>
          <div className='h-[2px] bg-[#fb7e14] opacity-30 '></div>
          <ul className='mt-4'>
            {data.backend.languages.map(lang => (
              <li key={lang} className='w-full mb-[6px] text-[#f2b705] left-0 top-0 [text-shadow:0_0_8px_rgba(242,183,5,0.66)] transition-opacity duration-150 ease-linear group px-2 py-2 text-base bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-amber-800/40 hover:border-[#f2b705]/50 hover:shadow-lg hover:shadow-[#f2b705]/20 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start'>
                <span className='text-xl'>{iconMap[lang] || <span>📦</span>}</span>
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col mr-4'>
          <h3 className='text-[#fb7e14] text-2xl mb-3'>DevOps</h3>
          <div className='h-[2px] bg-[#fb7e14] opacity-30 '></div>
          <ul className='mt-4 '>
            {data.devOps.languages.map(lang => (
              <li key={lang} className='w-full mb-[6px] text-[#f2b705] left-0 top-0 [text-shadow:0_0_8px_rgba(242,183,5,0.66)] transition-opacity duration-150 ease-linear group px-2 py-2 text-base bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-amber-800/40 hover:border-[#f2b705]/50 hover:shadow-lg hover:shadow-[#f2b705]/20 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start'>
                <span className='text-xl'>{iconMap[lang] || <span>📦</span>}</span>
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col mr-4'>
          <h3 className='text-[#fb7e14] text-2xl mb-3'>Other</h3>
          <div className='h-[2px] bg-[#fb7e14] opacity-30 '></div>
          <ul className='mt-4 '>
            {data.other.languages.map(lang => (
              lang && (
                <li key={lang} className='w-full mb-[6px] text-[#f2b705] left-0 top-0 [text-shadow:0_0_8px_rgba(242,183,5,0.66)] transition-opacity duration-150 ease-linear group px-2 py-2 text-base bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-amber-800/40 hover:border-[#f2b705]/50 hover:shadow-lg hover:shadow-[#f2b705]/20 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start'>
                  <span className='text-xl'>{iconMap[lang] || <span>📦</span>}</span>
                  {lang}
                </li>
              )
            ))}
          </ul>
        </div>

        <div className='flex flex-col mr-4'>
          <h3 className='text-[#fb7e14] text-2xl mb-3'>Langs want 2 learn</h3>
          <div className='h-[2px] bg-[#fb7e14] opacity-30 '></div>
          <ul className='mt-4'>
            {data.interested.languages.map(lang => (
              <li key={lang} className='w-full mb-[6px] text-[#f2b705] left-0 top-0 [text-shadow:0_0_8px_rgba(242,183,5,0.66)] transition-opacity duration-150 ease-linear group px-2 py-2 text-base bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-[#f2b705]/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-800/40 hover:to-amber-800/40 hover:border-[#f2b705]/50 hover:shadow-lg hover:shadow-[#f2b705]/20 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start'>
                <span className='text-xl'>{iconMap[lang] || <span>📦</span>}</span>
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills