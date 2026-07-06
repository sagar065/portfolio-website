import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { HashLink as Link } from 'react-router-hash-link'
import { image } from "../../assets/data"
import { MdOutlineNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const NavBar = () => {
    const[showMenu, setShowMenu] = useState(false)

    const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={`w-full z-50 fixed py-4 px-8 shadow-lg 
                    ${theme === "light" ? " bg-white shadow-md shadow-richblack-600" : "bg-richblack-900 backdrop-blur-sm"} `}>
        <nav className='flex justify-between items-center container mx-auto text-pure-greys-25'>
            
            <div className='flex space-x-3 md:space-x-6 items-center'>
                <Link to="#" className='flex items-center'>
            
                    <h3 className={`text-2xl font-bold md:3xl
                    ${theme === "light" ? "text-richblack-900" : "  text-pure-greys-25"}`}>
                        Sagar
                        <span className="text-blue-500">Singh</span>
                    </h3>

                    <img src={image.codeImg} alt="Code" className='w-8 h-8 md:w-10 md:h-10 '/>
                
                </Link>

                <div>
                    <button 
                    onClick={toggleTheme} 
                    className='text-2xl'
                    >
                        {
                            theme === "light" ? (<MdOutlineNightlight className='text-black/80 transition duration-300 hover:text-purple'/>) : (<MdLightMode className='text-pure-greys-25 transition duration-300 hover:text-purple'/>)
                        }
                    </button>
                </div>
            </div>
            
            <div>
                <ul className=' hidden md:flex space-x-8'>
                    <li className={`relative font-semibold transition duration-300 hover:text-purple group
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                        <Link to="#Home">Home</Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300"></span>
                           
                    </li>
                    
                    <li className={`relative font-semibold transition duration-300 hover:text-purple group
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                        <Link to="#About" >About</Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300"></span>
                    </li>
                    
                    <li className={`relative font-semibold transition duration-300 hover:text-purple group
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                        <Link to="#Skills" >Skills</Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300"></span>
                    </li>
                    
                    <li className={`relative font-semibold transition duration-300 hover:text-purple group
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                        <Link to="#Projects">Projects</Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300"></span>
                    </li>
                    
                    
                    <li className={`relative font-semibold transition duration-300 hover:text-purple group
                    ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}>
                        <Link to="#Contact">Contact</Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300"></span>
                    </li>
                </ul>
                
                {/* Mobile View */}
                <div className={`md:hidden text-2xl cursor-pointer
                        ${theme === "light" ? " text-richblack-900" : "text-pure-greys-25"}`}>
                    {
                        showMenu ? 
                        <FaXmark onClick={()=> setShowMenu(!showMenu)} 
                        />
                        :
                        <FaBars onClick={()=> setShowMenu(!showMenu)} 
                        />
                    }
                        
                </div>
            </div>
        </nav>
        
        {/* Mobile Menus */}
        
        {
            showMenu && 
            (
                    <ul className={`md:hidden mt-4  h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center
                    ${theme === "light" ? "bg-white" : "bg-dark-300"}`}>
                        <li className={`relative font-semibold transition duration-300 hover:text-purple group
                            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`} 
                            onClick={()=> setShowMenu(!showMenu)}>
                            <Link to="#Home">Home</Link>    
                        </li>
                        
                        <li className={`relative font-semibold transition duration-300 hover:text-purple group
                            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}
                            onClick={()=> setShowMenu(!showMenu)}>
                            <Link to="#About">About</Link>
                        </li>
                        
                        <li className={`relative font-semibold transition duration-300 hover:text-purple group
                            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`} 
                            onClick={()=> setShowMenu(!showMenu)}>
                            <Link to="#Skills">Skills</Link>
                        </li>
                        
                        <li className={`relative font-semibold transition duration-300 hover:text-purple group
                            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}
                            onClick={()=> setShowMenu(!showMenu)}>
                            <Link to="#Projects">Projects</Link>
                        </li>
                        
                        
                        <li className={`relative font-semibold transition duration-300 hover:text-purple group
                            ${theme === "light" ? "text-richblack-900" : "text-pure-greys-25"}`}
                            onClick={()=> setShowMenu(!showMenu)}>
                            <Link to="#Contact">Contact</Link>
                        </li>
                    </ul>
                
            ) 

        }
    </div>
  )
}

export default NavBar