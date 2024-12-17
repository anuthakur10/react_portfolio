import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { staggerContainer } from '../../utils/animations';

export default function ResumeSection() {
  return (
    <Section id="resume" title="Resume" className="bg-white p-6 ">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto border p-5 border-gray-300 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Anil Kumar</h1>
        <h2 className="text-xl font-semibold text-center mb-2">React JS Developer</h2>
        <p className="text-center mb-6">Experienced ReactJS developer passionate about crafting efficient, scalable, and maintainable web applications. With a strong background in front-end development and a focus on user experience, I excel in translating designs and wireframes into high-quality code. Committed to ongoing learning, I stay current with the latest trends and best practices in ReactJS and front-end development, enabling me to deliver cutting-edge solutions. I thrive in collaborative environments, leveraging my expertise to contribute to innovative and responsive web applications.</p>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Core Skills:</strong> Proficient in React.js, Next.js, TypeScript, Node.js, Redux (Thunk/Saga), Express.js, jQuery, AJAX, HTML, CSS, SCSS, Bootstrap, Tailwind CSS.</li>
          <li><strong>UI/UX & Responsive Design:</strong> Skilled in Material UI, Ant Design, and responsive design for seamless cross-device UX.</li>
          <li><strong>Server-Side & Microservices:</strong> Experienced with SSR (Next.js, Gatsby), microservices, Docker, and cloud platforms (Azure, AWS).</li>
          <li><strong>API & Web Services:</strong> Proficient in RESTful APIs, GraphQL, Axios, and data handling.</li>
          <li><strong>DevOps:</strong> Strong knowledge of CI/CD pipelines, Git, TFS, and Visual Studio Code.</li>
        </ul>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Professional Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">React JS/Next JS Frontend Developer</h3>
          <p>June 2023 - July 2023, Live Deftsoft Informatics Pvt. Ltd, Mohali, Punjab</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">React Developer</h3>
          <p>April 2022 - June 2023, Meander Software Pvt Ltd, Mohali Punjab</p>
        </div>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Project Details</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Tijarah.com</h3>
          <p><strong>Technologies:</strong> ReactJS, NodeJS, Express, MongoDB</p>
          <p><strong>Category:</strong> Digital Marketplace</p>
          <p><strong>About Tijarah:</strong> A digital marketplace designed to facilitate buying and selling products online.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>User registration and profile management</li>
            <li>Secure payment gateway integration</li>
            <li>Product listing and search functionality</li>
            <li>Ratings and reviews for products</li>
            <li>User-friendly interface for seamless navigation</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Radbag.be</h3>
          <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, ReactJS, NodeJS</p>
          <p><strong>Category:</strong> E-commerce</p>
          <p><strong>About Radbag:</strong> An online store specializing in unique gifts.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb -2">
            <li>Responsive design for optimal viewing on all devices</li>
            <li>Advanced product categorization and filtering</li>
            <li>Customer reviews and ratings</li>
            <li>Simplified checkout process</li>
            <li>Promotional offers and discounts</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Meander.one</h3>
          <p><strong>Technologies:</strong> ReactJS, Redux, NodeJS, MongoDB</p>
          <p><strong>Category:</strong> E-commerce</p>
          <p><strong>About Meander:</strong> An e-commerce platform that offers a diverse range of products with a focus on user experience.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Seamless navigation and product discovery</li>
            <li>Shopping cart and checkout functionalities</li>
            <li>User accounts for order tracking</li>
            <li>Personalized product recommendations</li>
            <li>Sales tracking and reporting analytics</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">CRM Dores</h3>
          <p><strong>Technologies:</strong> ReactJS, NodeJS, MongoDB, Redux</p>
          <p><strong>Category:</strong> Customer Relationship Management</p>
          <p><strong>About CRM Dores:</strong> A CRM system tailored for efficient client data management & sales tracking.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Client data management and segmentation</li>
            <li>Sales pipeline tracking</li>
            <li>Automated reporting and analytics</li>
            <li>Role-based access control</li>
            <li>Integration with communication tools for notifications</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Homeways</h3>
          <p><strong>Technologies:</strong> ReactJS, NodeJS, Express, MongoDB</p>
          <p><strong>Category:</strong> Home Rental Services</p>
          <p><strong>About Homeways:</strong> An online platform for home rental services that connects landlords and tenants.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Property listings with detailed descriptions</li>
            <li>User reviews and ratings</li>
            <li>Booking and scheduling functionalities</li>
            <li>Secure messaging between landlords and tenants</li>
            <li>Admin dashboard for managing listings and user inquiries</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Tactile Solutions</h3>
          <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, ReactJS, Next.js, NodeJS</p>
          <p><strong>Category:</strong> Accessibility Solutions</p>
          <p><strong>About Tactile Solutions:</strong> A leader in providing compliant workplace solutions.</p>
          <p><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-2">
            <li>Extensive range of tactile walking surface indicators</li>
            <li>Compliance with AODA, CSA, ISO, FADS, and IFC standards</li>
            <li>User-friendly navigation for easy product search</li>
            <li>Detailed product descriptions and specifications</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <h3 className="font-semibold">AMIE Kolkata</h3>
            <p>B.Tech in Computer Engineering (Pursuing)</p>
          </li>
          <li>
            <h3 className="font-semibold">GMP Chamba, HP</h3>
            <p>Diploma in ECE Engineering (2012 - 2015)</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Certificates</h2>
        <ul className="list-disc list-inside mb-4">
          <li>ReactJS Certification: Infosys (2024)</li>
          <li>MERN Stack Course: Meander Software Pvt. Ltd, Mohali, Punjab (2022)</li>
        </ul>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Personal Traits</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Positive Attitude & Determination: Committed to delivering creative and innovative solutions.</li>
          <li>Quick Learner: Rapidly grasps new technologies and best practices.</li>
          <li>Deadline-Oriented: Understands project requirements and consistently meets deadlines.</li>
          <li>CI Tools Proficiency: Experienced in using Continuous Integration tools.</li>
          <li>Basic ORM Knowledge: Familiar with Object Relational Mapping for efficient data handling.</li>
        </ul>

        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Contact Information</h2>
        <p>Phone: 7876885838</p>
        <p>Email: <a href="mailto:anilk79537@gmail.com" className="text-blue-500 underline">anilk79537@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/anil-kumar-26b415171" className="text-blue-500 underline">linkedin.com/in/anil-kumar-26b415171</a></p>
        <p>Location: Mohali, Punjab</p>
      </motion.div>
    </Section>
  );
}