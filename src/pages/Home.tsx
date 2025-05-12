import React from 'react'
import Hero from '../components/HomeUI/Hero'
import CardGrid from '../components/HomeUI/CardGrid'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Hero/>
      <CardGrid/>
    </div>
  )
}

export default Home