import React from 'react'
import FormApp from './FormApp'

const LetsConnect: React.FC = () => {
  return (
    <div className='flex flex-col gap-40'>
        <div className='flex justify-center'>
            <button className='border-[2px] border-[#75757A] text-[#75757A] hover:text-white hover:border-white transition rounded-full text-[25px] font-semibold px-10 py-2'>Lets Connect</button>
        </div>
        <div className='flex flex-col gap-10'>
            <h3 className='text-center text-[50px] text-[#75757A] font-extrabold'>send a mail</h3>
            <div className='flex justify-center'>
                <FormApp/>
            </div>
            <div className='flex justify-center'>
                <div className='flex gap-10 md:gap-20 min-w-[500px] md:min-w-[1000px]'>
                    <img className='w-[50px] md:w-[80px]' src='/icons/Figma icon.svg'/>
                    <img className='w-[50px] md:w-[80px]' src='/icons/github.svg'/>
                    <img className='w-[50px] md:w-[80px]' src='/icons/LinkedIn.svg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LetsConnect