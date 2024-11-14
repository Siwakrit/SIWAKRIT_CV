import Hero from "./pages/Home"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="h-screen">
      <Navbar />
      <Hero />  
      <About />
      <Projects />
      <Contact />
      <Footer />   
    </div>
  )
}

export default App
