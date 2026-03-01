'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

interface ProductDetailProps {
  productId: 'ingots' | 'bars' | 'recovery'
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { t } = useLanguage()
  
  const product = t.products.items[productId]
  
  const icons = {
    ingots: (
      <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    bars: (
      <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    recovery: (
      <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  {t.common.home}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#productos" className="hover:text-primary transition">
                  {t.products.title}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          {/* Icon/Image Section */}
          <div className="mb-8 flex items-center justify-center overflow-hidden">
            {productId === 'ingots' ? (
              <Image
                src="/images/cards/laton.jpg"
                alt={product.title}
                width={1200}
                height={600}
                className="object-cover rounded-lg w-full h-auto max-w-full"
                quality={90}
                priority
              />
            ) : productId === 'bars' ? (
              <Image
                src="/images/cards/barras.jpg"
                alt={product.title}
                width={1200}
                height={600}
                className="object-cover rounded-lg w-full h-auto max-w-full"
                quality={90}
                priority
              />
            ) : (
              <Image
                src="/images/cards/recuperacion.jpg"
                alt={product.title}
                width={1200}
                height={600}
                className="object-cover rounded-lg w-full h-auto max-w-full"
                quality={90}
                priority
              />
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            {product.title}
          </h1>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {product.description}
            </p>
            {product.description2 && (
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                {product.description2}
              </p>
            )}
          </div>

          {/* Tabla de tipos de latón - Solo para Lingotes */}
          {productId === 'ingots' && (
            <>
              <div className="mb-12 overflow-x-auto">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-red-800">
                        <th className="px-4 py-3 text-left font-bold text-white">{t.brass.table.type}</th>
                        <th className="px-4 py-3 text-left font-bold text-white">{t.brass.table.zinc}</th>
                        <th className="px-4 py-3 text-left font-bold text-white">{t.brass.table.characteristics}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-t border-gray-200">
                        <td className="px-4 py-3 text-gray-900">{t.brass.table.alpha}</td>
                        <td className="px-4 py-3 text-gray-700">{t.brass.table.alphaZinc}</td>
                        <td className="px-4 py-3 text-gray-700">{t.brass.table.alphaDesc}</td>
                      </tr>
                      <tr className="bg-white border-t border-gray-200">
                        <td className="px-4 py-3 text-gray-900">{t.brass.table.alphaBeta}</td>
                        <td className="px-4 py-3 text-gray-700">{t.brass.table.alphaBetaZinc}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {t.brass.table.alphaBetaDesc}
                        </td>
                      </tr>
                      <tr className="bg-white border-t border-gray-200">
                        <td className="px-4 py-3 text-gray-900">{t.brass.table.beta}</td>
                        <td className="px-4 py-3 text-gray-700">{t.brass.table.betaZinc}</td>
                        <td className="px-4 py-3 text-gray-700">
                          {t.brass.table.betaDesc}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Nota sobre tipos de latón */}
              <div className="mb-12 bg-rose-50 border-l-4 border-red-800 rounded-lg p-4">
                <p className="text-gray-800 leading-relaxed font-medium">
                  {t.brass.note}
                </p>
              </div>
            </>
          )}

          {/* Bullets */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              {t.common.mainFeatures}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.bullets.title1}</h3>
                  <p className="text-gray-600">{product.uses}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.bullets.title2}</h3>
                  <p className="text-gray-600">{product.availability}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.bullets.title3}</h3>
                  <p className="text-gray-600">{product.delivery}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition text-center font-semibold text-lg"
            >
              {t.products.cta.requestQuote}
            </Link>
          </div>

          {/* Back to Products */}
          <div className="mt-12 text-center">
            <Link
              href="/#productos"
              className="text-primary hover:text-primary-dark transition font-medium inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.common.backTo} {t.products.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
