import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { fadeInUp } from '../../utils/animations';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function CertificateCard({ title, issuer, date, image }: CertificateCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card>
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center mb-4"
          >
            <Award className="text-blue-500 mr-2" size={24} />
            <h3 className="text-xl font-bold">{title}</h3>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gray-600"
          >
            <p className="mb-2">{issuer}</p>
            <p className="text-sm">{date}</p>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}