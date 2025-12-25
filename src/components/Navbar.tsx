import React from 'react'

const Navbar = () => {
  return (
   <div className='fixed left-0 top-0 z-50 w-full bg-[#FAFAFA] bg-opacity-60 backdrop-blur-sm dark:bg-[#0e0e0e] dark:bg-opacity-50 p-4'>
      
      <nav>
            <ul className='flex  gap-52 justify-center text-xl text-slate-300'>
                        <li>
                                    <a href='#about' className='hover:text-orange-300 transform duration-300 '>About </a>
                        </li>
                        <li>
                                    <a href='#skills' className='hover:text-orange-300 transform duration-300 '>Skills </a>
                        </li>
                        <li>
                                    <a href='#xp' className='hover:text-orange-300 transform duration-300 '>Experience </a>
                        </li>
                        <li>
                                    <a href='#projects' className='hover:text-orange-300 transform duration-300 '>Projects </a>
                        </li>
            </ul>
      </nav>
      
    </div>
  )
}

export default Navbar