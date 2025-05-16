import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='border-t-[1px] border-[#75757A] mt-10 mb-10 md:mb-0 px-10 flex justify-between flex-col md:flex-row'>
        <div>
            <h1 className='jedira relative left-[-20px] text-[100px] md:text-[200px]'>ed.win</h1>
            <h1 className='text-[#75757A] text-[10px] relative bottom-5 left-[-15px] md:bottom-10 md:left-5'>@2025 ed.win</h1>
        </div>
        <div className='flex gap-10 md:gap-20 mt-5 md:mr-14 justify-end'>
            <section>
                <h3 className='font-bold'>Links</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='text-[#F5F5F7] text-[14px]'>Home</li>
                    <li className='text-[#F5F5F7] text-[14px]'>Projects</li>
                    <li className='text-[#F5F5F7] text-[14px]'>About</li>
                </ul>
            </section>
            <section>
                <h3 className='font-bold'>Networks</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='text-[#F5F5F7] text-[14px]'>My Site</li>
                    <li className='text-[#F5F5F7] text-[14px]'>Behance</li>
                    <li className='text-[#F5F5F7] text-[14px]'>Linkedin</li>
                    <li className='text-[#F5F5F7] text-[14px]'>Instagram</li>
                    <li className='text-[#F5F5F7] text-[14px]'>Twitter</li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default Footer