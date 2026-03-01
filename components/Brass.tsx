'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Brass() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Columna izquierda - Texto */}
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-900 font-title">{t.brass.title}</h2>
            <h3 className="text-4xl font-bold mb-8 text-red-800 font-title">{t.brass.subtitle}</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                {t.brass.description1}
              </p>
              
              <p>
                {t.brass.description2}
              </p>
              
              <p>
                {t.brass.description3}
              </p>
              
              <p>
                {t.brass.description4}
              </p>
            </div>

            {/* Tabla de tipos de latón */}
            <div className="mt-8 overflow-x-auto">
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

            <div className="mt-6 bg-rose-50 border-l-4 border-red-800 rounded-lg p-4">
              <p className="text-gray-800 leading-relaxed font-medium">
                {t.brass.note}
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen con tarjetas superpuestas */}
          <div className="relative h-full">
            <div className="rounded-lg overflow-hidden shadow-2xl relative h-full">
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src="/images/about.jpg"
                  alt="Proceso de fundición de metales"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Overlay oscuro con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
              
              {/* Overlay adicional para mejorar contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Tarjetas superpuestas en la parte inferior */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4 z-10">
                {/* Tarjeta 1: Años de experiencia */}
                <div className="bg-gray-50 rounded-lg shadow-xl p-4 flex-1 backdrop-blur-sm bg-gray-50/95">
                  <div className="text-3xl font-bold text-red-800 mb-1">+50</div>
                  <div className="text-sm text-gray-600">{t.brass.experience}</div>
                </div>
                
                {/* Tarjeta 2: Calidad Certificada */}
                <div className="bg-gray-50 rounded-lg shadow-xl p-4 flex-1 backdrop-blur-sm bg-gray-50/95">
                  <div className="text-3xl font-bold text-red-800 mb-1">100%</div>
                  <div className="text-sm text-gray-600">{t.brass.quality}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
