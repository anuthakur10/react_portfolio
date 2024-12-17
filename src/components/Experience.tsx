import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Live Deftsoft Informatics Pvt. Ltd",
    position: "React JS/Next JS Frontend Developer",
    period: "June 2023 - July 2023",
    location: "Mohali, Punjab",
    description: "Frontend development using React.js and Next.js, implementing responsive designs and optimizing application performance."
  },
  {
    company: "Meander Software Pvt Ltd",
    position: "React Developer",
    period: "April 2022 – June 2023",
    location: "Mohali, Punjab",
    description: "Developed and maintained multiple client projects using React.js, Redux, and modern web technologies."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8">
              <div className="absolute left-0 top-0">
                <Briefcase className="text-blue-500" size={24} />
              </div>
              <div className="border-l-2 border-gray-200 pl-8 ml-4 pb-8">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg text-gray-600">{exp.position}</span>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}