import React from 'react'
import { projects } from "../../assets/data"
import ProjectCard from '../projectSection/ProjectCard'
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import { HashLink as Link } from 'react-router-hash-link'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'

const ProjectsSection = () => {

  const { theme } = useContext(AppContext)

  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut"}}
        viewport={{once: false, amount:0.05}}
        id="Projects"
        className='py-20'
        >

        <div className=' container mx-auto px-6'>
                  <h2 className={`text-3xl font-bold text-center mb-4
                     ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                      My
                      <span className='text-blue-500'> Projects</span>
                  </h2>
                    
                  <p className={`text-center max-w-2xl mx-auto mb-16 font-edu-sa
                    ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                        A selection of my recent work
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                      {
                        projects.map((project,index) => (
                          <ProjectCard key={index} project={project}/>
                        ))
                      }
                  </div>

                  <div className='text-center mt-12'>
                      <Link to='#Home' 
                      className={`inline-flex space-x-2 items-center px-6 py-3 rounded-lg transition duration-300 font-medium
                      ${theme === "light" ? " border border-purple bg-purple/20 hover:bg-purple text-richblack-900 font-semibold " : " text-pure-greys-25 bg-richblack-700 hover:bg-richblack-800"}`}>
                          <span>View More Projects</span>
                          <FaArrowRight/>
                      </Link>
                  </div>

        </div>

    </motion.div>
  )
}

export default ProjectsSection