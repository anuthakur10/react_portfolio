import React from 'react';
import { motion } from 'framer-motion';
import { File, Download, Trash2, Edit } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';
import Button from '../ui/Button';
import { ResumeFile } from '../../types/resume';

interface ResumeViewerProps {
  resume: ResumeFile;
  onDelete: () => void;
  isLoading: boolean;
}

export default function ResumeViewer({ resume, onDelete, isLoading }: ResumeViewerProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <File className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-lg font-medium text-gray-900">{resume.name}</h3>
            <p className="text-sm text-gray-500">
              Uploaded on {new Date(resume.uploadDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="secondary"
            onClick={() => window.open(resume.url, '_blank')}
            icon={<Download size={16} />}
          >
            Download
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.location.href = `/resume/edit/${resume.id}`}
            icon={<Edit size={16} />}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={onDelete}
            icon={<Trash2 size={16} />}
            disabled={isLoading}
          >
            Delete
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <iframe
          src={`${resume.url}#toolbar=0`}
          className="w-full h-[600px] border border-gray-200 rounded-lg"
          title="Resume Preview"
        />
      </div>
    </motion.div>
  );
}