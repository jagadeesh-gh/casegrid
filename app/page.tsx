'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import StateFilter from '@/components/StateFilter';
import StateCoverageModal from '@/components/StateCoverageModal';
import LaunchCountdown from '@/components/LaunchCountdown';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-display">
                CaseGrid
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans" aria-current="page">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/acts" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans">
                Acts/Rules
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/request" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans">
                Request Missing Act/Rule
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" role="main">
        <section className="text-center mb-20" aria-labelledby="hero-heading">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in-up font-sans" role="status">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Comprehensive Legal Resource Platform
          </div>
          
          <h1 id="hero-heading" className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-8 leading-tight font-display">
            Your Gateway to
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Indian Legal Documents
            </span>
          </h1>
          
          <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed font-sans">
            CaseGrid provides comprehensive access to Acts and Rules across all Indian states. 
            Find, filter, and download official legal documents with ease through our advanced platform.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Link
              href="/acts"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 font-sans"
              aria-label="Start exploring acts and rules"
            >
              <span className="relative z-10">Start Exploring</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <svg className="ml-2 -mr-1 w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Launch Countdown Banner */}
        <section className="mb-20" aria-labelledby="launch-heading">
          <div className="max-w-4xl mx-auto">
            <LaunchCountdown />
          </div>
        </section>

        {/* State Coverage Banner */}
        <section className="mb-20" aria-labelledby="coverage-heading">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full group bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-300 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-left"
              aria-label="View current state coverage and roadmap"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 id="coverage-heading" className="text-2xl font-bold text-blue-900 font-display">
                  Current State Coverage
                </h2>
                <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                  <span className="text-sm font-medium font-sans">View Details</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-100 border border-green-200 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-700 font-display">7</div>
                  <div className="text-sm text-green-600 font-sans">States Available</div>
                </div>
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-orange-700 font-display">29</div>
                  <div className="text-sm text-orange-600 font-sans">Coming Soon</div>
                </div>
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-700 font-display">19%</div>
                  <div className="text-sm text-blue-600 font-sans">Coverage</div>
                </div>
              </div>
              
              <p className="text-blue-800 font-sans">
                <strong>Currently available:</strong> Central, Maharashtra, West Bengal, Rajasthan, Madhya Pradesh, Karnataka, Tamil Nadu. 
                <span className="block mt-2 text-sm">
                  Click to see our complete roadmap and which states are coming next!
                </span>
              </p>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Platform Features</h2>
          
          <article className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300" aria-hidden="true">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 font-display">Advanced Search</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-sans">
                Powerful full-text search across act titles, summaries, and metadata. 
                Find relevant legal documents quickly with intelligent filtering and real-time results.
              </p>
            </div>
          </article>

          <article className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300" aria-hidden="true">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300 font-display">State-wise Filtering</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-sans">
                Filter acts and rules by specific Indian states or view central legislation. 
                Navigate through jurisdictional boundaries with ease and precision.
              </p>
            </div>
          </article>

          <article className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300" aria-hidden="true">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300 font-display">Instant Downloads</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-sans">
                Access official PDF documents instantly with our streamlined download system. 
                All documents are verified and sourced directly from official government portals.
              </p>
            </div>
          </article>
        </section>

        {/* Call to Action */}
        <section className="text-center" aria-labelledby="cta-heading">
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <h2 id="cta-heading" className="text-3xl font-bold mb-6 font-display">Ready to Explore Indian Legislation?</h2>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed font-sans">
                Join thousands of legal professionals, researchers, and students who use CaseGrid 
                to access comprehensive Indian legal documents. Start your legal research journey today.
              </p>
              <Link
                href="/acts"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-sans"
                aria-label="Browse all acts and rules"
              >
                <span>Browse All Acts & Rules</span>
                <svg className="ml-2 -mr-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-24" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-display">CaseGrid</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-sans">
              Your comprehensive platform for Indian legal acts and rules. 
              Access official documents, advanced search, and state-wise filtering for all your legal research needs.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500 font-sans">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors duration-200">Terms of Service</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
            </div>
            <p className="mt-6 text-xs text-gray-400 font-sans">
              © 2025 CaseGrid. All rights reserved. | Indian Legal Acts & Rules Database
            </p>
          </div>
        </div>
      </footer>

      {/* State Coverage Modal */}
      <StateCoverageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
