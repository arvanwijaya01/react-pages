import { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className="bg-primary p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Mobile button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          { isOpen ? <XIcon /> : <MenuIcon /> }
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#timeline" className="hover:underline">Timeline</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#certificates" className="hover:underline">Certificates</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-primary transition-all duration-100 ease-in-out ${
          isOpen ? "h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#timeline">Timeline</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#skills">Skills</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#certificates">Certificates</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar