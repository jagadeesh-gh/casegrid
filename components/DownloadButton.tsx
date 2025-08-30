'use client';

import { useState } from 'react';
import { Act } from '@/lib/types';
import { formatFileSize } from '@/lib/utils';

interface DownloadButtonProps {
  act: Act;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function DownloadButton({ act, variant = 'primary', className = '' }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!act.pdfUrl) {
      setError('PDF not available');
      return;
    }

    setIsDownloading(true);
    setError(null);

    try {
      // For demo purposes, we'll open the PDF in a new tab
      // In production, this could be a server endpoint that validates and streams the PDF
      const link = document.createElement('a');
      link.href = act.pdfUrl;
      link.target = '_blank';
      link.download = `${act.slug}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const baseClasses = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors';
  
  const variantClasses = variant === 'primary' 
    ? 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
    : 'text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500';

  return (
    <div className={className}>
      <button
        onClick={handleDownload}
        disabled={isDownloading || !act.pdfUrl}
        className={`${baseClasses} ${variantClasses}`}
        aria-label={`Download ${act.title} PDF`}
      >
        {isDownloading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Downloading...
          </>
        ) : (
          <>
            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </>
        )}
      </button>
      
      {act.sizeBytes && (
        <p className="hidden sm:block text-xs text-gray-500 mt-1">
          {formatFileSize(act.sizeBytes)}
        </p>
      )}
      
      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
