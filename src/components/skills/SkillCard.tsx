import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { fadeIn } from '../../utils/animations';

interface SkillCardProps {
  title: string;
  icon: keyof typeof LucideIcons;
  skills: string[];
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  // Get the icon component dynamically from lucide-react
  const IconComponent = LucideIcons[icon];
  
  return (
    <motion.div variants={fadeIn}>
      <Card className="p-6">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center mb-4 text-blue-500"
        >
          {IconComponent && <IconComponent size={24} className="mr-2" />}
          <h3 className="text-xl font-bold">{title}</h3>
        </motion.div>
        <ul className="space-y-2">
          {skills.map((skill, i) => (
            <motion.li
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {skill}
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}