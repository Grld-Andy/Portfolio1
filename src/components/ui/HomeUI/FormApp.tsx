import React from 'react'

const FormApp: React.FC = () => {
  return (
    <div className='rounded-lg bg-[#161616] min-w-[500px] md:min-w-[1000px]'>
        <div className='relative p-4 border-b-[1px] border-white/20'>
            <div className='flex gap-1'>
                <div className='bg-red-500 rounded-full w-3 h-3'></div>
                <div className='bg-yellow-500 rounded-full w-3 h-3'></div>
                <div className='bg-green-600 rounded-full w-3 h-3'></div>
            </div>
            <div className='text-center absolute top-2 w-full'>New message</div>
        </div>
        <form>
            <div className='border-b-[1px] border-white/20 pb-3'>
                <div className='flex mx-10 gap-5 border-b-[1px] border-white/20 py-3'>
                    <h3>Email: </h3>
                    <input type='email' className='bg-transparent active:outline-none focus-visible:outline-none placeholder:text-[#80808050]' placeholder='Enter your email address'/>
                </div>
                <div className='flex mx-10 gap-5 border-b-[1px] border-white/20 py-3'>
                    <h3>Name: </h3>
                    <input type='text' className='bg-transparent active:outline-none focus-visible:outline-none placeholder:text-[#80808050]' placeholder='Enter your name'/>
                </div>
                <div className='flex mx-10 gap-5 py-3'>
                    <h3>Subject: </h3>
                    <input type='text' className='bg-transparent active:outline-none focus-visible:outline-none placeholder:text-[#80808050]' placeholder='Enter subject'/>
                </div>
            </div>
            <div className='w-[calc(100%-80px)] mx-10 my-5 flex flex-col gap-5'>
                <textarea className='active:outline-none focus-visible:outline-none rounded-lg bg-[#0D0D0D] p-3 w-full h-[350px] placeholder:text-[#80808050]' placeholder='Write your message here'></textarea>
                <div className='flex justify-end'>
                    <button className='bg-[#7232B8] w-[120px] cursor-pointer rounded-lg py-[14px] text-[15px] font-semibold'>
                        Send
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormApp