import React from 'react'
import Hero from '../components/HomeUI/Hero'
import CardGrid from '../components/HomeUI/CardGrid'
import LetsConnect from '../components/HomeUI/LetsConnect'
import ToolsWheel from '../components/HomeUI/ToolsWheel'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Hero/>
      <CardGrid/>
      <ToolsWheel/>
      <LetsConnect/>
    </div>
  )
}

export default Home