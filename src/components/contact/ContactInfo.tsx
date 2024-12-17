import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../../constants/data';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
      <div className="flex items-center space-x-4">
        <Mail className="text-blue-500" />
        <span>{personalInfo.contact.email}</span>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="text-blue-500" />
        <span>{personalInfo.contact.phone}</span>
      </div>
      <div className="flex items-center space-x-4">
        <MapPin className="text-blue-500" />
        <span>{personalInfo.contact.location}</span>
      </div>
    </div>
  );
}