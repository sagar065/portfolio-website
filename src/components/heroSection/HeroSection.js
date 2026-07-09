import React from 'react'
import TypewriterOne from '../TypewriterOne'
import { motion } from 'framer-motion'
import resume  from "../heroSection/sagar_singh.pdf"
import OrbitAnimation from '../heroSection/OrbitAnimation'
import { useContext } from 'react'
import { AppContext } from "../../context/AppContext"
import { HashLink as Link } from 'react-router-hash-link'

const HeroSection = () => {

    const{ theme } = useContext(AppContext)
  
    return (
   <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease:"easeOut"}}
    viewport={{once: true}}
    id="Home"
    className="min-h-fit lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-20 lg:pb-15">
    <div className='w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6 lg:flex-row items-center justify-center lg:justify-between'>

            {/* left side content */}
            <div className='w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2'>
                
                <h1 className={`text-4xl md:text-5xl font-bold mb-4
                ${theme === "light" ? "text-richblack-900" : " text-pure-greys-25"}`}>
                    Hi, I'm
                    <span className=' text-blue-500 whitespace-nowrap '> Sagar Singh </span>
                </h1>
                
                <div className={`text-2xl md:text-4xl font-semibold mb-6
                ${theme === "light" ? " text-richblack-900" : "text-pure-greys-25"}`}>
                    <TypewriterOne/>
                </div>
                
                
                <p className={`text-lg font-edu-sa mb-8
                ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                    I create stunning web experiences with modern technologies and <br></br>innovative design.
                </p>
                
                <button className={`'mb-4 rounded-md px-5 py-1 font-semibold text-sm transition duration-300
                ${theme === "light" ? "bg-purple/20 text-richblack-900 border border-purple font-semibold hover:bg-purple-700 " : "bg-dark-300 text-pure-greys-25 hover:bg-purple-700"}`}>
                    <a href={resume} download='sagar_singh.pdf' className="font-edu-sa ">Download CV</a>
                </button>
                
                <div className='flex space-x-4 mt-4'>
                    <button className={`px-6 py-3 rounded-lg font-medium transition duration-300
                        ${theme === "light" ? "bg-purple/20 text-richblack-900 font-semibold border border-purple hover:bg-purple-700" : "border border-purple font-semibold text-pure-greys-25 hover:bg-purple-700"}`}>
                        <Link to="#Projects">View Work</Link>
                    </button>
                       
                        
                    <button className={`px-6 py-3 rounded-lg font-medium transition duration-300
                        ${theme === "light" ? "bg-purple/20 text-richblack-900 font-semibold border border-purple hover:bg-purple-700" : "border border-purple font-semibold text-pure-greys-25 hover:bg-purple-700"}`}>
                        <Link to="#Contact">Contact Me</Link>

                    </button>

                </div>

            </div>

            {/* Right side image */}
            <div className='w-full lg:w-1/2 flex justify-center mt-2 lg:mt-0'>
                <OrbitAnimation/>
            </div>
    </div>

   </motion.div>
  )
}

export default HeroSection