import Navbar from "./components/navbar"
import About from "./components/about"
import Timeline from "./components/timeline"
import Skills from "./components/skills"
import Certificates from "./components/certificates"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <div className="bg-gray-700 text-white font-sans">
      <Navbar />
      <About />
      <Timeline />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
