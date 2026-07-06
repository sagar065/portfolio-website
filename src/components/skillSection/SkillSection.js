import React from 'react'
import { motion } from "framer-motion"
import { skills } from "../../assets/data"
import SkillCard from '../skillSection/SkillCard'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'

const SkillSection = () => {

    const { theme } = useContext(AppContext)
  
    return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut"}}
        viewport={{once: false, amount:0.2}}
        id="Skills"
        className='py-20'>

        <div className='container mx-auto px-6'>
                    <h2 className={`text-3xl font-bold text-center mb-4
                     ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                        My
                        <span className='text-blue-500'> Skills</span>
                    </h2>
                    
                    <p className={`text-center max-w-2xl mx-auto mb-16 font-edu-sa
                    ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                        Technologies I work with to bring ideas to life
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {
                            skills.map((skill,index) => (
                                <SkillCard skill={skill} key={index}/>
                            ))
                        }

                    </div>
        
        </div>

    </motion.div>
  )
}

export default SkillSection