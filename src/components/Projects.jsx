import React from 'react';

function Projects({ filteredProjects, setSelectedProject, setCurrentImageIndex, activeFilter, setActiveFilter }) {
  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-reveal">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Web', 'Python', 'Full Stack'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 hover:border-blue-500/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`group bg-gradient-to-br from-white/10 to-white/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/25 card-hover scroll-reveal`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.images.length} images
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:scale-105 transition-transform duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveDemo && project.liveDemo !== '#' ? (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                      <span className="flex items-center">
                        Live Demo
                        <svg className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <a href="#contact" className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                      <span className="flex items-center">
                        Request Demo
                        <svg className="ml-1 w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>
                  )}
                  {project.github && project.github !== '#' ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/btn bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center">
                        GitHub
                        <svg className="ml-1 w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <div className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded-lg cursor-not-allowed opacity-60">
                      <span className="flex items-center">
                        Private Repository
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z M5.121 17.804A9 9 0 1118.88 17.804L12 21l-6.879-3.196z" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;



