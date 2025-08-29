import Link from 'next/link';
import { Act } from '@/lib/types';
import DownloadButton from './DownloadButton';

interface ActsGridProps {
  acts: Act[];
  className?: string;
}

export default function ActsGrid({ acts, className = '' }: ActsGridProps) {
  if (acts.length === 0) {
    return (
      <section className={`bg-white shadow rounded-lg p-12 text-center ${className}`} aria-label="No results found">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900 font-display">No acts found</h3>
        <p className="mt-1 text-sm text-gray-500 font-sans">Try adjusting your search or filter criteria.</p>
      </section>
    );
  }

  return (
    <section className={`bg-white shadow rounded-lg overflow-hidden ${className}`} aria-label="Acts and Rules List">
      {/* Mobile view - Cards for small screens */}
      <div className="block md:hidden">
        <div className="space-y-4 p-4">
          {acts.map((act) => (
            <article key={act.id} className={`rounded-lg p-4 ${act.state === 'Central' ? 'bg-blue-50 border-l-4 border-blue-400' : 'bg-gray-50'}`}>
              <header className="space-y-3">
                <div>
                  <Link href={`/acts/${act.slug}`} className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-150 font-display leading-tight break-words">
                    {act.title}
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${act.state === 'Central' ? 'bg-blue-100 text-blue-800' : 'bg-blue-100 text-blue-800'}`}>
                    {act.state === 'Central' ? 'Central (All States)' : act.state}
                  </span>
                  {act.year && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <time dateTime={act.year.toString()}>{act.year}</time>
                    </span>
                  )}
                  {act.category && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {act.category}
                    </span>
                  )}
                </div>
              </header>
              
              <footer className="flex items-center justify-between mt-4">
                <DownloadButton act={act} variant="primary" />
                {act.updatedAt && (
                  <span className="text-xs text-gray-500 font-sans">
                    Last updated: <time dateTime={act.updatedAt}>{new Date(act.updatedAt).toLocaleDateString()}</time>
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop view - Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200" role="table" aria-label="Acts and Rules Table">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display w-1/3">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display">State</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display">Year</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display">Last Updated</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-display">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {acts.map((act) => (
              <tr key={act.id} className={`hover:bg-gray-50 transition-colors duration-150 ${act.state === 'Central' ? 'bg-blue-50' : ''}`}>
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <Link href={`/acts/${act.slug}`} className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-150 font-display leading-tight break-words">
                      {act.title}
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${act.state === 'Central' ? 'bg-blue-100 text-blue-800' : 'bg-blue-100 text-blue-800'}`}>
                    {act.state === 'Central' ? 'Central (All States)' : act.state}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {act.year ? <time dateTime={act.year.toString()}>{act.year}</time> : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {act.category && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 font-sans">
                      {act.category}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {act.updatedAt ? (
                    <time dateTime={act.updatedAt}>{new Date(act.updatedAt).toLocaleDateString()}</time>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <DownloadButton act={act} variant="secondary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
