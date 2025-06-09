import React from 'react'
import works from '../constants/works'
import Card from '../components/ui/Card'
import HeroW from '../components/ui/WorkUI/HeroW'
import Showcase from '../components/ui/WorkUI/Showcase'

const Work: React.FC = () => {
  return (
    <div className='flex flex-col gap-20 mx-5 md:mx-20 lg:mx-40 xl:mx-60'>
      <HeroW/>
      <Showcase/>
      <div className="flex scrollbar-hide overflow-x-auto pb-4 gap-4">
        {works.map((work, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: '300px' }}>
            <Card work={work} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work