function Footer() {
  return (
    <footer className="bg-background p-4 text-center">
      <h2 className="my-6 text-center">Get in Touch</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/arvanwijaya01" target="_blank" className="flex bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
          <img src="src/assets/github-icon.svg" alt="Github Icon" className="h-6 mr-2"/>GitHub
        </a>
        <a href="https://www.linkedin.com/in/arvanchrist-charlie-wijaya-5b7424238" target="_blank" className="flex bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <img src="src/assets/linkedin-icon.ico" alt="Github Icon" className="h-6 mr-2"/>LinkedIn
        </a>
      </div>
      <p className="mt-4">&copy; 2025 Arvanchrist Charlie Wijaya. All rights reserved.</p>
    </footer>
  )
}

export default Footer
