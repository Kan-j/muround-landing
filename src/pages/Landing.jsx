import React from 'react'
import HeroSection from './HeroSection'
import Benefits from './Benefits'
import UnlockMuRound from '../components/UnlockMuRound'
import FeaturesList from '../components/FeaturesList'
import Testimonial from '../components/Testimonial'
import SocialMediaHandle from '../components/SocialMediaHandle'

const Landing = () => {
  return (
    <section>
        <HeroSection/>
        <Benefits/>
        <FeaturesList/>
        <UnlockMuRound/>
        <Testimonial/>
        <SocialMediaHandle/>
    </section>
  )
}

export default Landing