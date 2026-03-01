import { MetadataRoute } from 'next'

// Función para obtener la URL del sitio
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://www.fugisa.com.ar'
}

// Función para determinar si el sitio debe ser indexado
const shouldIndex = () => {
  const siteUrl = getSiteUrl()
  const productionDomain = process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || 'www.fugisa.com.ar'
  
  // Si NEXT_PUBLIC_ALLOW_INDEXING está en 'false', no indexar
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'false') {
    return false
  }
  
  // Si NEXT_PUBLIC_ALLOW_INDEXING está en 'true', indexar
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true') {
    return true
  }
  
  // Por defecto, solo indexar si es el dominio productivo
  return siteUrl.includes(productionDomain)
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()
  const allowIndexing = shouldIndex()
  
  if (!allowIndexing) {
    // Bloquear todo si no se debe indexar
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    }
  }
  
  // Permitir indexación normal
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
