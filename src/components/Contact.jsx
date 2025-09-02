import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

function Contact({ contactForm, handleContactChange, handleContactSubmit, isSubmitting, submitStatus, onOpenResume }) {
  return (
    <section id="contact" className="py-16 px-4 bg-black/20 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-reveal">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors duration-300">
                <span className="mr-3 text-xl">📧</span>
                <span>hellodanish97@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors duration-300">
                <span className="mr-3 text-xl">📱</span>
                <span>+91 8420119949</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors duration-300">
                <span className="mr-3 text-xl">📍</span>
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Professional Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://github.com/Hellodanish9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="GitHub Profile">
                    <Github className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">GitHub</span>
                    <span className="text-gray-400">@Hellodanish9</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/danish-khan-657502252/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn Profile">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-gray-400">@danish-khan-657502252</span>
                  </a>
                </li>
                <li>
                  <button onClick={onOpenResume} className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="Resume or CV">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">Resume/CV</span>
                    <span className="text-gray-400">Preview & Download</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleContactSubmit} noValidate>
              <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your Name" required className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300" />
              <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="Your Email" required className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300" />
              <textarea name="message" value={contactForm.message} onChange={handleContactChange} placeholder="Your Message" rows="4" required className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"></textarea>
              <button type="submit" disabled={isSubmitting} className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (<div className="text-green-400 text-sm">Thanks! Your message has been sent.</div>)}
              {submitStatus === 'error' && (<div className="text-red-400 text-sm">Oops! Something went wrong. Please try again.</div>)}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


