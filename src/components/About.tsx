import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating beautiful, functional web experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mukuru - Web Developer"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hi, I'm Mukuru — a passionate front-end developer
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Based in Rwanda, I specialize in turning creative ideas into modern, high-performing websites. 
                With a keen eye for design and a commitment to clean, maintainable code, I help businesses 
                establish a strong online presence that converts visitors into customers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with the latest web development trends and best practices.
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Rwanda</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Experience</div>
                  <div className="text-gray-600">2+ Years</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">Specialty</div>
                  <div className="text-gray-600">Front-End</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;