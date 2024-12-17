import React from 'react';
import { motion } from 'framer-motion';
import { File, Download, Trash2, Edit } from 'lucide-react';
import Button from '../ui/Button';
import { ResumeFile } from '../../types/resume';
import toast from 'react-hot-toast';

interface ResumeDisplayProps {
  resume: ResumeFile;
  onDelete: () => Promise<void>;
  isLoading: boolean;
}

export default function ResumeDisplay({ resume, onDelete, isLoading }: ResumeDisplayProps) {
  const handleDelete = async () => {
    try {
      await onDelete();
      toast.success('Resume deleted successfully');
    } catch (error) {
      toast.error('Failed to delete resume');
    }
  };

  const handleEdit = () => {
    // Redirect to the edit page
    window.location.href = `/resume/edit/${resume.id}`;
  };

  const handleDownload = () => {
    // Open the file in a new tab for download
    window.open(resume.url, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
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
              onClick={handleDownload}
              icon={<Download size={16} />}
            >
              Download
            </Button>
            <Button
              variant="secondary"
              onClick={handleEdit}
              icon={<Edit size={16} />}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              icon={<Trash2 size={16} />}
              disabled={isLoading}
            >
              Delete
            </Button>
          </div>
        </div>
        
        <div className="mt-6">
          <iframe 
            width='100%' 
            height='500px' // Set a fixed height for better visibility
            src={resume.url} // Directly use the resume URL
            title={resume.name} // Add a title for accessibility
          >
            This browser does not support PDFs. Please download the PDF to view it: <a href={resume.url}>Download PDF</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}