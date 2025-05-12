import React from 'react'

const Navbar: React.FC = () => {
  return (
    <>
      <div className='flex justify-between items-center px-10 py-4'>
          <ul className='flex gap-8'>
              <li className='cursor-pointer'>HOME</li>
              <li className='cursor-pointer'>ABOUT</li>
              <li className='cursor-pointer'>STUDIO</li>
          </ul>
          <button className='bg-[#7232B8] w-[120px] cursor-pointer rounded-lg py-[10px] text-[12px] font-semibold'>
              Get In Touch
          </button>
      </div>
      <div className='absolute top-3 left-0 w-full'>
          <h1 className='text-center text-[25px] jedira'>ed.win</h1>
      </div>
    </>
  )
}

export default Navbar