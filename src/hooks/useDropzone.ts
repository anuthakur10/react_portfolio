import { useCallback } from 'react';
import { useDropzone as useReactDropzone } from 'react-dropzone';

interface DropzoneOptions {
  onDrop: (acceptedFiles: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
}

export function useDropzone({
  onDrop,
  accept,
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024 // 5MB
}: DropzoneOptions) {
  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => file.size <= maxSize);
    onDrop(validFiles);
  }, [onDrop, maxSize]);

  return useReactDropzone({
    onDrop: handleDrop,
    accept,
    maxFiles,
    maxSize,
    multiple: false
  });
}