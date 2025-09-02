import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-4 bg-black/20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-reveal">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Danish Khan, a passionate Web Developer with a strong interest in building modern, 
              responsive, and user-friendly websites. My journey into web development started during my college days, 
              where I discovered how creativity and logic can come together to build impactful digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I chose development because I love solving problems and bringing ideas to life through code. 
              The joy of creating something that people can interact with and benefit from keeps me motivated every day.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What makes me unique is my ability to blend technical expertise with creative design thinking. 
              I don't just write code — I focus on delivering solutions that align with business needs and enhance user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-gray-300">Years Learning</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-xl">
                <img src="/images/profile.jpg" alt="Danish Khan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



