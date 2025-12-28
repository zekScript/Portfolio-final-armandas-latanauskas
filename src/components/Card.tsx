


import React from 'react'

interface PropType {
            title: String,
            img: any
}

const Card:React.FC<PropType> = ({title, img}) => {
  return (
    <div className='w-full gap-4 h-full bg-[#222231] rounded-[8%] '>
      <div>
        <div className='container flex flex-col '>
          <div>
          <img src={img} alt='Picture' className='w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl'></img>
        </div>
        <div className='p-4'>
          <p className='text-sm'>{title}</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card