import React from 'react'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'


const SkillCard = ({skill}) => {

    const { theme } = useContext(AppContext)

  return (
    <div className={`rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer
    ${theme === "light" ? "border border-purple bg-purple/20 hover:bg-purple-500" : "bg-richblack-800 hover:bg-purple-700"}`}>
        <div className='flex space-x-6 items-center mb-4'>
            <skill.icon className="w-12 h-12 text-blue-500"/>
            <h3 className={`text-xl font-semibold
            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                {skill.title}
            </h3>
        </div>

        <p className={`mb-4
        ${theme === "light" ? " text-richblack-800 font-edu-sa" : "text-pure-greys-100 font-edu-sa"}`}>
            {skill.description}
        </p>

        <div className=' flex gap-2 flex-wrap'>
            {
                skill.tags.map((tag,index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm font-edu-sa
                    ${theme === "light" ? " bg-richblack-300" : "bg-richblack-700 text-pure-greys-100"}`}>
                        {tag}
                    </span>
                ))
            }
        </div>
    </div>

   
  )
}

export default SkillCard