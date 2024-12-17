import { useState, useCallback } from 'react';
import { ResumeFile } from '../types/resume';
import { uploadFile, deleteFile } from '../utils/storage';
import toast from 'react-hot-toast';

export function useResume() {
  const [resume, setResume] = useState<ResumeFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadResume = useCallback(async (file: File) => {
    try {
      setIsLoading(true);
      const uploadedFile = await uploadFile(file);
      const newResume: ResumeFile = {
        id: uploadedFile.id,
        name: file.name,
        url: uploadedFile.url,
        uploadDate: new Date().toISOString(),
        size: file.size
      };
      setResume(newResume);
      return newResume;
    } catch (error) {
      console.error('Error uploading resume:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteResume = useCallback(async () => {
    if (!resume) return;

    try {
      setIsLoading(true);
      await deleteFile(resume.id);
      setResume(null);
    } catch (error) {
      console.error('Error deleting resume:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [resume]);

  return {
    resume,
    isLoading,
    uploadResume,
    deleteResume
  };
}