'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import StateFilter from '@/components/StateFilter';
import CategoryFilter from '@/components/CategoryFilter';
import ActsGrid from '@/components/ActsGrid';
import Pagination from '@/components/Pagination';
import PageSizeSelector from '@/components/PageSizeSelector';
import { SEED_ACTS } from '@/lib/seed-data';
import { searchActs } from '@/lib/utils';
import { SearchFilters } from '@/lib/types';

const DEFAULT_ITEMS_PER_PAGE = 8;

export default function ActsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filteredActs, setFilteredActs] = useState(SEED_ACTS);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  // Get search parameters from URL
  const q = searchParams.get('q') || '';
  const state = searchParams.get('state') || '';
  const category = searchParams.get('category') || '';
  const acts = searchParams.get('acts') !== 'false';
  const rules = searchParams.get('rules') !== 'false';
  const pageParam = searchParams.get('page');
  const sizeParam = searchParams.get('size');

  // Filter acts based on search and filter criteria
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = searchActs(SEED_ACTS, { q, state, category, acts, rules });
      setFilteredActs(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [q, state, category, acts, rules]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`/acts?${params.toString()}`);
  };

  const handlePageSizeChange = (size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams);
    params.set('size', size.toString());
    params.delete('page'); // Reset to first page
    router.push(`/acts?${params.toString()}`);
  };

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
    if (sizeParam) {
      setItemsPerPage(parseInt(sizeParam, 10));
    }
  }, [pageParam, sizeParam]);

  // Reset to first page when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [q, state, category, acts, rules]);

  const totalPages = Math.ceil(filteredActs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActs = filteredActs.slice(startIndex, endIndex);

  return (
    <div className="space-y-8 font-sans">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
          <div className="lg:col-span-2">
            <SearchBar placeholder="Search acts and rules..." />
          </div>
          <div>
            <StateFilter />
          </div>
          <div>
            <CategoryFilter />
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 font-sans">
            {isLoading ? 'Searching...' : `Found ${filteredActs.length} act${filteredActs.length !== 1 ? 's' : ''}`}
            {q && ` for "${q}"`}
            {state && ` in ${state}`}
            {category && ` in ${category}`}
            {acts && !rules && ' (Acts only)'}
            {!acts && rules && ' (Rules only)'}
            {acts && rules && ' (Acts & Rules)'}
            {!acts && !rules && ' (No results - please select at least one category)'}
          </p>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          <ActsGrid acts={currentActs} />
          {filteredActs.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
                <PageSizeSelector
                  currentSize={itemsPerPage}
                  onSizeChange={handlePageSizeChange}
                />
                {filteredActs.length > itemsPerPage && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredActs.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    className="w-full lg:w-auto"
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
