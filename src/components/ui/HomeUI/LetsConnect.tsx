import React from 'react'
import FormApp from './FormApp'

const LetsConnect: React.FC = () => {
  return (
    <div className='flex flex-col gap-40'>
        <p className='uppercase text-center w-full text_gradient text-[38px] px-5 sm:px-0 sm:text-[45px] md:text-[65px]'>
            Designing Seamless<br/>
            Experiences & Stunning<br/>
            Visuals
        </p>
        <div className='flex justify-center'>
            <button className='border-[2px] border-[#75757A] text-[#75757A] button_glow rounded-full text-[25px] font-semibold px-10 py-2'>Lets Connect</button>
        </div>
        <div className='flex flex-col gap-5 md:gap-10'>
            <h3 className='text-center text-[50px] text-[#75757A] font-extrabold'>send a mail</h3>
            <div className='flex justify-center'>
                <FormApp/>
            </div>
            <div className='flex mx-10'>
                <div className='flex gap-10'>
                    <img className='w-[40px] md:w-[80px]' src='/icons/Figma icon.svg'/>
                    <img className='w-[40px] md:w-[80px]' src='/icons/github.svg'/>
                    <img className='w-[40px] md:w-[80px]' src='/icons/LinkedIn.svg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LetsConnect