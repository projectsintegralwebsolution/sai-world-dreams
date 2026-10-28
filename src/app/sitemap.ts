import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    '',
    '/about',
    '/residences',
    '/floor-plans',
    '/amenities',
    '/gallery',
    '/location',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/residences' || route === '/floor-plans' ? 0.9 : 0.8,
  }));
}
