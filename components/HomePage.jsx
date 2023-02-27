import React from 'react'
import { useRouter } from 'next/router'
import HeroSection from './HeroSection'
import NavigationBar from './NavigationBar'

function HomePage() {
  const router = useRouter();
    console.log()
  return (
    
    <>
        <div className='HomePageSection'>
            <NavigationBar />
            <HeroSection />
        </div>
        
    </>
  )
}

export default HomePage
