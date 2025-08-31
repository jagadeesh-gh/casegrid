import { MetadataRoute } from 'next'
import { SEED_ACTS } from '@/lib/seed-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://casegrid.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/acts`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Dynamic act pages
  const actPages = SEED_ACTS.map((act) => ({
    url: `${baseUrl}/acts/${act.slug}`,
            lastModified: new Date(act.updatedAt || act.createdAt || '2025-01-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // State-specific pages
  const states = ['Central', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Bihar', 'Odisha', 'Andhra Pradesh', 'Telangana', 'Kerala', 'Punjab', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttarakhand', 'Chhattisgarh', 'Jharkhand', 'Goa', 'Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli', 'Daman & Diu', 'Lakshadweep', 'Puducherry']
  
  const statePages = states.map((state) => ({
    url: `${baseUrl}/acts?state=${encodeURIComponent(state)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...actPages, ...statePages]
}
