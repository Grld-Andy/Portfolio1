import React from 'react'

const HeroW: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center w-full'>
      <h2 className='w-full text_gradient0 font-bold text-[55px] md:text-[75px] text-center'>
        Brand Design
      </h2>
      <div className='bg-[#1D1D1F] p-3 rounded-md'>
        <img src='/images/works/branding.png' className='rounded-md'/>
      </div>
    </div>
  )
}

export default HeroW