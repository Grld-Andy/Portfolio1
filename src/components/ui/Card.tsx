import React from 'react'
import type { Work } from '../../types/Work'

interface Props{
  work: Work
}

const Card: React.FC<Props> = ({work}) => {
  return (
    <div className='aspect-square p-2 rounded-lg bg-[#1D1D1F] group'>
      <div className='rounded-lg overflow-hidden h-full'>
        <img src={work.image} className='w-full h-full object-cover group-hover:scale-110 transition duration-300' />
      </div>
      <h2 className='text-[#75757A] uppercase mt-2'>{work.name}</h2>
    </div>
  )
}

export default Card