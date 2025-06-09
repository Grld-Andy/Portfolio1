import React from 'react'
import Card from '../Card'
import works from '../../../constants/works'

const CardGrid: React.FC = () => {
  return (
    <div className='px-5 grid grid-cols-3 gap-2 md:gap-10 w-full'>
      {
        works.map((work, index) => (
          <Card work={work} key={index}/>
        ))
      }
    </div>
  )
}

export default CardGrid