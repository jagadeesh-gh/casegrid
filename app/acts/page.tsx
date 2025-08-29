import { Suspense } from 'react';
import Link from 'next/link';
import ActsList from './ActsList';
import Loader from '@/components/Loader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acts & Rules - Indian Legal Documents Database | CaseGrid',
  description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions, and download official PDF documents.',
  keywords: [
    'Indian acts and rules',
    'legal documents database',
    'state laws India',
    'central legislation',
    'legal search platform',
    'acts database',
    'rules database',
    'Indian legal system',
    'legal research tools',
    'law firm resources'
  ],
  openGraph: {
    title: 'Acts & Rules - Indian Legal Documents Database | CaseGrid',
    description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions.',
    url: 'https://casegrid.com/acts',
    siteName: 'CaseGrid',
    images: [
      {
        url: '/acts-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CaseGrid - Indian Acts and Rules Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acts & Rules - Indian Legal Documents Database | CaseGrid',
    description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions.',
    images: ['/acts-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://casegrid.com/acts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ActsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                CaseGrid
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/acts" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200" aria-current="page">
                Acts/Rules
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
        <section className="mb-8" aria-labelledby="page-heading">
          <h1 id="page-heading" className="text-3xl font-bold text-gray-900 mb-2">Acts & Rules</h1>
          <p className="text-gray-600">
            Browse and search through official Acts and Rules for Indian states. 
            Access comprehensive legal documents with advanced filtering and search capabilities.
          </p>
        </section>

        <Suspense fallback={<Loader size="lg" className="py-12" />}>
          <ActsList />
        </Suspense>
      </main>
    </div>
  );
}
