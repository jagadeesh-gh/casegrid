import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CaseGrid - Indian Legal Acts & Rules Database",
    template: "%s | CaseGrid"
  },
  description: "Comprehensive platform to find, filter, and download Acts and Rules for all Indian states. Search across titles, filter by state, and access official PDF documents with ease.",
  keywords: [
    "Indian legal acts",
    "Indian legal rules", 
    "legal documents India",
    "acts and rules database",
    "Indian legislation",
    "legal search platform",
    "state laws India",
    "central acts India",
    "legal PDF downloads",
    "case management",
    "law firm software",
    "legal research tools"
  ],
  authors: [{ name: "CaseGrid Team" }],
  creator: "CaseGrid",
  publisher: "CaseGrid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://casegrid.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://casegrid.com',
    siteName: 'CaseGrid',
    title: 'CaseGrid - Indian Legal Acts & Rules Database',
    description: 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CaseGrid - Indian Legal Acts and Rules Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@casegrid',
    creator: '@casegrid',
    title: 'CaseGrid - Indian Legal Acts & Rules Database',
    description: 'Comprehensive platform to find, filter, and download Acts and Rules for all Indian states.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicon and app icons with cache busting */}
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjU2M2ViO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MzM4Y2E7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsIDYpIHNjYWxlKDAuNjcpIj4KICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZVdpZHRoPSIyIiBkPSJNOSAxMmg2bS02IDRoNm0yIDVIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIvPgogIDwvZz4KPC9zdmc+" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-1975571206726620" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8Q9RZLGYC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8Q9RZLGYC');
            `
          }}
        />
        
        {/* Additional meta tags */}
        <meta name="author" content="CaseGrid Team" />
        <meta name="application-name" content="CaseGrid" />
        <meta name="apple-mobile-web-app-title" content="CaseGrid" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
