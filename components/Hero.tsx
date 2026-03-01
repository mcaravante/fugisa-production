'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] md:min-h-screen flex items-start justify-center overflow-hidden pt-24 lg:pt-32 pb-8 md:pb-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-fugisa.jpeg"
          alt="Fugisa - Fundición de Metales No Ferrosos en Argentina"
          fill
          priority
          fetchPriority="high"
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-radial from-black/40 via-transparent to-transparent" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-12 md:pb-0">
        <div className="max-w-4xl mx-auto">
          {/* Badge "Desde 1970" */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 md:mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white font-medium text-sm">{t.hero.badge}</span>
          </div>
          
          {/* Título principal */}
          <h1 className="font-title text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 text-white">
            {t.hero.title}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          
          {/* Texto descriptivo */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6 md:mb-10">
            {t.hero.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#productos"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition font-semibold text-lg"
            >
              {t.hero.productsButton}
            </Link>
            <Link
              href="#nosotros"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 hover:border-white transition font-semibold text-lg"
            >
              {t.hero.learnMoreButton}
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
