'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { debounce } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = 'Search...', className = '' }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchActs, setSearchActs] = useState(searchParams.get('acts') !== 'false');
  const [searchRules, setSearchRules] = useState(searchParams.get('rules') !== 'false');

  const debouncedSearch = debounce((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set('q', searchTerm);
    } else {
      params.delete('q');
    }
    params.delete('page'); // Reset to first page when searching
    router.push(`/acts?${params.toString()}`);
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleActsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchActs(e.target.checked);
    const params = new URLSearchParams(searchParams);
    params.set('acts', e.target.checked ? 'true' : 'false');
    router.push(`/acts?${params.toString()}`);
  };

  const handleRulesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRules(e.target.checked);
    const params = new URLSearchParams(searchParams);
    params.set('rules', e.target.checked ? 'true' : 'false');
    router.push(`/acts?${params.toString()}`);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-sans"
          placeholder={placeholder}
          aria-label="Search acts and rules"
        />
      </div>
      
      {/* Document Type Checkboxes */}
      <div className="flex items-center space-x-6 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
        <span className="text-sm font-medium text-gray-700 font-display">Document Type:</span>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={searchActs}
            onChange={handleActsChange}
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-sm font-medium text-gray-700 font-sans">Act</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={searchRules}
            onChange={handleRulesChange}
            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-sm font-medium text-gray-700 font-sans">Rule</span>
        </label>
      </div>
    </div>
  );
}
