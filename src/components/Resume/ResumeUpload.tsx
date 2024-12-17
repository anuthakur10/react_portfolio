import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { fadeInUp } from '../../utils/animations';
import toast from 'react-hot-toast';

interface ResumeUploadProps {
  onUpload: (file: File) => void;
}

export default function ResumeUpload({ onUpload }: ResumeUploadProps) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      try {
        await onUpload(file);
        toast.success('Resume uploaded successfully!');
      } catch (error) {
        toast.error('Failed to upload resume');
      }
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <motion.div variants={fadeInUp}>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-lg font-medium text-gray-900">
          {isDragActive ? 'Drop your resume here' : 'Upload your resume'}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Drag and drop your resume file here, or click to select a file
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Supported formats: PDF, DOC, DOCX (Max size: 5MB)
        </p>
      </div>
    </motion.div>
  );
}