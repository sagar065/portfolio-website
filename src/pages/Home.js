import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import AboutSection from "../components/about/AboutSection"
import SkillSection from '../components/skillSection/SkillSection'
import ProjectsSection from '../components/projectSection/ProjectsSection'
import ContactSection from '../components/contact/ContactSection'


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectsSection/>
        <ContactSection/>
    </div>
  )
}

export default Home