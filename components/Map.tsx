'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Map() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.map.title}</h2>
            <div className="flex items-center justify-center gap-3 text-gray-600 text-lg">
              <svg className="w-5 h-5 text-red-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>
                {t.map.address}
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Martinez+de+Alegria+2468,+El+Talar+de+Pacheco,+Tigre,+Buenos+Aires,+Argentina&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Fugisa - Martínez de Alegría 2468, El Talar de Pacheco, Tigre"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
