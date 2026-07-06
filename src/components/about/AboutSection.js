import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { image } from "../../assets/data"
import { aboutInfo } from '../../assets/data'
import { AppContext } from '../../context/AppContext'



const AboutSection = () => {

    const { theme } = useContext(AppContext)
  
    return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut"}}
        viewport={{once: false, amount:0.2}}
        id="About"
        className="pt-2 pb-20 md:pt-4"
    >
        <div className="container mx-auto px-6">
            <h2 className={`text-3xl font-bold text-center mb-4
            ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>About
                     <span className='text-blue-500'> Me</span>
            </h2>
            
            <p className={`font-edu-sa text-center max-w-2xl mx-auto mb-8
            ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                Get to know more about my background and passion
            </p>

            <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* left content */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease:"easeOut"}}
                    viewport={{once: false, amount:0.2}}
                    className='w-full h-full object-cover'
                    src={image.banner}   
                    />    
                </div>
                
                {/* right content */}
                <motion.div
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease:"easeOut"}}
                    viewport={{once: false, amount:0.2}}
                    className='md:w-1/2'>
                    
                    <div className='p-8'>
                        <h3 className='text-3xl font-semibold mb-6 text-blue-500'>My Journey</h3>
                        <p className={`mb-6 font-edu-sa
                        ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                            I'm a passionate full-stack developer with over 1.5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.
                        </p>

                        <p className={`mb-6 font-edu-sa
                        ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        </p>

                        {/* cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data,index)=>(
                                    <div className={`rounded-2xl p-5 transition duration-300 hover:-translate-y-2 cursor-pointer
                                    ${theme === "light" ? "border border-purple bg-purple/20 hover:bg-purple-500" : "bg-richblack-800 hover:bg-purple-700"}`} 
                                    key={index}>
                                            <div className='text-blue-500 text-4xl mb-4'>
                                                <data.icon/>
                                            </div>    
            
                                            <h3 className={`text-xl font-semibold mb-3
                                            ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}> {data.title} </h3>
                                            <p className={`font-edu-sa
                                            ${theme === "light" ? " text-richblack-800" : "text-pure-greys-100" }`}> {data.description} </p>
        
                                    </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default AboutSection