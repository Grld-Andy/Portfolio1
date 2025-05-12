import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='border-t-[1px] border-[#75757A] mt-10 px-10 flex justify-between'>
        <div>
            <h1 className='jedira text-[200px]'>ed.win</h1>
            <h1 className='text-[#75757A] text-[10px]'>@2025 ed.win</h1>
        </div>
        <div className='flex gap-20 mt-5 mr-14'>
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