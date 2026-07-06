import React, { useContext, useRef } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import emailSender from '../../utility/emailSender'
import { AppContext } from '../../context/AppContext';


const ContactSection = () => {

    const { theme } = useContext(AppContext)

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const[message, setMessage] = useState('');

    const form = useRef();
    const { sendEmail } = emailSender(form,setName,setEmail,setSubject,setMessage);
 
    return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:"easeOut"}}
        viewport={{once: false, amount:0.05}}
        id="Contact"
        className='py-20'>

        <div className=' container mx-auto px-6'>
            <h2 className={`text-3xl font-bold text-center mb-4
            ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>Get In
                     <span className='text-blue-500'> Touch</span>
            </h2>
            
            <p className={`text-center max-w-2xl mx-auto mb-16 font-edu-sa
            ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
               Have a project in mind or want to collaborate? Let's talk!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                <div>
                    <form className='space-y-6' ref={form} onSubmit={sendEmail}>
                        
                        <div>
                           
                            <label>
                                <p className={`block mb-2 font-semibold
                                ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                                    Your Name
                                </p>

                                <input type="text"
                                name="userName"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your name'
                                className={`w-full rounded-lg px-4 py-3 outline-none focus:outline-none
                                ${theme === "light" ? " focus:bg-purple/20 bg-purple/20 autofill:shadow-[inset_0_0_0_1000px_#9333EA33] [--autofill-color:#000814] text-richblack-900 placeholder:text-richblack-500 border border-purple" 
                                : 
                                "bg-richblack-800 focus:bg-richblack-800 autofill:shadow-[inset_0_0_0_1000px_#161D29] placeholder:text-pure-greys-200 text-pure-greys-25 [--autofill-color:#E2E2E2] border border-dark-400"}`}
                                />
                                
                            </label>
                            
                        </div>

                        <div>
                            <label>
                                <p className={`block mb-2 font-semibold
                                ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                                    Email Address
                                </p>
                                <input type="email"
                                value={email}
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                className={`w-full rounded-lg px-4 py-3 outline-none focus:outline-none
                                ${theme === "light" ? " focus:bg-purple/20 bg-purple/20 autofill:shadow-[inset_0_0_0_1000px_#9333EA33] [--autofill-color:#000814] text-richblack-900 placeholder:text-richblack-500 border border-purple" 
                                : 
                                "bg-richblack-800 focus:bg-richblack-800 autofill:shadow-[inset_0_0_0_1000px_#161D29] placeholder:text-pure-greys-200 text-pure-greys-25 [--autofill-color:#E2E2E2] border border-dark-400"}`}
                                />
                            </label>
                               
                        </div>
                        <div>
                            <label>
                                <p className={`block mb-2 font-semibold
                                ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                                    Subject
                                </p>
                                <input type="text"
                                value={subject}
                                name="subject"
                                required
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder='Enter the subject'
                                className={`w-full rounded-lg px-4 py-3 outline-none focus:outline-none
                                ${theme === "light" ? " focus:bg-purple/20 bg-purple/20 autofill:shadow-[inset_0_0_0_1000px_#9333EA33] [--autofill-color:#000814] text-richblack-900 placeholder:text-richblack-500 border border-purple" 
                                : 
                                "bg-richblack-800 focus:bg-richblack-800 autofill:shadow-[inset_0_0_0_1000px_#161D29] placeholder:text-pure-greys-200 text-pure-greys-25 [--autofill-color:#E2E2E2] border border-dark-400"}`}
                                />
                            </label>
                               
                        </div>

                        <div>
                            <label>
                                <p className={`block mb-2 font-semibold
                                ${theme === "light" ? " text-richblack-900" : " text-pure-greys-25"}`}>
                                    Your Message
                                </p>
                                <textarea
                                name="message"
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Enter your message'
                                className={`w-full rounded-lg px-4 py-3 outline-none h-40 focus:outline-none
                                ${theme === "light" ? " focus:bg-purple/20 bg-purple/20 autofill:shadow-[inset_0_0_0_1000px_#9333EA33] [--autofill-color:#000814] text-richblack-900 placeholder:text-richblack-500 border border-purple" 
                                : 
                                "bg-richblack-800 focus:bg-richblack-800 autofill:shadow-[inset_0_0_0_1000px_#161D29] placeholder:text-pure-greys-200 text-pure-greys-25 [--autofill-color:#E2E2E2] border border-dark-400"}`}
                                />
                            </label>   
                        </div>

                        <button type='submit'
                        className={`w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer
                        ${theme === "light" ? " text-richblack-900 font-semibold" : " text-pure-greys-25 font-semibold"}`}>
                        Send Message

                        </button>
                    </form>
                </div>

                <div className='space-y-8'>
                    <div className='flex items-start'>

                        <div className='text-blue-500 text-2xl mr-4'>
                            <FaMapMarkerAlt/>
                        </div>

                        <div>
                            <h3 className={`text-lg font-semibold mb-2
                            ${theme === "light" ? "text-richblack-900" : " text-pure-greys-25"}`}>Location</h3>
                            <p className={`${theme === "light" ? " text-richblack-800" : " text-pure-greys-100"}`}>New Delhi, Ashok Nagar</p>
                        </div>
                   
                    </div>

                    <div className='flex items-start'>

                        <div className='text-blue-500 text-2xl mr-4'>
                            <FaEnvelope/>
                        </div>

                        <div>
                            
                            <h3 className={`text-lg font-semibold mb-2
                                ${theme === "light" ? "text-richblack-900" : " text-pure-greys-25"}`}>
                                Email
                            </h3>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=sagarbhandari243@gmail.com'
                            target='_blank'
                            rel="noopener noreferrer" 
                            className={`underline
                            ${theme === "light" ? " text-richblack-800" : " text-pure-greys-100"}`}>   
                                sagarbhandari243@gmail.com
                            </a>
                        
                        </div>
                    
                    </div>

                    <div className='flex items-start'>

                        <div className='text-blue-500 text-2xl mr-4'>
                            <FaPhone/>
                        </div>

                        <div>
                            <h3 className={`text-lg font-semibold mb-2
                                ${theme === "light" ? "text-richblack-900" : " text-pure-greys-25"}`}>
                                Phone
                            </h3>
                            <p className={`${theme === "light" ? " text-richblack-900" : " text-pure-greys-100"}`}>+91 8449544967</p>
                        </div>
                   
                    </div>

                    <div className='pt-4'>
                        <h3 className={`text-lg font-semibold mb-4
                                ${theme === "light" ? "text-richblack-900" : " text-pure-greys-25"}`}>
                                Follow Me
                        </h3>

                        <div className='flex space-x-4'>
                            <a href='https://github.com/sagar065'
                                className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple transition duration-300
                                ${theme === "light" ? " bg-richblack-500" : "bg-dark-300 "}`}>
                                <FaGithub/>
                            </a>
                            
                            <a href='https://www.linkedin.com/in/sagar-singh-4a1164149'
                                className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple transition duration-300
                                ${theme === "light" ? " bg-richblack-500" : "bg-dark-300 "}`}>
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    </motion.div>
  )
}

export default ContactSection