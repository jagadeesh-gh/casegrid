'use client'

interface JsonLdProps {
  data: any
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// Predefined structured data schemas
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CaseGrid",
    "url": "https://casegrid.com",
    "logo": "https://casegrid.com/logo.png",
    "description": "Professional platform for Indian legal acts and rules",
            "foundingDate": "2025",
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
    "name": "CaseGrid",
    "url": "https://casegrid.com",
    "description": "Indian Legal Acts and Rules Database",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://casegrid.com/acts?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CaseGrid"
    }
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CaseGrid",
    "applicationCategory": "LegalApplication",
    "operatingSystem": "Web Browser",
    "description": "Comprehensive platform for Indian legal acts and rules",
    "url": "https://casegrid.com",
    "author": {
      "@type": "Organization",
      "name": "CaseGrid"
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
      "name": "CaseGrid",
      "logo": {
        "@type": "ImageObject",
        "url": "https://casegrid.com/logo.png"
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
