import React from 'react';

function Hero({ isVisible, mousePosition }) {
  return (
    <section id="home" className="pt-20 pb-16 px-4 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center w-full">
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative z-10">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse relative">
                Danish Khan
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 typing-effect bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Full Stack Developer (Python & Django)
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A passionate Full Stack Developer with expertise in Python, Django, and modern web technologies. 
            I love turning complex problems into elegant, user-friendly solutions. Currently focused on Python development, 
            data science, and building scalable web applications that make a real impact.
          </p>
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">🐍</div>
          <div className="absolute top-40 right-20 text-3xl animate-float opacity-30" style={{ animationDelay: '1s' }}>⚡</div>
          <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}>🌐</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-30" style={{ animationDelay: '3s' }}>🎨</div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#projects" className="hero-btn inline-flex items-center group">
              <span className="flex items-center">
                View My Work
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="hero-btn-secondary inline-flex items-center group">
              <span className="flex items-center">
                Contact Me
                <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



