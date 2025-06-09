import React from 'react'
import showcases from '../../../constants/showcases'
import cn from 'classnames';

const Showcase: React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      {
        showcases.map((showcase, index) => (
          <div key={index} className='flex flex-col gap-8'>
            <div className='rounded-md bg-[#1A181859] flex justify-between px-5 py-2 items-center'>
              <div className='flex gap-3 items-center'>
                <img src={showcase.icon} alt='logo' className='w-8 h-8' />
                <h2 className='font-bold'>{showcase.name}</h2>
              </div>
              <div>
                <h2 className='font-bold'>Type-{showcase.type}</h2>
              </div>
            </div>
            <div className='px-9 w-full h-full flex items-center justify-center'>
              <img src={showcase.image} alt='work' className='w-full h-full object-cover rounded-md' />
            </div>
            <div className='grid px-9 items-center gap-3 grid-cols-[1fr_35px_1fr]'>
              <div className='py-auto h-[1px] bg-white/30 w-full'></div>
              <div className='rounded-full bg-white overflow-hidden w-[35px] h-[35px] flex items-center justify-center'>
                <img
                  src={showcase.icon}
                  alt='logo'
                  className={cn(
                    'w-[40px] h-[40px] filter',
                    showcase.negative ? 'bg-gray-900' : 'bg-white'
                  )}
                  />
              </div>
              <div className='h-[1px] bg-white/30 w-full'></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Showcase