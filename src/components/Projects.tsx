import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import ProjectCard from './projects/ProjectCard';
import { projects } from '../constants/data';
import { staggerContainer } from '../utils/animations';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" className="bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </Section>
  );
}