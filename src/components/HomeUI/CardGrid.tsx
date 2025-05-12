import React from 'react'
import Card from '../ui/Card'

const CardGrid: React.FC = () => {
  return (
    <div className='mx-5 grid grid-cols-3 gap-10'>
      {
        Array.from({length: 9}).map((_card, index) => (
          <Card key={index}/>
        ))
      }
    </div>
  )
}

export default CardGrid