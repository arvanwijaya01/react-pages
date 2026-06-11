function Timeline() {
  return (
    <section id="timeline" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          
          <div className="mb-10 flex justify-between items-center w-full">
            <div className="sm:w-5/12"></div>
            <div className="w-1/12 sm:2/12 flex justify-center">
              <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
            </div>
            <div className="w-11/12 sm:w-5/12 bg-gray-900 p-6 rounded-lg shadow-md flex items-start">
              <img src="src/assets/bangkit_academy_logo.jpg" alt="Bangkit Academy Logo" className="w-24 h-24 mr-4 rounded"/>
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">Bangkit Academy<br/>Machine Learning Path</h2>
                <h3 className="text-white text-xl font-semibold mb-2">Feb 2022 - Jul 2022</h3>
                <p className="text-gray-400 mb-4">Bangkit Academy</p>
              </div>
            </div>
          </div>

          <div className="mb-10 flex justify-between items-center w-full sm:flex-row-reverse">
            <div className="sm:w-5/12"></div>
            <div className="w-1/12 sm:w-2/12 flex justify-center">
              <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
            </div>
            <div className="w-11/12 sm:w-5/12 bg-gray-900 p-6 rounded-lg shadow-md flex items-start">
              <img src="src/assets/logo_avs.png" alt="Avatar Solution Logo" className="w-24 h-24 mr-4 rounded"/>
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">Avatar Solution<br/>Machine Learning Engineer</h2>
                <h3 className="text-white text-xl font-semibold mb-2">Sep 2022 - Oct 2022</h3>
                <p className="text-gray-400 mb-4">Room Classification Model and Restful API</p>
              </div>
            </div>
          </div>

          <div className="mb-10 flex justify-between items-center w-full">
            <div className="sm:w-5/12"></div>
            <div className="w-1/12 sm:w-2/12 flex justify-center">
              <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
            </div>
            <div className="w-11/12 sm:w-5/12 bg-gray-900 p-6 rounded-lg shadow-md flex items-start">
              <img src="src/assets/Logo-unud-baru.png" alt="Udayana Logo" className="w-24 h-24 mr-4 rounded"/>
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">Graduate with Honors<br/>3.86 GPA</h2>
                <h3 className="text-white text-xl font-semibold mb-2">2019 - 2023</h3>
                <p className="text-gray-400 mb-4">Computer Science / Informatics</p>
              </div>
            </div>
          </div>

          <div className="mb-10 flex justify-between items-center w-full sm:flex-row-reverse">
            <div className="sm:w-5/12"></div>
            <div className="w-1/12 sm:w-2/12 flex justify-center">
              <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
            </div>
            <div className="w-11/12 sm:w-5/12 bg-gray-900 p-6 rounded-lg shadow-md flex items-start">
              <img src="src/assets/rinnai_logo.jpg" alt="Rinnai Logo" className="w-24 h-24 mr-4 rounded"/>
              <div>
                <h2 className="text-white text-2xl font-semibold mb-2">PT Rinnai Indonesia<br/>IT Programmer</h2>
                <h3 className="text-white text-xl font-semibold mb-2">Apr 2025 - Now</h3>
                <p className="text-gray-400 mb-4">Laravel Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
