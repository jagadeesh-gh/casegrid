import Link from 'next/link';
import { Act } from '@/lib/types';
import DownloadButton from './DownloadButton';

interface ActCardProps {
  act: Act;
  className?: string;
}

export default function ActCard({ act, className = '' }: ActCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link 
              href={`/acts/${act.slug}`}
              className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2"
            >
              {act.title}
            </Link>
            
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              {act.state && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {act.state}
                </span>
              )}
              {act.year && (
                <span className="text-gray-500">
                  {act.year}
                </span>
              )}
              {act.category && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {act.category}
                </span>
              )}
            </div>
          </div>
        </div>

        {act.summary && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {act.summary}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {act.source && (
              <span>Source: {act.source}</span>
            )}
          </div>
          
          <DownloadButton act={act} variant="primary" />
        </div>
      </div>
    </div>
  );
}
