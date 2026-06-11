function Skills() {
  return (
    <section id="skills" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <ul className="flex flex-wrap space-x-4 justify-center">
          <li className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">CSS</li>
          <li className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">HTML</li>
          <li className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">PHP</li>
          <li className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Javascript</li>
        </ul>
        <ul className="flex flex-wrap space-x-4 justify-center">
          <li className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Laravel</li>
          <li className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Python</li>
          <li className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">RestAPI</li>
          <li className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Tensorflow</li>
          <li className="bg-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Bootstrap</li>
        </ul>
        <ul className="flex flex-wrap space-x-4 justify-center">
          <li className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Tailwind</li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">SQL</li>
          <li className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Git</li>
          <li className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">Docker</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
