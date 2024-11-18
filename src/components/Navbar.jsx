import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // สร้าง state เพื่อควบคุมการสลับโลโก้
    const [menuOpen, setMenuOpen] = useState(false); // สร้าง state สำหรับเปิดปิดเมนูบนมือถือ

    const handleToggle = () => {
        setToggle(!toggle); // สลับค่าโลโก้
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // สลับสถานะเปิดปิดเมนู
    };

    return (
        <div className='flex justify-between items-center gap-2 md:p-3 mb-[2rem] shadow-md w-[100%]'>

                {/* โลโก้ */}
                <ul>
                    <li>
                        {toggle === false ? (
                            <img src="Img/CS.png" alt="Web Logo" 
                                className='hover:scale-110 hover:text-orange-500' 
                                width={80} height={50}
                                onClick={handleToggle}
                            />
                        ) : (
                            <img src="Img/95.png" alt="Web Logo" 
                                className='hover:scale-110 hover:text-orange-500' 
                                width={80} height={50}
                                onClick={handleToggle}
                            />
                        )}
                    </li>
                </ul>

            {/* เมนูบนเดสก์ท็อป */}
            <ul className='hidden sm:flex justify-center items-center gap-2 text-white'>
                <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2 hover:bg-white hover:text-blue-600'>
                    <a href="#home">Home</a>
                </li>
                <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2 hover:bg-white hover:text-blue-600'>
                    <a href="#contact">Contact</a>
                </li>
                <li className='font-bold bg-blue-600 border border-blue-600 rounded-md p-2 hover:bg-white hover:text-blue-600'>
                    <a href="#about">About</a>
                </li>
            </ul>

            {/* เมนูบนมือถือ */}
            <div className="sm:hidden flex items-center">
                {/* ปุ่ม Hamburger Menu */}
                <button onClick={handleMenuToggle} className="text-black text-3xl">
                    {menuOpen ? "✖️" : "☰"}
                </button>

                {/* เมนูที่เปิด/ปิดในมือถือ */}
                {menuOpen && (
                    <div className="absolute top-16 right-0 bg-blue-600 text-white w-[200px] p-4 rounded-md shadow-lg">
                        <ul>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#home">Home</a>
                            </li>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#contact">Contact</a>
                            </li>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* ลิงก์ไอคอนโซเชียล */}
            <ul className='flex gap-3'>
                <li>
                    <Link to="https://github.com/Siwakrit" target='_blank'>
                        <FaGithub className='hover:scale-110 hover:text-red-500' size={40} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/fzfronk/" target='_blank'>
                        <FaFacebook className='hover:scale-110 hover:text-blue-500' size={40} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/siwakrit-pattaveesin/" target='_blank'>
                        <FaLinkedinIn className='hover:scale-110 hover:text-blue-800' size={40} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
