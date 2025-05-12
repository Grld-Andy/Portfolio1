import React from 'react'
import Card from '../ui/Card'
import works from '../../constants/works'

const CardGrid: React.FC = () => {
  return (
    <div className='mx-5 grid grid-cols-3 gap-10'>
      {
        works.map((work, index) => (
          <Card work={work} key={index}/>
        ))
      }
    </div>
  )
}

export default CardGrid