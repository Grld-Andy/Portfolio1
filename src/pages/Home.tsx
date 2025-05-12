import React from 'react'
import Hero from '../components/HomeUI/Hero'
import CardGrid from '../components/HomeUI/CardGrid'
import LetsConnect from '../components/HomeUI/LetsConnect'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Hero/>
      <CardGrid/>
      <LetsConnect/>
    </div>
  )
}

export default Home