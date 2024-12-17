import React from 'react';
import { User, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { personalInfo } from '../constants/data';
import yourImage from '../assets/pic.png'; 

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={yourImage}
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="text-blue-500" size={24} />
                <div>
                  <h3 className="text-xl font-bold">Who am I?</h3>
                  <p className="text-gray-600">{personalInfo.description}</p>
                </div>
              </div>
              
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <GraduationCap className="text-blue-500" size={24} />
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    {edu.period && <p className="text-gray-500 text-sm">{edu.period}</p>}
                    {edu.status && <p className="text-blue-500 text-sm">{edu.status}</p>}
                  </div>
                </div>
              ))}

              <div className="flex items-center space-x-4">
                <Briefcase className="text-blue-500" size={24} />
                <div>
                  <h3 className="text-xl font-bold">Experience</h3>
                  <p className="text-gray-600">2+ years in Frontend Development</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-500" size={24} />
                <div>
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-gray-600">{personalInfo.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}