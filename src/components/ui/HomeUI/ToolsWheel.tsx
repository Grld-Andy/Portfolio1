import React from 'react'
import { motion } from "motion/react"
import { design, figma, framer, github, illustrator, itunes, obs, photoshop, ps, threads, vscode, x } from '../../../constants/motion'

const ToolsWheel: React.FC = () => {
  return (
    <div className='md:mt-52 mt-20'>
      <div className='flex items-center justify-center relative'>
        <motion.div
          initial={{}}
          animate={{
            transition: {duration: 2}
          }}
          className='border scale-100 md:scale-125 rounded-full w-[600px] h-[600px] flex items-center justify-center relative'>
          
          <motion.img
            initial={{x:itunes.position.x,y:itunes.position.y}}
            animate={{
              x:[itunes.position.x,x.position.x,framer.position.x,vscode.position.x,obs.position.x,threads.position.x,itunes.position.x],
              y:[itunes.position.y,x.position.y,framer.position.y,vscode.position.y,obs.position.y,threads.position.y,itunes.position.y],
              transition: {duration: 10, times: [0,0.1,0.2,0.3,0.4,0.5,0.6], ease: 'easeIn', repeat: Infinity, repeatDelay: 0.5}
            }}
            className='w-14 h-14 absolute' src={itunes.image}/>
          <motion.img
            initial={{x:github.position.x,y:github.position.y}}
            animate={{
              x:[github.position.x,illustrator.position.x,design.position.x,ps.position.x,figma.position.x,photoshop.position.x,github.position.x],
              y:[github.position.y,illustrator.position.y,design.position.y,ps.position.y,figma.position.y,photoshop.position.y,github.position.y],
              transition: {duration: 10, times: [0,0.1,0.2,0.3,0.4,0.5,0.6], ease: 'easeIn', repeat: Infinity, repeatDelay: 0.5}
            }}
            className='w-14 h-14 absolute rounded-lg' src={github.image}/>
          <motion.img
            initial={{x:x.position.x,y:x.position.y}}
            animate={{
              x:[x.position.x,framer.position.x,vscode.position.x,obs.position.x,threads.position.x,itunes.position.x,x.position.x],
              y:[x.position.y,framer.position.y,vscode.position.y,obs.position.y,threads.position.y,itunes.position.y,x.position.y],
              transition: {duration: 10, times: [0,0.1,0.2,0.3,0.4,0.5,0.6], ease: 'easeIn', repeat: Infinity, repeatDelay: 0.5}
            }}
            className='w-14 h-14 absolute rounded-lg' src={x.image}/>

          <motion.img
            initial={{x:illustrator.position.x,y:illustrator.position.y}}
            animate={{
              x:[illustrator.position.x,design.position.x,ps.position.x,figma.position.x,photoshop.position.x,github.position.x,illustrator.position.x],
              y:[illustrator.position.y,design.position.y,ps.position.y,figma.position.y,photoshop.position.y,github.position.y,illustrator.position.y],
              transition: {duration: 10, times: [0,0.1,0.2,0.3,0.4,0.5,0.6], ease: 'easeIn', repeat: Infinity, repeatDelay: 0.5}
            }}
            className='w-14 h-14 absolute' src={illustrator.image}/>
          <motion.img className='w-14 h-14 absolute bottom-[125px] right-[15px] rounded-lg' src='/icons/framer.png'/>
          <motion.img className='w-14 h-14 absolute bottom-[15px] right-[125px] rounded-lg' src='/icons/Design.png'/>

          <motion.img className='w-14 h-14 absolute bottom-[-30px]' src='/icons/Coding.png'/>
          <motion.img className='w-14 h-14 absolute bottom-[15px] left-[125px] rounded-lg' src='/icons/ps.png'/>
          <motion.img className='w-14 h-14 absolute bottom-[125px] left-[15px] rounded-lg' src='/icons/OBS.png'/>

          <motion.img className='w-14 h-14 absolute left-[-30px]' src='/icons/Figma icon.svg'/>
          <motion.img className='w-14 h-14 absolute top-[125px] left-[15px] rounded-lg' src='/icons/Group 2038.png'/>
          <motion.img className='w-14 h-14 absolute top-[15px] left-[125px] rounded-lg' src='/icons/Photoshop.png'/>
        
        </motion.div>
        <h2 className='text_gradient0 absolute font-extrabold text-[55px] md:text-[75px] uppercase text-center'>
          Let's create<br/>
          together
        </h2>
      </div>
      <div className='flex justify-center mt-56 mb-10'>
        <button className='border-[2px] border-[#75757A] text-[#75757A] hover:text-white hover:border-white transition rounded-full text-[25px] font-semibold px-10 py-2'>
          My Tools +
        </button>
      </div>
    </div>
  )
}

export default ToolsWheel