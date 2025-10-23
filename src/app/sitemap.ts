// FILE: src/app/sitemap.ts
// CREATE THIS NEW FILE at src/app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://www.pragha.in',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.pragha.in/terms',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.pragha.in/privacy',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.pragha.in/shipping',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
