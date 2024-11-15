    import React, { useState } from 'react'
    import { Link } from 'react-router-dom'
    import { FaGithub } from "react-icons/fa";
    import { FaLinkedinIn } from "react-icons/fa";
    import { FaFacebook } from "react-icons/fa";


    const Navbar = () => {
        const [toggle, setToggle] = useState(false);
            const handleToggle = () => {
                setToggle(!toggle); 
            }
    return (
        <div className='flex justify-between items-center gap-2 p-3 
        shadow-md w-[100%]'>
        
        <ul>
            <li>
                {toggle === false ? (
                    <img src="Img/CS.png" alt="Web Logo" 
                    className='hover:scale-110 hover:text-orange-500' 
                    width={80} height={50}
                    onClick={handleToggle}
                    />
                ) : (
                    <ul>
                    <img src="Img/95.png" alt="Web Logo" 
                    className='hover:scale-110 hover:text-orange-500' 
                    width={80} height={50}
                    onClick={handleToggle}
                    />
                    </ul>
                )}
            </li>
        </ul>
    

        <ul className='hidden sm:flex justify-center items-center gap-2 text-white '>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <a href="#home">Home</a>
        </li>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <a href="#contact">Contact</a>
        </li>

        <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2
            hover:bg-white hover:text-blue-600'>
            <a href="#about">About</a>
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