import React from 'react'

const Card: React.FC = () => {
  return (
    <div className='aspect-square p-2 rounded-lg bg-[#1D1D1F]'>
      <div className='rounded-lg overflow-hidden h-full'>
        <img src='/images/cup.png' className='w-full h-full object-cover' />
      </div>
      <h2 className='text-[#75757A] uppercase mt-2'>Name of product</h2>
    </div>
  )
}

export default Card