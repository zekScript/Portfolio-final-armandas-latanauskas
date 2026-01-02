import React from 'react'
import { data } from '@/app/data/data'
const Skills = () => {
  console.log()
  return (
    <div>
            <div className='grid grid-cols-5'>
                        <div className='flex flex-col '>
                                    <h3>FrontEnd</h3>
                                    <ul className='mt-4'>
                                                
                                                          {data.frontend.languages.map(lang => (
                                                            <li key={lang}>
                                                                {lang}
                                                            </li>
                                                          ))}
                                                
                                    </ul>
                        </div>
                        <div className='flex flex-col'>
                                    <h3>Backend</h3>
                                    <ul className='mt-4'>
                                                {data.backend.languages.map(lang => (
                                                            <li key={lang}>
                                                                {lang}
                                                            </li>
                                                          ))}
                                    </ul>
                        </div>
                        <div className='flex flex-col'>
                                    <h3>DevOps</h3>
                                    <ul className='mt-4'>
                                                {data.devOps.languages.map(lang => (
                                                            <li key={lang}>
                                                                {lang}
                                                            </li>
                                                          ))}
                                    </ul>
                                    
                        </div>
                        <div className='flex flex-col'>
                                    <h3>Other</h3>
                                    <ul className='mt-4'>
                                                {data.other.languages.map(lang => (
                                                            <li key={lang}>
                                                                {lang}
                                                            </li>
                                                          ))}
                                    </ul>
                        </div>
                        <div className='flex flex-col'>
                                    <h3>Looking to learn new languages</h3>
                                    <ul className='mt-4'>
                                                {data.interested.languages.map(lang => (
                                                            <li key={lang}>
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