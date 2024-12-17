import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import SkillCard from './skills/SkillCard';
import { skillCategories } from '../constants/data';
import { staggerContainer } from '../utils/animations';

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Expertise" className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category, index) => (
          <SkillCard 
            key={index}
            title={category.title}
            icon={category.icon as keyof typeof import('lucide-react')}
            skills={category.skills}
          />
        ))}
      </motion.div>
    </Section>
  );
}