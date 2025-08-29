export type Act = {
  id: string;
  slug: string;
  title: string;
  state: string;
  year?: number;
  category?: 'Act' | 'Rule';
  pdfUrl: string;
  sizeBytes?: number;
  summary?: string;
  source?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SearchFilters = {
  q?: string;
  state?: string;
  acts?: boolean;
  rules?: boolean;
};

export type SearchParams = {
  q?: string;
  state?: string;
  acts?: boolean;
  rules?: boolean;
};
