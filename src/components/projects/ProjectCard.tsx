import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { scaleIn } from '../../utils/animations';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, github, live, tags }: ProjectCardProps) {
  return (
    <motion.div variants={scaleIn}>
      <Card>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-sm rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-end space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={live}
              className="text-gray-600 hover:text-gray-900"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}