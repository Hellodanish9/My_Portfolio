import React from 'react';

function Services({ services }) {
  return (
    <section id="services" className="py-16 px-4 bg-black/20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scroll-reveal">
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25">
              <div className={`text-4xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;



