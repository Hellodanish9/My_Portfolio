import React from 'react';

function Skills({ skills, getSkillColor, getSkillDescription }) {
  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-reveal">
          My Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 scroll-reveal">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
              <p className="text-gray-300 text-sm">Creating beautiful and responsive user interfaces</p>
            </div>
            <div className="space-y-3">
              {skills.filter(skill => ['HTML', 'CSS', 'JavaScript', 'React'].includes(skill.name)).map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white text-sm flex items-center">
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-2000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="text-blue-400 text-xs font-bold">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 scroll-reveal">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
              <p className="text-gray-300 text-sm">Building robust and scalable server-side applications</p>
            </div>
            <div className="space-y-3">
              {skills.filter(skill => ['Python', 'Django', 'REST API', 'PHP'].includes(skill.name)).map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white text-sm flex items-center">
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                      <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-2000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="text-purple-400 text-xs font-bold">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 scroll-reveal">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">Tools & Others</h3>
              <p className="text-gray-300 text-sm">Essential tools and methodologies for development</p>
            </div>
            <div className="space-y-3">
              {skills.filter(skill => ['MySQL', 'Git & GitHub', 'WordPress', 'SDLC & Agile'].includes(skill.name)).map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white text-sm flex items-center">
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                      <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-2000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="text-green-400 text-xs font-bold">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`group bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 scroll-reveal skill-card`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-semibold flex items-center text-lg">
                  <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-blue-400 font-bold text-xl group-hover:scale-110 transition-transform duration-300">{skill.level}%</span>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div className="skill-progress h-4 rounded-full transition-all duration-2000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${getSkillColor(skill.name)})` }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skill-shimmer"></div>
              </div>
              <div className="mt-4 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {getSkillDescription(skill.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;



