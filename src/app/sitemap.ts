// FILE: src/app/sitemap.ts
// CREATE THIS NEW FILE at src/app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pragha.in', // Your domain name
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
