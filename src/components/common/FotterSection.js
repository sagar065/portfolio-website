import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const FotterSection = () => {

  const { theme } = useContext(AppContext)
  
  return (
    <div className={`py-8 
    ${theme === "light" ? "bg-white border-2 " : "bg-richblack-800 "}`}>
        <div className='conatainer mx-auto px-6 text-center'>
            <p className={`${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>© 2026 Created By Sagar Singh. All rights reserved.</p>
        </div>
    </div>
  )
}

export default FotterSection