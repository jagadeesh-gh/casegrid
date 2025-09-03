'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const CATEGORIES = [
  'Governance & Administration',
  'Revenue & Land Administration',
  'Property & Contracts',
  'Labour & Employment',
  'Taxation & Finance',
  'Banking, Insurance & Financial Services',
  'Trade, Commerce & Industry',
  'Agriculture, Animal Husbandry & Fisheries',
  'Environment & Forests',
  'Energy & Natural Resources',
  'Transport & Infrastructure',
  'Urban Development & Housing',
  'Health & Family Welfare',
  'Education & Research',
  'Science, Technology & IT',
  'Social Justice & Welfare',
  'Culture, Media & Sports',
  'Defence & Security',
  'Police, Criminal Law & Justice',
  'Courts & Legal System',
  'Human Rights & Citizenship',
  'Agrarian & Rural Development',
  'Commerce & Consumer Affairs',
  'Tourism & Hospitality',
  'Miscellaneous / Special Acts'
];

interface CategoryFilterProps {
  className?: string;
}

export default function CategoryFilter({ className = '' }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedCategory = searchParams.get('category') || '';

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    params.delete('page'); // Reset to first page when filtering
    router.push(`/acts?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2 font-display">
        Category
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-sans"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="category-filter"
        >
          <span className="block truncate">
            {selectedCategory || 'All Categories'}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            <div
              onClick={() => handleCategoryChange('')}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 ${
                !selectedCategory ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
              }`}
            >
              <span className="block truncate font-medium">All Categories</span>
              {!selectedCategory && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            
            {CATEGORIES.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 ${
                  selectedCategory === category ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                }`}
              >
                <span className="block truncate">{category}</span>
                {selectedCategory === category && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
