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
  actNumber?: number; // e.g., 35 for "Act 35 of 2009"
  state: string; // TODO: Consider renaming to 'jurisdiction' in future updates
  year?: number;
  documentType?: 'Act' | 'Rule' | 'Regulation' | 'Order' | 'Notification' | 'Circular';
  category?: 
    | 'Governance & Administration'
    | 'Revenue & Land Administration'
    | 'Property & Contracts'
    | 'Labour & Employment'
    | 'Taxation & Finance'
    | 'Banking, Insurance & Financial Services'
    | 'Trade, Commerce & Industry'
    | 'Agriculture, Animal Husbandry & Fisheries'
    | 'Environment & Forests'
    | 'Energy & Natural Resources'
    | 'Transport & Infrastructure'
    | 'Urban Development & Housing'
    | 'Health & Family Welfare'
    | 'Education & Research'
    | 'Science, Technology & IT'
    | 'Social Justice & Welfare'
    | 'Culture, Media & Sports'
    | 'Defence & Security'
    | 'Police, Criminal Law & Justice'
    | 'Courts & Legal System'
    | 'Human Rights & Citizenship'
    | 'Agrarian & Rural Development'
    | 'Commerce & Consumer Affairs'
    | 'Tourism & Hospitality'
    | 'Miscellaneous / Special Acts';
  status?: 'In Force' | 'Repealed' | 'Spent';
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
  category?: string;
  acts?: boolean;
  rules?: boolean;
};

export type SearchParams = {
  q?: string;
  state?: string;
  category?: string;
  acts?: boolean;
  rules?: boolean;
};
