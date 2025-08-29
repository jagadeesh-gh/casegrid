import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SEED_ACTS } from '@/lib/seed-data';
import DownloadButton from '@/components/DownloadButton';
import { formatFileSize } from '@/lib/utils';

interface ActDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ActDetailPageProps) {
  const act = SEED_ACTS.find(a => a.slug === params.slug);
  
  if (!act) {
    return {
      title: 'Act Not Found - CaseGrid',
    };
  }

  return {
    title: `${act.title} - CaseGrid`,
    description: act.summary || `View details and download ${act.title}`,
  };
}

export default function ActDetailPage({ params }: ActDetailPageProps) {
  const act = SEED_ACTS.find(a => a.slug === params.slug);

  if (!act) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">CaseGrid</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/acts" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Acts/Rules
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/acts" className="hover:text-blue-600">
                Acts
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium">{act.title}</li>
          </ol>
        </nav>

        {/* Act Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{act.title}</h1>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {act.state && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {act.state}
                  </span>
                )}
                {act.year && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {act.year}
                  </span>
                )}
                {act.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {act.category}
                  </span>
                )}
              </div>

              {act.summary && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {act.summary}
                </p>
              )}
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Document Information
                </h3>
                <dl className="space-y-2">
                  {act.state && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">State</dt>
                      <dd className="text-sm text-gray-900">{act.state}</dd>
                    </div>
                  )}
                  {act.year && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Year</dt>
                      <dd className="text-sm text-gray-900">{act.year}</dd>
                    </div>
                  )}
                  {act.category && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Category</dt>
                      <dd className="text-sm text-gray-900">{act.category}</dd>
                    </div>
                  )}
                </dl>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  File Details
                </h3>
                <dl className="space-y-2">
                  {act.sizeBytes && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">File Size</dt>
                      <dd className="text-sm text-gray-900">{formatFileSize(act.sizeBytes)}</dd>
                    </div>
                  )}
                  {act.source && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Source</dt>
                      <dd className="text-sm text-gray-900">{act.source}</dd>
                    </div>
                  )}
                  {act.createdAt && (
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Added</dt>
                      <dd className="text-sm text-gray-900">
                        {new Date(act.createdAt).toLocaleDateString()}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            {/* Download Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Download Official Document
                </h3>
                <p className="text-gray-600 mb-6">
                  Click below to download the official PDF document for {act.title}.
                </p>
                
                <DownloadButton act={act} variant="primary" className="inline-block" />
                
                <p className="text-xs text-gray-500 mt-4">
                  This document is provided for informational purposes only. 
                  Please refer to the official source for the most current version.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Acts */}
        <div className="mt-8 text-center">
          <Link
            href="/acts"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Acts
          </Link>
        </div>
      </main>
    </div>
  );
}
