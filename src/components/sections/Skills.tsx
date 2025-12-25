import React from 'react'

const Skills = () => {
  return (
    <div>
            <div className='grid grid-cols-8'>
                        <div className='flex flex-col'>
                                    <h3>FrontEnd</h3>
                                    <ul>
                                                <li>
                                                            React
                                                </li>
                                    </ul>
                        </div>
                        <div className='flex flex-col'>
                                    <h3>Backend</h3>
                                    <ul>
                                                <li>
                                                            Sql
                                                </li>
                                    </ul>
                        </div>
                        <div className='flex flex-col'>
                                    <h3>DevOps</h3>
                                    <ul>
                                                <li>
                                                            CI/CL
                                                </li>
                                    </ul>
                                    
                        </div>
                        <div className='flex flex-col'>
                                    <h3>Other</h3>
                                    <ul>
                                                <li>
                                                            Git/Github
                                                </li>
                                    </ul>
                        </div>
            </div>
    </div>
  )
}

export default Skills