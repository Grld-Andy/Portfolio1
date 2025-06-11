import React from 'react'
import {FourBars, FourBarsReverse} from '../FourBars'

const Hero: React.FC = () => {
    return (
        <div className='w-full mt-20 flex gap-8 items-center justify-center flex-col'>
            <div className='px-3 sm:px-0 flex items-center gap-5'>
                <FourBars/>
                <h1 className='text-[50px] md:text-[95px] text-center font-semibold relative bottom-2'>click To Explore</h1>
                <FourBarsReverse/>
            </div>
            <div className='flex w-full px-5 sm:px-0 sm:w-max sm:gap-[200px] md:gap-[450px] justify-between items-center text-[#75757A] text-[15px] uppercase'>
                <p>
                    UI/UX Designer<br/>
                    Specializing in Framer<br/>
                    Customization —<br/>
                    Based in Ghana
                </p>
                <p>
                    Together, let's create.
                </p>
            </div>
        </div>
    )
}

export default Hero