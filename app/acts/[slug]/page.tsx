import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SEED_ACTS, SEED_NOTIFICATIONS } from '@/lib/seed-data';
import DownloadButton from '@/components/DownloadButton';
import ActDetailsTabbed from '@/components/ActDetailsTabbed';
import { formatFileSize, formatDate } from '@/lib/utils';

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

  // Get notifications for this act
  const notifications = SEED_NOTIFICATIONS.filter(n => n.actId === act.id);

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

        {/* Act Details - Minimal Version */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Header with essential info only */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{act.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {act.state && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {act.state}
                  </span>
                )}
                {act.year && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {act.year}
                  </span>
                )}
                {act.category && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {act.category}
                  </span>
                )}
                {act.status && (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    act.status === 'Active' ? 'bg-green-100 text-green-800' :
                    act.status === 'Repealed' ? 'bg-red-100 text-red-800' :
                    act.status === 'Spent' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {act.status}
                  </span>
                )}
              </div>

              {act.summary && (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {act.summary}
                </p>
              )}
            </div>

            {/* Simple Download Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {act.source && (
                    <span>Source: {act.source}</span>
                  )}
                </div>
                <DownloadButton act={act} variant="primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications and Forms Section */}
        <div className="mt-8">
          <ActDetailsTabbed act={act} notifications={notifications} />
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
            Back to Acts/Rules
          </Link>
        </div>
      </main>
    </div>
  );
}
