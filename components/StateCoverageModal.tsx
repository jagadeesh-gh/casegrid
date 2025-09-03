'use client';

import { useState } from 'react';
import Link from 'next/link';

interface StateCoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// States currently available in the system
const AVAILABLE_STATES = [
];

// States that are coming soon (subset of all Indian states)
const COMING_SOON_STATES = [
  'Central',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'Maharashtra',
  'West Bengal',
];

export default function StateCoverageModal({ isOpen, onClose }: StateCoverageModalProps) {
  const [showAllComingSoon, setShowAllComingSoon] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white font-display" id="modal-title">
                State Coverage & Roadmap
              </h3>
              <button
                onClick={onClose}
                className="rounded-md bg-white/10 p-2 text-white hover:bg-white/20 transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 font-display">{AVAILABLE_STATES.length}</div>
                <div className="text-sm text-green-700 font-sans">States Available</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 font-display">{COMING_SOON_STATES.length}</div>
                <div className="text-sm text-orange-700 font-sans">Coming Soon</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 font-display">
                  {Math.round((AVAILABLE_STATES.length / (AVAILABLE_STATES.length + COMING_SOON_STATES.length)) * 100)}%
                </div>
                <div className="text-sm text-blue-700 font-sans">Coverage</div>
              </div>
            </div>

            {/* Available States */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 font-display mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Available Now
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {AVAILABLE_STATES.map((state) => (
                  <div key={state} className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                    <div className="text-sm font-medium text-green-800 font-sans">{state}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon States */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 font-display flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  Coming Soon
                </h4>
                <button
                  onClick={() => setShowAllComingSoon(!showAllComingSoon)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {showAllComingSoon ? 'Show Less' : 'Show All'}
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {(showAllComingSoon ? COMING_SOON_STATES : COMING_SOON_STATES.slice(0, 12)).map((state) => (
                  <div key={state} className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
                    <div className="text-sm font-medium text-orange-800 font-sans">{state}</div>
                  </div>
                ))}
                {!showAllComingSoon && COMING_SOON_STATES.length > 12 && (
                  <div className="bg-orange-100 border border-orange-300 rounded-lg px-3 py-2 col-span-full">
                    <div className="text-sm text-orange-800 font-sans text-center">
                      +{COMING_SOON_STATES.length - 12} more states
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Roadmap Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h5 className="text-sm font-semibold text-blue-900 font-display mb-2">🚀 Our Roadmap</h5>
              <p className="text-sm text-blue-800 font-sans mb-3">
                We're actively working to expand our coverage to all Indian states. Our team is:
              </p>
              <ul className="text-sm text-blue-700 font-sans space-y-1 ml-4">
                <li>• Partnering with state governments for official documents</li>
                <li>• Digitizing and organizing existing legal materials</li>
                <li>• Ensuring accuracy and authenticity of all content</li>
                <li>• Prioritizing states based on user demand</li>
              </ul>
            </div>

            {/* Call to Action with Form Link */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
              <h5 className="text-sm font-semibold text-indigo-900 font-display mb-2">💡 How You Can Help</h5>
              <p className="text-sm text-indigo-800 font-sans mb-3">
                <strong>Submit requests</strong> for specific acts/rules from your state. We prioritize user requests 
                and will notify you when your state becomes available. Your feedback helps us expand strategically!
              </p>
              <Link
                href="/request"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                  Request Missing Act/Rule
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 font-sans"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
