import React from 'react'
import Hero from '../components/ui/HomeUI/Hero'
import CardGrid from '../components/ui/HomeUI/CardGrid'
import LetsConnect from '../components/ui/HomeUI/LetsConnect'
import ToolsWheel from '../components/ui/HomeUI/ToolsWheel'

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