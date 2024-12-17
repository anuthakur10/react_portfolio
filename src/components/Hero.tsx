import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { personalInfo } from '../constants/data';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {personalInfo.description}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/anuthakur10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/anil-kumar-26b415171"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}