import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import { LanguageProvider } from '@/contexts/LanguageContext'
import LanguageUpdater from '@/components/LanguageUpdater'
import StructuredData from '@/components/StructuredData'

// Poppins para cuerpo de texto
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

// Función para obtener la URL del sitio (compatible con Vercel)
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Vercel proporciona VERCEL_URL en runtime
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

const siteUrl = getSiteUrl()
const allowIndexing = shouldIndex()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Fugisa - Fundición de Metales No Ferrosos',
    template: '%s | Fugisa',
  },
  description: 'Expertos en la producción de latón en lingotes con la más alta calidad y tecnología de vanguardia en Argentina. Más de 50 años de experiencia en fundición de metales no ferrosos.',
  keywords: [
    'fundición de metales',
    'latón en lingotes',
    'metales no ferrosos',
    'fundición Argentina',
    'brass ingots',
    'non-ferrous metals',
    'Fugisa',
    'Fundiciones Giacobbe',
    'refinación de latón',
    'óxido de zinc',
  ],
  authors: [{ name: 'Fugisa - Fundiciones Giacobbe S.A.' }],
  creator: 'Fugisa - Fundiciones Giacobbe S.A.',
  publisher: 'Fugisa - Fundiciones Giacobbe S.A.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['en_US', 'pt_BR'],
    url: siteUrl,
    siteName: 'Fugisa',
    title: 'Fugisa - Fundición de Metales No Ferrosos',
    description: 'Expertos en la producción de latón en lingotes con la más alta calidad y tecnología de vanguardia en Argentina.',
    images: [
      {
        url: '/images/banner-fugisa.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fugisa - Fundición de Metales No Ferrosos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fugisa - Fundición de Metales No Ferrosos',
    description: 'Expertos en la producción de latón en lingotes con la más alta calidad y tecnología de vanguardia en Argentina.',
    images: ['/images/banner-fugisa.jpeg'],
  },
  robots: allowIndexing ? {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } : {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': 0,
      'max-image-preview': 'none',
      'max-snippet': 0,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es': siteUrl,
      'en': `${siteUrl}?lang=en`,
      'pt-BR': `${siteUrl}?lang=pt-BR`,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <LanguageProvider>
          <LanguageUpdater />
          <StructuredData />
          {children}
          <WhatsAppButton />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
