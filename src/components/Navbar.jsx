    import React from 'react'
    import { Link } from 'react-router-dom'
    import { FaGithub } from "react-icons/fa";
    import { FaLinkedinIn } from "react-icons/fa";
    import { FaFacebook } from "react-icons/fa";
 

    const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-2 p-5 shadow-md'>
        
        <ul>
            <li>
                <img src="Img/WebLogo.svg" alt="Web Logo" 
                className='hover:scale-110 hover:text-orange-500' 
                width={50} height={50}
                />
            </li>
        </ul>
    

        <ul className='hidden sm:flex justify-center items-center gap-2 text-white '>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <Link to="/">
            Home
            </Link>
        </li>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <Link to="/contact">
            Contact
            </Link>
        </li>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <Link to="/about">
            About
            </Link>
        </li>

        </ul>

        <ul className='flex gap-3'>
            <li>
            <Link to="https://github.com/Siwakrit" target='_blank'>
            <FaGithub className='hover:scale-110 hover:text-red-500' size={40}/>
            </Link>
            </li>
            
            <li>
            <Link to="https://www.facebook.com/fzfronk/" target='_blank'>
            <FaFacebook className='hover:scale-110 hover:text-blue-500' size={40}/>
            </Link>
            </li>

            <li>
            <Link to="https://github.com/Siwakrit" target='_blank'>
            <FaLinkedinIn className='hover:scale-110 hover:text-blue-800' size={40}/>
            </Link>
            </li>

        </ul>

        </div>

    )
    }

    export default Navbar