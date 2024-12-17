import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';

export default function ContactForm() {
  return (
    <motion.form
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></motion.textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}