import React from 'react'

export const FourBars: React.FC = () => {
  return (
    <div className='flex items-center gap-2'>
        <div className='rounded-full bg-white w-5 h-5 relative left-[3px]'></div>
        <div className='rounded-lg bg-white w-5 h-[80px]'></div>
        <div className='rounded-lg bg-white w-5 h-[140px]'></div>
        <div className='rounded-lg bg-white w-5 h-[80px]'></div>
    </div>
  )
}

export const FourBarsReverse: React.FC = () => {
  return (
    <div className='flex flex-row-reverse items-center gap-2'>
        <div className='rounded-full bg-white w-5 h-5 relative right-[3px]'></div>
        <div className='rounded-lg bg-white w-5 h-[80px]'></div>
        <div className='rounded-lg bg-white w-5 h-[140px]'></div>
        <div className='rounded-lg bg-white w-5 h-[80px]'></div>
    </div>
  )
}
