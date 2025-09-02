export type Form = {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  sizeBytes?: number;
};

export type Act = {
  id: string;
  slug: string;
  title: string;
  state: string;
  year?: number;
  category?: 'Act' | 'Rule';
  status?: 'Active' | 'Repealed' | 'Spent';
  pdfUrl: string;
  sizeBytes?: number;
  summary?: string;
  source?: string;
  forms?: Form[];
  createdAt?: string;
  updatedAt?: string;
};

export type Notification = {
  id: string;
  actId: string;
  title: string;
  type: 'amendment' | 'update' | 'clarification' | 'implementation' | 'enforcement';
  date: string;
  source?: string;
  pdfUrl?: string;
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
