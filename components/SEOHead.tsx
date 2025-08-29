'use client'

import Head from 'next/head'
import { structuredData } from '@/lib/seo-config'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
  }
  twitter?: {
    title?: string
    description?: string
    image?: string
  }
  robots?: string
  structuredData?: any
  noindex?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter,
  robots,
  structuredData: customStructuredData,
  noindex = false
}: SEOHeadProps) {
  const baseUrl = 'https://casegrid.com'
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        robots && <meta name="robots" content={robots} />
      )}
      
      {/* Open Graph */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title || title} />
          <meta property="og:description" content={openGraph.description || description} />
          <meta property="og:image" content={openGraph.image || `${baseUrl}/og-image.jpg`} />
          <meta property="og:url" content={openGraph.url || canonical || baseUrl} />
          <meta property="og:type" content={openGraph.type || 'website'} />
          <meta property="og:site_name" content="CaseGrid" />
          <meta property="og:locale" content="en_US" />
        </>
      )}
      
      {/* Twitter Card */}
      {twitter && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@casegrid" />
          <meta name="twitter:creator" content="@casegrid" />
          <meta name="twitter:title" content={twitter.title || title} />
          <meta name="twitter:description" content={twitter.description || description} />
          <meta name="twitter:image" content={twitter.image || `${baseUrl}/og-image.jpg`} />
        </>
      )}
      
      {/* Structured Data */}
      {(customStructuredData || structuredData) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(customStructuredData || structuredData)
          }}
        />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="author" content="CaseGrid Team" />
      <meta name="application-name" content="CaseGrid" />
      <meta name="apple-mobile-web-app-title" content="CaseGrid" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Head>
  )
}
