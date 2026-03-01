import { MetadataRoute } from 'next'

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://www.fugisa.com.ar'
}

const shouldIndex = () => {
  const siteUrl = getSiteUrl()
  const productionDomain = process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || 'www.fugisa.com.ar'

  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'false') {
    return false
  }

  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true') {
    return true
  }

  return siteUrl.includes(productionDomain)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const allowIndexing = shouldIndex()

  if (!allowIndexing) {
    return []
  }

  const productSlugs = ['lingotes', 'barras', 'recuperacion']

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: siteUrl,
          en: `${siteUrl}?lang=en`,
          'pt-BR': `${siteUrl}?lang=pt-BR`,
        },
      },
    },
    ...productSlugs.map((slug) => ({
      url: `${siteUrl}/productos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/productos/${slug}`,
          en: `${siteUrl}/productos/${slug}?lang=en`,
          'pt-BR': `${siteUrl}/productos/${slug}?lang=pt-BR`,
        },
      },
    })),
  ]
}
