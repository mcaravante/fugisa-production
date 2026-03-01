'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect } from 'react'

export default function StructuredData() {
  const { language, t } = useLanguage()
  
  // Función para obtener la URL del sitio (compatible con Vercel)
  const getSiteUrl = () => {
    if (typeof window !== 'undefined') {
      // En el cliente, usar la URL actual
      return window.location.origin
    }
    // En el servidor, usar variables de entorno
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    }
    return 'https://www.fugisa.com.ar'
  }
  
  const siteUrl = getSiteUrl()

  useEffect(() => {
    // Remover script anterior si existe
    const existingScript = document.getElementById('structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Fugisa - Fundiciones Giacobbe S.A.',
      alternateName: 'Fugisa',
      url: siteUrl,
      logo: `${siteUrl}/images/banner-fugisa.jpeg`,
      description: t.footer.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Martínez de Alegría 2468',
        addressLocality: 'El Talar de Pacheco, Tigre',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+54-11-4726-7973',
        contactType: 'customer service',
        email: 'info@fugisa.com.ar',
        availableLanguage: ['es', 'en', 'pt-BR'],
      },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61584717944499',
        'https://www.instagram.com/fugisa.arg/',
        'https://www.linkedin.com/company/fundiciones-giacobbe-s-a/',
      ],
      foundingDate: '1970',
      areaServed: {
        '@type': 'Country',
        name: 'Argentina',
      },
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#organization`,
      name: 'Fugisa - Fundiciones Giacobbe S.A.',
      image: `${siteUrl}/images/banner-fugisa.jpeg`,
      description: t.footer.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Martínez de Alegría 2468',
        addressLocality: 'El Talar de Pacheco, Tigre',
        addressRegion: 'Buenos Aires',
        postalCode: '1617',
        addressCountry: 'AR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-34.4500',
        longitude: '-58.6500',
      },
      telephone: '+54-11-4726-7973',
      email: 'info@fugisa.com.ar',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '06:00',
          closes: '12:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '13:00',
          closes: '15:00',
        },
      ],
      priceRange: '$$',
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Fugisa',
      url: siteUrl,
      description: t.footer.description,
      inLanguage: language === 'es' ? 'es-AR' : language === 'en' ? 'en-US' : 'pt-BR',
    }

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Latón en Lingotes',
      description: t.products.items.ingots.description,
      brand: {
        '@type': 'Brand',
        name: 'Fugisa',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Fugisa - Fundiciones Giacobbe S.A.',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'ARS',
      },
    }

    const combinedSchema = {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, localBusinessSchema, websiteSchema, productSchema],
    }

    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.text = JSON.stringify(combinedSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [language, t, siteUrl])

  return null
}
