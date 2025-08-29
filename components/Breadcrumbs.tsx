'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { structuredData } from '@/lib/seo-config'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if no items provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname)
  
  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = structuredData.breadcrumbList(
    breadcrumbItems.map(item => ({
      name: item.name,
      url: `https://casegrid.com${item.href}`
    }))
  )
  
  if (breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="h-5 w-5 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            
            {item.current ? (
              <span
                className="text-sm font-medium text-gray-500"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
    </nav>
  )
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ]
  
  let currentPath = ''
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Convert segment to readable name
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      name,
      href: currentPath,
      current: index === segments.length - 1
    })
  })
  
  return breadcrumbs
}

// Helper function to create breadcrumbs for specific pages
export function createBreadcrumbs(
  items: Array<{ name: string; href: string }>,
  currentPage: string
): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    ...items,
    { name: currentPage, href: '#', current: true }
  ]
}
