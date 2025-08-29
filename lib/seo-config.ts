import type { Metadata } from 'next'

// Base URL configuration
export const BASE_URL = 'https://casegrid.com'
export const SITE_NAME = 'CaseGrid'
export const SITE_DESCRIPTION = 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states'

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Indian legal acts',
    'Indian legal rules',
    'legal documents India',
    'acts and rules database',
    'Indian legislation',
    'legal search platform',
    'state laws India',
    'central acts India',
    'legal PDF downloads',
    'case management',
    'law firm software',
    'legal research tools'
  ],
  authors: [{ name: 'CaseGrid Team' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Indian Legal Acts and Rules Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@casegrid',
    creator: '@casegrid',
    title: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'legal',
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
    description: 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states. Search across titles, filter by state, and access official PDF documents with ease.',
    keywords: [
      'Indian legal acts',
      'Indian legal rules',
      'legal documents India',
      'acts and rules database',
      'Indian legislation',
      'legal search platform',
      'state laws India',
      'central acts India',
      'legal PDF downloads',
      'case management',
      'law firm software',
      'legal research tools'
    ],
    openGraph: {
      title: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
      description: 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states.',
      url: BASE_URL,
    },
    twitter: {
      title: `${SITE_NAME} - Indian Legal Acts & Rules Database`,
      description: 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states.',
    },
  },
  acts: {
    title: 'Acts & Rules - Indian Legal Documents Database',
    description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions, and download official PDF documents.',
    keywords: [
      'Indian acts and rules',
      'legal documents database',
      'state laws India',
      'central legislation',
      'legal search platform',
      'acts database',
      'rules database',
      'Indian legal system',
      'legal research tools',
      'law firm resources'
    ],
    openGraph: {
      title: 'Acts & Rules - Indian Legal Documents Database',
      description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions.',
      url: `${BASE_URL}/acts`,
    },
    twitter: {
      title: 'Acts & Rules - Indian Legal Documents Database',
      description: 'Browse and search through comprehensive Acts and Rules for all Indian states. Filter by state, search across titles and descriptions.',
    },
  },
  actDetail: (act: { title: string; state: string; year?: number; summary?: string }) => ({
    title: `${act.title} - ${act.state} ${act.year || ''}`.trim(),
    description: act.summary || `Official ${act.title} for ${act.state} state. Download PDF and access comprehensive legal information.`,
    keywords: [
      act.title.toLowerCase(),
      `${act.state} acts`,
      `${act.state} rules`,
      'Indian legal documents',
      'legal PDF download',
      'official legislation',
      'state laws',
      'legal research'
    ],
    openGraph: {
      title: `${act.title} - ${act.state} ${act.year || ''}`.trim(),
      description: act.summary || `Official ${act.title} for ${act.state} state. Download PDF and access comprehensive legal information.`,
      type: 'article',
    },
    twitter: {
      title: `${act.title} - ${act.state} ${act.year || ''}`.trim(),
      description: act.summary || `Official ${act.title} for ${act.state} state. Download PDF and access comprehensive legal information.`,
    },
  }),
}

// Helper function to generate page metadata
export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customData?: any
): Metadata {
  const baseMetadata = pageMetadata[page]
  
  if (page === 'actDetail' && customData) {
    return {
      ...defaultMetadata,
      ...pageMetadata.actDetail(customData),
      alternates: {
        canonical: `${BASE_URL}/acts/${customData.slug}`,
      },
    }
  }
  
  return {
    ...defaultMetadata,
    ...baseMetadata,
  }
}

// Structured data schemas
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "Professional platform for Indian legal acts and rules",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@casegrid.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/casegrid",
      "https://linkedin.com/company/casegrid"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": BASE_URL,
    "description": "Indian Legal Acts and Rules Database",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/acts?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME
    }
  },
  
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE_NAME,
    "applicationCategory": "LegalApplication",
    "operatingSystem": "Web Browser",
    "description": "Comprehensive platform for Indian legal acts and rules",
    "url": BASE_URL,
    "author": {
      "@type": "Organization",
      "name": SITE_NAME
    }
  },
  
  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),
  
  article: (data: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    url: string;
    image?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "datePublished": data.datePublished,
    "dateModified": data.dateModified,
    "url": data.url,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`
      }
    },
    ...(data.image && {
      "image": {
        "@type": "ImageObject",
        "url": data.image
      }
    })
  })
}

// Social media configuration
export const socialConfig = {
  twitter: {
    handle: '@casegrid',
    site: '@casegrid',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: 'your-facebook-app-id',
  },
  linkedin: {
    company: 'casegrid',
  },
}

// Performance optimization
export const performanceConfig = {
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
  ],
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//www.google-analytics.com',
  ],
}

// Analytics configuration
export const analyticsConfig = {
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // Replace with your GA4 ID
  },
  googleTagManager: {
    containerId: 'GTM-XXXXXXX', // Replace with your GTM ID
  },
}
