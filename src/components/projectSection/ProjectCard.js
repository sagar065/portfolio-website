import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { AppContext } from '../../context/AppContext'

const ProjectCard = ({project}) => {

    const { theme } = useContext(AppContext)
  return (
    <div className={`rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full
    ${theme === "light" ? "border border-purple bg-purple/20" : "bg-richblack-800"}`}>
        <img src={project.image} alt={project.title} className='h-60 w-full object-cover'></img>

        <div className='p-6 flex flex-col justify-between flex-grow'>
            <div>
                <h3 className={`text-xl font-semibold mb-2
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                    {project.title}
                </h3>
                

                <p className={`mb-4 font-edu-sa
                    ${theme === "light" ? " text-richblack-800 font-edu-sa" : "text-pure-greys-100 font-edu-sa"}`}>
                    {project.description}
                </p>

                <div className=' flex flex-wrap gap-2 mb-4'>
                    {
                        project.tech.map((tag,index) => (
                            <span key={index} className={`px-3 py-1 rounded-full text-sm font-edu-sa
                                ${theme === "light" ? " bg-richblack-300" : "bg-richblack-700 text-pure-greys-100"}`}>
                                {tag}
                            </span>
                        ))
                    }
                </div>
            </div>

            
            <div className='flex gap-2'>
                <Link to='#Home' className={`flex-1 text-center px-4 py-2 rounded-lg font-medium transition duration-300
                ${theme === "light" ? " text-richblack-900 bg-richblue-200 border border-purple hover:bg-richblue-400 " : " text-pure-greys-25 bg-richblack-500 hover:bg-richblack-700"}`}>
                    View Demo
                </Link>
                
                <a href={project.code} target='_blank' rel='noopener noreferrer' 
                className={`flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300
                ${theme === "light" ? "text-richblack-900 bg-richblue-200 border border-purple hover:bg-richblue-400" : "text-pure-greys-25 bg-richblack-500 hover:bg-richblack-700"}`}>
                    Code
                </a>
            </div>
        </div>

        
    </div>
  )
}

export default ProjectCard