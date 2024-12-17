import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import CertificateCard from './certificates/CertificateCard';
import { certificates } from '../constants/data';
import { staggerContainer } from '../utils/animations';

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates" className="bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </motion.div>
    </Section>
  );
}