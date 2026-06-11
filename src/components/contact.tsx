function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/arvanwijaya01" target="_blank" className="flex bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            <img src="src/assets/github-icon.svg" alt="Github Icon" className="h-6 mr-2"/>GitHub
          </a>
          <a href="https://www.linkedin.com/in/arvanchrist-charlie-wijaya-5b7424238" target="_blank" className="flex bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <img src="src/assets/linkedin-icon.ico" alt="Github Icon" className="h-6 mr-2"/>LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
