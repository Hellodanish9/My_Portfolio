import React, { useState, useEffect } from 'react';
// Icons are now used within sub-components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeViews, setResumeViews] = useState(0);
  const [resumeDownloads, setResumeDownloads] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial scroll check
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Online Movie Ticket Booking System",
      description: "A comprehensive Django-based platform for booking movie tickets with seat selection and payment integration",
      category: "Full Stack",
      technologies: ["Python", "Django", "REST API", "SQLite", "HTML", "CSS", "JavaScript"],
      images: [
        "/images/projects/movie-booking/movie-booking-1.jpg",
        "/images/projects/movie-booking/movie-booking-2.jpg",
        "/images/projects/movie-booking/movie-booking-3.jpg",
        "/images/projects/movie-booking/movie-booking-4.jpg",
        "/images/projects/movie-booking/movie-booking-5.jpg"
      ],
      liveDemo: "https://hellodanish9.pythonanywhere.com/",
      github: "https://github.com/Hellodanish9/Online-Movie-Ticket-Booking-System",
      features: [
        "User Registration & Login",
        "Movie Listings & Showtime Selection",
        "Interactive Seat Selection",
        "Ticket Booking & Confirmation",
        "Admin Panel for Movie Management",
        "E-Ticket Generation",
        "Responsive Design"
      ],
      challenges: [
        "Database Design for Movies, Shows, and Seats",
        "Seat Booking Conflict Prevention",
        "Payment Integration Simulation",
        "Interactive Seat Layout Design",
        "Responsive User Interface"
      ]
    },
    {
      id: 2,
      title: "Online Doctor Appointment Booking System",
      description: "A PHP-based healthcare platform for scheduling doctor appointments with real-time availability",
      category: "Web",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      images: [
        "/images/projects/doctor-appointment/doctor-appointment-1.jpg",
        "/images/projects/doctor-appointment/doctor-appointment-2.jpg",
        "/images/projects/doctor-appointment/doctor-appointment-3.jpg",
        "/images/projects/doctor-appointment/doctor-appointment-4.jpg"
      ],
      liveDemo: "https://hellodanish9.infinityfreeapp.com/",
      github: "https://github.com/Hellodanish9/Online-Doctor-Appointment-Booking-System",
      features: [
        "User Registration & Login",
        "Doctor Profile Management",
        "Search & Filter Doctors",
        "Appointment Booking System",
        "Real-Time Availability",
        "Admin Panel",
        "Secure Authentication"
      ],
      challenges: [
        "User Authentication & Data Security",
        "Database Design & Relationships",
        "Appointment Slot Management",
        "Frontend & Backend Integration",
        "Responsive Design Implementation"
      ]
    },
    {
      id: 3,
      title: "WhatsApp Automation Tool",
      description: "Python-based automation tool for sending promotional messages using database integration",
      category: "Python",
      technologies: ["Python", "MySQL", "pywhatkit", "Database Integration"],
      images: [
        "/images/projects/whatsapp-automation/whatsapp-automation-1.jpg",
        "/images/projects/whatsapp-automation/whatsapp-automation-2.jpg"
      ],
      liveDemo: "#",
      github: "#",
      features: [
        "Automated Message Sending",
        "Database Integration",
        "Bulk Message Processing",
        "Promotional Campaign Support",
        "User Credential Management"
      ],
      challenges: [
        "WhatsApp API Integration",
        "Database Query Optimization",
        "Message Scheduling",
        "Error Handling"
      ]
    }
  ];

  const skills = [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Django", level: 80, icon: "⚡" },
    { name: "REST API", level: 75, icon: "🔗" },
    { name: "HTML", level: 90, icon: "🌐" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "📜" },
    { name: "PHP", level: 75, icon: "🐘" },
    { name: "MySQL", level: 80, icon: "🗄️" },
    { name: "Git & GitHub", level: 85, icon: "📚" },
    { name: "WordPress", level: 80, icon: "📝" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "SDLC & Agile", level: 85, icon: "🔄" }
  ];

  const services = [
    {
      title: "Web Development",
      description: "I design and develop clean, modern, and scalable websites that perfectly align with your business goals. From static sites to dynamic web applications, my focus is on creating fast, secure, and user-friendly solutions.",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Responsive Design",
      description: "I build fully responsive websites that deliver an excellent browsing experience on any device—desktop, tablet, or mobile. Your customers will always enjoy a smooth and consistent interface.",
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Development",
      description: "I create secure and feature-rich e-commerce platforms designed to boost your online sales. With seamless payment gateway integration, easy product management, and a user-friendly interface.",
      icon: "🛒",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Website Maintenance",
      description: "I provide reliable website maintenance services, including updates, bug fixes, security monitoring, and performance optimization. This ensures your website remains secure, fast, and fully functional.",
      icon: "🔧",
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Helper functions for skills
  const getSkillColor = (skillName) => {
    const colors = {
      'Python': '#3b82f6, #1d4ed8',
      'Django': '#8b5cf6, #7c3aed',
      'REST API': '#06b6d4, #0891b2',
      'HTML': '#f97316, #ea580c',
      'CSS': '#3b82f6, #1d4ed8',
      'JavaScript': '#fbbf24, #f59e0b',
      'PHP': '#8b5cf6, #7c3aed',
      'MySQL': '#10b981, #059669',
      'Git & GitHub': '#f43f5e, #e11d48',
      'WordPress': '#3b82f6, #1d4ed8',
      'React': '#06b6d4, #0891b2',
      'SDLC & Agile': '#10b981, #059669'
    };
    return colors[skillName] || '#3b82f6, #8b5cf6';
  };

  const getSkillDescription = (skillName) => {
    const descriptions = {
      'Python': 'Core Python with OOP, advanced concepts, and web development',
      'Django': 'Full-stack web framework with ORM and admin interface',
      'REST API': 'Building and consuming RESTful APIs for web services',
      'HTML': 'Semantic markup and modern HTML5 features',
      'CSS': 'Responsive design, animations, and modern CSS techniques',
      'JavaScript': 'ES6+, DOM manipulation, and modern JS frameworks',
      'PHP': 'Server-side scripting and dynamic web development',
      'MySQL': 'Database design, queries, and data management',
      'Git & GitHub': 'Version control, collaboration, and project management',
      'WordPress': 'CMS development, themes, and plugin customization',
      'React': 'Component-based UI development and state management',
      'SDLC & Agile': 'Software development lifecycle and agile methodologies'
    };
    return descriptions[skillName] || 'Professional expertise in this technology';
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1bddd0c4-e3e4-412e-9b90-6e21ccff3e53',
          subject: 'New message from Portfolio Contact Form',
          from_name: contactForm.name,
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  //

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Navbar />
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Light-mode contrast overlay */}
      

      {/* Mouse Trail Effect */}
      <div 
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)'
        }}
      />

      {/* Navigation moved into Navbar component */}

      <Hero isVisible={isVisible} mousePosition={mousePosition} />

      <About />

      <Skills skills={skills} getSkillColor={getSkillColor} getSkillDescription={getSkillDescription} />

      <Services services={services} />

      <Projects filteredProjects={filteredProjects} setSelectedProject={setSelectedProject} setCurrentImageIndex={setCurrentImageIndex} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {/* Image Gallery Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setCurrentImageIndex(0);
                  }}
                  className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Main Image */}
                <div className="relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4 text-white">
                  <span className="bg-black/70 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </span>
                </div>

                {/* Thumbnail Navigation */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                          currentImageIndex === index ? 'ring-2 ring-blue-400' : 'ring-1 ring-white/30'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Project Info */}
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          )}

      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 text-white rounded-lg max-w-3xl w-full overflow-hidden border border-white/10">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="font-semibold">Resume Preview</div>
              <button onClick={() => setIsResumeOpen(false)} className="text-gray-300 hover:text-white">✕</button>
                </div>
            <div className="p-4 bg-black/30">
              <iframe title="resume" src="/resume.pdf" className="w-full h-[60vh] rounded"></iframe>
                </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
              <div className="text-sm text-gray-300">
                Views: <span className="text-blue-400 font-semibold">{resumeViews}</span> · Downloads: <span className="text-blue-400 font-semibold">{resumeDownloads}</span>
              </div>
              <div className="flex gap-2">
                <a href="/resume.pdf" download onClick={() => setResumeDownloads(d => d + 1)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700">Download PDF</a>
                <button onClick={() => setIsResumeOpen(false)} className="border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Contact contactForm={contactForm} handleContactChange={handleContactChange} handleContactSubmit={handleContactSubmit} isSubmitting={isSubmitting} submitStatus={submitStatus} onOpenResume={() => { setIsResumeOpen(true); setResumeViews(v => v + 1); }} />

      <Footer />
    </div>
  );
}

export default App;
