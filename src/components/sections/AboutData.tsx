

import React from 'react'


const AboutData = () => {
  return (
    <div className='w-125'>
          
          <div className='w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl'>
          <img src={"profile.png"} alt='Armandas Latanauskas' className='rounded-[100%] w-full h-full object-cover'></img>  
          </div>
          <button className='bg-white text-black'><a href='random.pdf' download="/files/resume.pdf"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg></span>Resume</a></button>
          

          <button className='bg-[#0a66c2]'>LinkedIn</button>
          <button className='bg-[#333]'>Github</button>
    </div>
  )
}

export default AboutData