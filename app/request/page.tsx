'use client';

import Link from 'next/link';
import { INDIAN_STATES } from '@/lib/states';

export default function RequestPage() {
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
              <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/acts" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans">
                Acts/Rules
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/request" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group font-sans" aria-current="page">
                Request Missing Act/Rule
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-100 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" role="main">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">Submit Your Request</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Can't find the act or rule you're looking for? Submit a request and we'll deliver it to you within 48 hours of availability!
          </p>
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form 
            action="https://formcarry.com/s/pNjBWiHKjnK" 
            method="POST" 
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="actName" className="block text-sm font-medium text-gray-700 font-display mb-2">
                  Act/Rule Name *
                </label>
                <input
                  type="text"
                  id="actName"
                  name="actName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-base"
                  placeholder="Enter the name of the act or rule"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 font-display mb-2">
                  State *
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-base"
                >
                  <option value="">Select a state</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 font-display mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-base"
                placeholder="Provide additional details about what you're looking for, context, or specific requirements"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-display mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-display mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-base"
                  placeholder="+91 (999) 999-9999"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-800 font-display">Delivery Promise</h3>
                  <p className="text-sm text-blue-700 font-sans mt-1">
                    We'll deliver your requested act/rule within 48 hours of availability. You'll receive email notifications about our progress.
                  </p>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium font-display text-lg"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 font-display mb-3">💡 How This Helps Us</h3>
            <p className="text-indigo-800 font-sans">
              Your requests help us prioritize which states to add next. We analyze user demand to expand our coverage strategically, 
              ensuring we're adding the most requested legal documents first.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
