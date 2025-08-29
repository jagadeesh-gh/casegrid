'use client';

interface PageSizeSelectorProps {
  currentSize: number;
  onSizeChange: (size: number) => void;
  className?: string;
}

const PAGE_SIZE_OPTIONS = [5, 8, 12, 20];

export default function PageSizeSelector({ currentSize, onSizeChange, className = '' }: PageSizeSelectorProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <label htmlFor="page-size" className="text-sm font-medium text-gray-700 font-display">
        Show:
      </label>
      <select
        id="page-size"
        value={currentSize}
        onChange={(e) => onSizeChange(Number(e.target.value))}
        className="block px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans"
        aria-label="Select items per page"
      >
        {PAGE_SIZE_OPTIONS.map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </div>
  );
}
