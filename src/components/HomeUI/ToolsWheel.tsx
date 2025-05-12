import React from 'react'

const ToolsWheel: React.FC = () => {
  return (
    <div className='md:mt-52 mt-20'>
      <div className='flex items-center justify-center relative'>
        <div className='scale-100 md:scale-125 rounded-full w-[600px] h-[600px] flex items-center justify-center relative'>
          <img className='w-14 h-14 absolute top-[-30px]' src='/icons/itunes.png'/>
          <img className='w-14 h-14 absolute top-[15px] right-[125px] rounded-lg' src='/icons/github.png'/>
          <img className='w-14 h-14 absolute top-[125px] right-[15px] rounded-lg' src='/icons/x.png'/>

          <img className='w-14 h-14 absolute left-[-30px]' src='/icons/Figma icon.svg'/>
          <img className='w-14 h-14 absolute bottom-[15px] left-[125px] rounded-lg' src='/icons/ps.png'/>
          <img className='w-14 h-14 absolute bottom-[125px] left-[15px] rounded-lg' src='/icons/OBS.png'/>

          <img className='w-14 h-14 absolute bottom-[-30px]' src='/icons/Coding.png'/>
          <img className='w-14 h-14 absolute bottom-[15px] right-[125px] rounded-lg' src='/icons/Design.png'/>
          <img className='w-14 h-14 absolute bottom-[125px] right-[15px] rounded-lg' src='/icons/framer.png'/>

          <img className='w-14 h-14 absolute right-[-30px]' src='/icons/illustrator.png'/>
          <img className='w-14 h-14 absolute top-[15px] left-[125px] rounded-lg' src='/icons/Photoshop.png'/>
          <img className='w-14 h-14 absolute top-[125px] left-[15px] rounded-lg' src='/icons/Group 2038.png'/>
        </div>
        <h2 className='text_gradient0 absolute font-extrabold text-[55px] md:text-[75px] uppercase text-center'>
          Let's create<br/>
          together
        </h2>
      </div>
      <div className='flex justify-center mt-36 mb-10'>
        <button className='border-[2px] border-[#75757A] text-[#75757A] hover:text-white hover:border-white transition rounded-full text-[25px] font-semibold px-10 py-2'>
          My Tools +
        </button>
      </div>
    </div>
  )
}

export default ToolsWheel