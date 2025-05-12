import React from 'react'
import { motion } from "motion/react"
import { design, figma, framer, github, illustrator, itunes, keyframeTimes, obs, photoshop, ps, threads, vscode, x } from '../../../constants/motion'

const ToolsWheel: React.FC = () => {
  return (
    <div className='md:mt-52 pt-20 overflow-x-hidden max-w-full'>
      <div className='flex items-center justify-center relative'>
        <motion.div
          initial={{scale:1}}
          animate={{
            scale: [1, 1, 0.4, 0.4, 1, 1],
            transition: {
              duration: 8,
              times: [0, 0.83, 0.855, 0.87, 0.89, 1],
              // times: [0, 0.84, 0.87, 0.89, 0.91, 1],
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.5,
            },
          }}>
          <motion.div
            initial={{rotate:0}}
            animate={{
              rotate: [0, 0, 30, 30, 0],
              transition: {
                duration: 8,
                times: [0, 0.85, 0.90, 0.92, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className='scale-100 md:scale-125 rounded-full w-[600px] h-[600px] flex items-center justify-center relative'>
            {[
              { img: itunes, path: [itunes, x, framer, vscode, obs, threads, itunes] },
              { img: github, path: [github, illustrator, design, ps, figma, photoshop, github] },
              { img: x, path: [x, framer, vscode, obs, threads, itunes, x] },
              { img: illustrator, path: [illustrator, design, ps, figma, photoshop, github, illustrator] },
              { img: framer, path: [framer, vscode, obs, threads, itunes, x, framer] },
              { img: design, path: [design, ps, figma, photoshop, github, illustrator, design] },
              { img: vscode, path: [vscode, obs, threads, itunes, x, framer, vscode] },
              { img: ps, path: [ps, figma, photoshop, github, illustrator, design, ps] },
              { img: obs, path: [obs, threads, itunes, x, framer, vscode, obs] },
              { img: figma, path: [figma, photoshop, github, illustrator, design, ps, figma] },
              { img: threads, path: [threads, itunes, x, framer, vscode, obs, threads] },
              { img: photoshop, path: [photoshop, github, illustrator, design, ps, figma, photoshop] }
            ].map(({ img, path }, i) => {
              const keyframes = path.flatMap(p => [p.position.x, p.position.x]);
              const keyframesY = path.flatMap(p => [p.position.y, p.position.y]);
              return (
                <motion.img
                  key={i}
                  initial={{ x: path[0].position.x, y: path[0].position.y }}
                  animate={{
                    x: [...keyframes],
                    y: [...keyframesY],
                  transition: {
                    duration: 8,
                    times: keyframeTimes,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }
                  }}
                  className='w-14 h-14 absolute rounded-lg'
                  src={img.image}
                />
              );
            })}
          </motion.div>
        </motion.div>

        <h2 className='text_gradient0 absolute font-extrabold text-[55px] md:text-[75px] uppercase text-center'>
          Let's create<br/>
          together
        </h2>
      </div>
      <div className='flex justify-center mt-56 mb-10'>
        <button className='border-[2px] border-[#75757A] text-[#75757A] button_glow rounded-full text-[25px] font-semibold px-10 py-2'>
          My Tools +
        </button>
      </div>
    </div>
  )
}

export default ToolsWheel