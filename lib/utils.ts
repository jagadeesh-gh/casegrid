import { Act, SearchFilters } from './types';

export function searchActs(acts: Act[], filters: SearchFilters): Act[] {
  let filteredActs = [...acts];

  // Filter by state if specified
  if (filters.state && filters.state.trim()) {
    filteredActs = filteredActs.filter(act => act.state === filters.state);
  }

  // Filter by category (Acts/Rules) if specified
  if (filters.acts !== undefined || filters.rules !== undefined) {
    filteredActs = filteredActs.filter(act => {
      if (filters.acts && filters.rules) {
        // Both checked - show all
        return true;
      } else if (filters.acts && !filters.rules) {
        // Only Acts checked
        return act.category === 'Act';
      } else if (!filters.acts && filters.rules) {
        // Only Rules checked
        return act.category === 'Rule';
      } else {
        // Neither checked - show none
        return false;
      }
    });
  }

  // Search by query if specified
  if (filters.q && filters.q.trim()) {
    const query = filters.q.toLowerCase().trim();
    filteredActs = filteredActs.filter(act => 
      act.title.toLowerCase().includes(query) ||
      (act.summary && act.summary.toLowerCase().includes(query)) ||
      act.state.toLowerCase().includes(query) ||
      (act.category && act.category.toLowerCase().includes(query))
    );
  }

  return filteredActs;
}

export function formatFileSize(bytes?: number): string {
  if (!bytes) return 'Unknown size';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
