function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        
        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
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
      
      {/* Mobile menu (hidden by default, toggle with JS) */}
      <div className="md:hidden hidden" id="mobile-menu">
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#timeline" className="hover:underline">Timeline</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#certificates" className="hover:underline">Certificates</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
