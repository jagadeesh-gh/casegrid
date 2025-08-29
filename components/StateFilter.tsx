'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { INDIAN_STATES } from '@/lib/states';

export default function StateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentState, setCurrentState] = useState(searchParams.get('state') || '');

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (currentState) {
      params.set('state', currentState);
    } else {
      params.delete('state');
    }
    params.delete('page'); // Reset to first page when filtering
    router.push(`/acts?${params.toString()}`);
  }, [currentState, searchParams, router]);

  const handleStateChange = (selectedState: string) => {
    setCurrentState(selectedState);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="state-filter" className="block text-sm font-medium text-gray-700 font-display">
        Filter by State
      </label>
      <div className="relative">
        <select
          id="state-filter"
          value={currentState}
          onChange={(e) => handleStateChange(e.target.value)}
          className="block w-full px-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-sans"
          aria-label="Select state to filter acts"
        >
          <option value="">Select a state</option>
          {INDIAN_STATES.map((state) => (
            <option key={state} value={state}>
              {state === 'Central' ? 'Central (All States)' : state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
