export default function About() {
  const skills = ["HTML/CSS", "JavaScript", "React", "Git"]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-blue-400 mb-4 pb-3 border-b-2 border-purple-500">About Me</h2>
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-gray-200 p-6 rounded-lg border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-shadow">
          <p className="leading-relaxed text-lg">
            I'm a passionate young developer with a love for web technologies. Currently a 4th year student at
            Information Technology University. I enjoy creating modern, responsive, and user-friendly web applications.
            Always ready to learn new technologies and tackle complex challenges.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-blue-400 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
