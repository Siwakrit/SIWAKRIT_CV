import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebook, FaSun, FaMoon, FaGlobeAsia } from "react-icons/fa";
import { US, CN, TH } from 'country-flag-icons/react/3x2';
import { useDarkMode } from '../hooks/useDarkMode'; // นำเข้า useDarkMode จากไฟล์ใหม่
import { useLanguage } from "../hooks/useLanguage"; // ใช้ useLanguage hook

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // สร้าง state เพื่อควบคุมการสลับโลโก้
    const [menuOpen, setMenuOpen] = useState(false); // สร้าง state สำหรับเปิดปิดเมนูบนมือถือ
    const [languageDropdown, setLanguageDropdown] = useState(false); // สำหรับจัดการ dropdown ภาษา    // ดึงค่า darkMode และ toggleDarkMode จาก context
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { language, setLanguage, text } = useLanguage(); // ดึงค่า language, setLanguage และข้อความตามภาษา

    const handleToggle = () => {
        setToggle(!toggle); // สลับค่าโลโก้
    };

    const handleMenuToggle = () => {
        if (!menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Mobile menu & overlay container (fixed, top-level, only on mobile) */}
            {menuOpen && (
                <div className="fixed inset-0 z-[1100] sm:hidden" style={{pointerEvents:'auto'}}>
                    {/* Overlay (click to close menu) */}
                    <div
                        className="absolute inset-0 bg-black/60 z-[1100]"
                        onClick={handleMenuToggle}
                        aria-label="Close mobile menu overlay"
                        style={{cursor:'pointer'}}
                    ></div>
                    {/* Side menu (slide in from right, above overlay) */}
                    <div
                        className={`fixed top-0 right-0 h-full w-72 max-w-[90vw] z-[1201] bg-white dark:bg-gray-900 shadow-2xl border-l border-blue-300/50 dark:border-cyan-500/30 transform transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ willChange: 'transform' }}
                        onClick={e => e.stopPropagation()}
                        tabIndex={-1}
                        role="menu"
                        aria-modal="true"
                    >
                        {/* ส่วนหัวเมนู */}
                        <div className={`flex justify-between items-center p-5 border-b ${
                            darkMode ? 'border-cyan-500/30' : 'border-blue-300/50'
                        } sticky top-0 bg-inherit`}>
                            <div className={`font-bold text-xl font-mono ${
                                darkMode ? 'text-cyan-400' : 'text-blue-600'
                            }`}>
                                <span className="inline-flex items-center">
                                    <span className="mr-2 opacity-70">☰</span> MENU
                                </span>
                            </div>
                            <button
                                onClick={handleMenuToggle}
                                className={`p-2.5 rounded-full ${
                                    darkMode
                                        ? 'bg-gradient-to-r from-cyan-800 to-blue-900 hover:from-cyan-700 hover:to-blue-800 text-white shadow-inner shadow-cyan-500/30'
                                        : 'bg-gradient-to-r from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300 text-blue-800 shadow-md'
                                } transition-all duration-200`}
                                aria-label="Close menu"
                            >
                                <span className="font-mono text-xl">✕</span>
                            </button>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            {/* รายการเมนูหลัก */}
                            <ul className="w-full space-y-3 mb-6">
                                <li>
                                    <a
                                        href="#home"
                                        onClick={handleMenuToggle}
                                        className={`flex items-center gap-2 font-mono p-3 rounded-md ${
                                            darkMode
                                                ? 'bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-white hover:from-cyan-800/50 hover:to-blue-800/50'
                                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800 hover:from-blue-200 hover:to-cyan-200'
                                        } border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300/30'} transition-all duration-300`}
                                    >
                                        <span className="text-xs font-mono opacity-70">&gt;</span> {text.home}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={handleMenuToggle}
                                        className={`flex items-center gap-2 font-mono p-3 rounded-md ${
                                            darkMode
                                                ? 'bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-white hover:from-cyan-800/50 hover:to-blue-800/50'
                                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800 hover:from-blue-200 hover:to-cyan-200'
                                        } border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300/30'} transition-all duration-300`}
                                    >
                                        <span className="text-xs font-mono opacity-70">&gt;</span> {text.contact}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        onClick={handleMenuToggle}
                                        className={`flex items-center gap-2 font-mono p-3 rounded-md ${
                                            darkMode
                                                ? 'bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-white hover:from-cyan-800/50 hover:to-blue-800/50'
                                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800 hover:from-blue-200 hover:to-cyan-200'
                                        } border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300/30'} transition-all duration-300`}
                                    >
                                        <span className="text-xs font-mono opacity-70">&gt;</span> {text.about}
                                    </a>
                                </li>
                            </ul>

                            {/* ส่วนของการเลือกภาษา */}
                            <div className="mb-6">
                                <div className={`flex items-center gap-2 font-bold rounded-md p-3 mb-3 bg-gradient-to-r ${
                                    darkMode ? 'from-cyan-800 to-blue-900' : 'from-blue-500 to-cyan-500'
                                } text-white font-mono`}>
                                    <FaGlobeAsia className="text-white" />
                                    <span>Language</span>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <div
                                        className={`flex items-center gap-2 p-3 ${
                                            language === 'en'
                                                ? (darkMode ? 'bg-gradient-to-r from-cyan-800/60 to-blue-800/60 text-white' : 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800')
                                                : (darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800')
                                        } rounded-md cursor-pointer ${
                                            darkMode ? 'hover:bg-cyan-900/50' : 'hover:bg-blue-50'
                                        } transition-all duration-300`}
                                        onClick={() => setLanguage('en')}
                                    >
                                        <US className="w-6 h-4" />
                                        <span className="font-mono">English</span>
                                        {language === 'en' && <span className={`ml-auto ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>✓</span>}
                                    </div>

                                    <div
                                        className={`flex items-center gap-2 p-3 ${
                                            language === 'zh'
                                                ? (darkMode ? 'bg-gradient-to-r from-cyan-800/60 to-blue-800/60 text-white' : 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800')
                                                : (darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800')
                                        } rounded-md cursor-pointer ${
                                            darkMode ? 'hover:bg-cyan-900/50' : 'hover:bg-blue-50'
                                        } transition-all duration-300`}
                                        onClick={() => setLanguage('zh')}
                                    >
                                        <CN className="w-6 h-4" />
                                        <span className="font-mono">中文</span>
                                        {language === 'zh' && <span className={`ml-auto ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>✓</span>}
                                    </div>

                                    <div
                                        className={`flex items-center gap-2 p-3 ${
                                            language === 'th'
                                                ? (darkMode ? 'bg-gradient-to-r from-cyan-800/60 to-blue-800/60 text-white' : 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800')
                                                : (darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800')
                                        } rounded-md cursor-pointer ${
                                            darkMode ? 'hover:bg-cyan-900/50' : 'hover:bg-blue-50'
                                        } transition-all duration-300`}
                                        onClick={() => setLanguage('th')}
                                    >
                                        <TH className="w-6 h-4" />
                                        <span className="font-mono">ภาษาไทย</span>
                                        {language === 'th' && <span className={`ml-auto ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>✓</span>}
                                    </div>
                                </div>
                            </div>

                            {/* ปุ่มสลับโหมด Dark/Light */}
                            <div className="mb-6">
                                <div className={`flex items-center gap-2 font-bold rounded-md p-3 mb-3 bg-gradient-to-r ${
                                    darkMode ? 'from-cyan-800 to-blue-900' : 'from-blue-500 to-cyan-500'
                                } text-white font-mono`}>
                                    <span>Theme</span>
                                </div>

                                <div
                                    onClick={toggleDarkMode}
                                    className={`flex items-center gap-3 p-3 cursor-pointer rounded-md ${
                                        darkMode
                                            ? 'bg-gradient-to-r from-cyan-800/40 to-blue-800/40 hover:from-cyan-800/60 hover:to-blue-800/60'
                                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200'
                                    } transition-all duration-300`}
                                >
                                    {darkMode
                                        ? <><FaSun className="text-yellow-400" size={22} /> <span className="font-mono text-white">Light Mode</span></>
                                        : <><FaMoon className="text-blue-600" size={22} /> <span className="font-mono text-gray-800">Dark Mode</span></>
                                    }
                                </div>
                            </div>

                            {/* ไอคอนโซเชียลมีเดีย */}
                            <div className="mt-auto pt-4 border-t border-b py-4 grid grid-cols-3 gap-2">
                                <Link
                                    to="https://github.com/Siwakrit"
                                    target='_blank'
                                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-md ${
                                        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'
                                    } transition-all`}
                                >
                                    <FaGithub className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={22} />
                                    <span className={`text-xs font-mono ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
                                </Link>
                                <Link
                                    to="https://www.facebook.com/SHIKAFZ"
                                    target='_blank'
                                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-md ${
                                        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'
                                    } transition-all`}
                                >
                                    <FaFacebook className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={22} />
                                    <span className={`text-xs font-mono ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Facebook</span>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/in/siwakrit-pattaveesin/"
                                    target='_blank'
                                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-md ${
                                        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'
                                    } transition-all`}
                                >
                                    <FaLinkedinIn className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={22} />
                                    <span className={`text-xs font-mono ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='sticky top-0 z-50 flex justify-between items-center gap-2 p-1 md:p-2 px-4 md:px-20 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-blue-100/50 dark:border-cyan-900/30 shadow-sm'>
                {/* โลโก้ - ปรับปรุงให้เป็นสไตล์ไซเบอร์มากขึ้น */}
                <div className="relative group">
                    <div className={`absolute inset-0 rounded-xl ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-200/50'} blur-md group-hover:blur-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-30`}></div>
                    <div className="relative">
                        {toggle === false ? (
                            <img src="Img/CS.png" alt="Web Logo"
                                className='hover:scale-110 transition-all rounded-lg duration-300'
                                width={80} height={50}
                                onClick={handleToggle}
                            />
                        ) : (
                            <img src="Img/95.png" alt="Web Logo"
                                className='hover:scale-110 transition-all rounded-lg duration-300'
                                width={80} height={50}
                                onClick={handleToggle}
                            />
                        )}
                        <div className={`absolute -bottom-1 right-0 font-mono text-xs text-white bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-cyan-500'} px-2 rounded-md transform -rotate-3`}>
                            <span className="tracking-wider">CYBER</span>
                        </div>
                    </div>
                </div>

                {/* เมนูบนเดสก์ท็อป */}
                <ul className='hidden sm:flex justify-center items-center gap-2'>
                    <li className='font-bold hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-cyan-400 px-4 py-2 rounded-md transition-all'>
                        <a href="#home" className="font-mono">{text.home}</a>
                    </li>
                    <li className='font-bold hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-cyan-400 px-4 py-2 rounded-md transition-all'>
                        <a href="#contact" className="font-mono">{text.contact}</a>
                    </li>
                    <li className='font-bold hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-cyan-400 px-4 py-2 rounded-md transition-all'>
                        <a href="#about" className="font-mono">{text.about}</a>
                    </li>
                    <div className="relative ml-2">
                        <button
                            className={`flex items-center gap-2 font-mono rounded-md p-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} transition-all duration-300 ${darkMode ? 'text-cyan-400' : 'text-blue-600'} border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300/50'}`}
                            onClick={() => setLanguageDropdown(!languageDropdown)}
                            aria-label="Change language"
                        >
                            {language === 'en' && (
                                <span className="flex items-center gap-1">
                                    <US className="w-5 h-3.5" />
                                    <span className="text-xs">EN</span>
                                </span>
                            )}
                            {language === 'zh' && (
                                <span className="flex items-center gap-1">
                                    <CN className="w-5 h-3.5" />
                                    <span className="text-xs">ZH</span>
                                </span>
                            )}
                            {language === 'th' && (
                                <span className="flex items-center gap-1">
                                    <TH className="w-5 h-3.5" />
                                    <span className="text-xs">TH</span>
                                </span>
                            )}
                        </button>
                        {/* Dropdown menu */}
                        {languageDropdown && (
                            <div
                                className={`absolute right-0 mt-2 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} shadow-xl rounded-md overflow-hidden z-[100] border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300/30'} backdrop-blur-md w-24`}
                            >
                                <div
                                    className={`flex items-center gap-2 p-2 cursor-pointer ${darkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-blue-50'} ${language === 'en' ? (darkMode ? 'bg-gradient-to-r from-cyan-800/40 to-blue-800/40' : 'bg-gradient-to-r from-blue-100 to-cyan-100') : ''}`}
                                    onClick={() => {
                                        setLanguage('en');
                                        setLanguageDropdown(false);
                                    }}
                                >
                                    <US className="w-6 h-4" />
                                    <span className={`ml-1 text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'}`}>EN</span>
                                    {language === 'en' && <span className={`ml-auto ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`}>✓</span>}
                                </div>
                                <div
                                    className={`flex items-center gap-2 p-2 cursor-pointer ${darkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-blue-50'} ${language === 'zh' ? (darkMode ? 'bg-gradient-to-r from-cyan-800/40 to-blue-800/40' : 'bg-gradient-to-r from-blue-100 to-cyan-100') : ''}`}
                                    onClick={() => {
                                        setLanguage('zh');
                                        setLanguageDropdown(false);
                                    }}
                                >
                                    <CN className="w-6 h-4" />
                                    <span className={`ml-1 text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'}`}>ZH</span>
                                    {language === 'zh' && <span className={`ml-auto ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`}>✓</span>}
                                </div>
                                <div
                                    className={`flex items-center gap-2 p-2 cursor-pointer ${darkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-blue-50'} ${language === 'th' ? (darkMode ? 'bg-gradient-to-r from-cyan-800/40 to-blue-800/40' : 'bg-gradient-to-r from-blue-100 to-cyan-100') : ''}`}
                                    onClick={() => {
                                        setLanguage('th');
                                        setLanguageDropdown(false);
                                    }}
                                >
                                    <TH className="w-6 h-4" />
                                    <span className={`ml-1 text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'}`}>TH</span>
                                    {language === 'th' && <span className={`ml-auto ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`}>✓</span>}
                                </div>
                            </div>
                        )}
                    </div>
                </ul>
                {/* ส่วนขวาสุด: เมนูบนมือถือ, ไอคอนโซเชียล, และปุ่มสลับโหมด */}
                <div className='flex gap-3 items-center'>
                    {/* Hamburger button for mobile only */}
                    <button
                        onClick={handleMenuToggle}
                        className={`sm:hidden p-3 rounded-xl transition-all duration-300 ${
                            darkMode
                                ? 'bg-gradient-to-br from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-700/30'
                                : 'bg-gradient-to-br from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-400/30'
                        } border ${darkMode ? 'border-cyan-400/50' : 'border-blue-300/50'} relative z-[1150]'}`}
                        aria-label="Toggle menu"
                        style={{ minWidth: 48, minHeight: 48 }}
                    >
                        <span className="font-mono text-2xl">☰</span>
                    </button>

                    {/* ไอคอนโซเชียลมีเดีย - แสดงในเดสก์ท็อปเท่านั้น */}
                    <ul className={`hidden sm:flex gap-4 items-center pr-4 mr-4 ${darkMode ? 'border-r border-cyan-500/30' : 'border-r border-blue-300/50'}`}>
                        <li>
                            <Link to="https://github.com/Siwakrit" target='_blank' aria-label="GitHub">
                                <div className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all`}>
                                    <FaGithub className={`transition-all ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}`} size={24} />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/SHIKAFZ" target='_blank' aria-label="Facebook">
                                <div className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all`}>
                                    <FaFacebook className={`transition-all ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`} size={24} />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/siwakrit-pattaveesin/" target='_blank' aria-label="LinkedIn">
                                <div className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all`}>
                                    <FaLinkedinIn className={`transition-all ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`} size={24} />
                                </div>
                            </Link>
                        </li>
                    </ul>

                    {/* ปุ่มสลับโหมด - สไตล์ไซเบอร์ แสดงในเดสก์ท็อปเท่านั้น */}
                    <div
                        onClick={toggleDarkMode}
                        className={`hidden sm:block cursor-pointer p-2 rounded-full transition-all duration-300 ${
                            darkMode
                                ? 'bg-gradient-to-r from-cyan-800/20 to-blue-800/20 hover:from-cyan-700/30 hover:to-blue-700/30 shadow-inner shadow-cyan-500/20'
                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 shadow shadow-blue-200/50'
                        }`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode
                            ? <FaSun className="text-yellow-400 hover:text-yellow-300 hover:animate-spin transition-all" size={24} />
                            : <FaMoon className="text-blue-600 hover:text-blue-700 transition-all" size={24} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
