'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Products() {
  const { t } = useLanguage()
  const router = useRouter()
  
  const products = [
    {
      id: 'ingots',
      slug: 'lingotes',
      name: t.products.items.ingots.name,
      uses: t.products.items.ingots.uses,
      availability: t.products.items.ingots.availability,
      delivery: t.products.items.ingots.delivery,
      hasImage: true,
      imagePath: '/images/cards/gold2.png',
      icon: null,
    },
    {
      id: 'bars',
      slug: 'barras',
      name: t.products.items.bars.name,
      uses: t.products.items.bars.uses,
      availability: t.products.items.bars.availability,
      delivery: t.products.items.bars.delivery,
      hasImage: true,
      imagePath: '/images/cards/pipe.png',
      icon: null,
    },
    {
      id: 'recovery',
      slug: 'recuperacion',
      name: t.products.items.recovery.name,
      uses: t.products.items.recovery.uses,
      availability: t.products.items.recovery.availability,
      delivery: t.products.items.recovery.delivery,
      hasImage: true,
      imagePath: '/images/cards/management-service.png',
      icon: null,
    },
  ]

  return (
    <section id="productos" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t.products.title}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto font-subtitle">
          {t.products.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(`/productos/${product.slug}`)}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image/Icon Section */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center min-h-[200px] group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                <div className="text-center">
                  {product.hasImage && product.imagePath ? (
                    <div className="flex items-center justify-center h-40">
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        width={160}
                        height={160}
                        className="max-h-40 w-auto"
                      />
                    </div>
                  ) : (
                    product.icon
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Bullets */}
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.products.bullets.uses}</p>
                      <p className="text-gray-600 text-sm">{product.uses}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.products.bullets.availability}</p>
                      <p className="text-gray-600 text-sm">{product.availability}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.products.bullets.delivery}</p>
                      <p className="text-gray-600 text-sm">{product.delivery}</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                  <Link
                    href={`/productos/${product.slug}`}
                    className="block w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition text-center font-semibold text-base flex items-center justify-center gap-2 group/button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{t.products.cta.viewMore}</span>
                    <svg className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="#contacto"
                    className="block w-full bg-white border-2 border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/5 transition text-center font-semibold text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.products.cta.requestQuote}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
