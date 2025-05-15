import { useDarkMode } from "../hooks/useDarkMode";

const Footer = () => {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`relative z-10 flex justify-between items-center p-4 w-[100%] 
      ${darkMode ? 'border-t-cyan-500/30' : 'border-t-blue-300/50'} border-t md:mt-[5rem]
      px-6 md:px-24
      backdrop-blur-sm
      ${darkMode ? 'bg-gray-900/30' : 'bg-white/30'}
    `}>
      <div className="relative group">
        <div className={`absolute inset-0 rounded-lg ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-200/30'} blur-md group-hover:blur-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-30`}></div>
        <div className="relative">
          <img src="Img/TIGER.png" width={80} height={50} alt="Tiger"
            className='hover:scale-110 transition-all duration-300' />
        </div>
      </div>

      <div className={`font-mono text-sm ${darkMode ? 'text-cyan-100' : 'text-blue-800'}`}>
        <span className="mr-2">© 2024</span>
        <span className={`bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-blue-400' : 'from-blue-500 to-cyan-500'} text-transparent bg-clip-text`}>
          Siwakrit Pattaveesin
        </span>
        <div className="text-xs opacity-70">{darkMode ? '< CYBER PORTFOLIO />' : '{ CYBER PORTFOLIO }'}</div>
      </div>
    </div>
  )
}

export default Footer