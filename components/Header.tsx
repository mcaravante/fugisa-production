'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  ]

  const currentLang = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block bg-gray-100 text-gray-700 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.header.hours}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${t.header.phone.replace(/\s/g, '')}`} className="hover:text-primary transition">
                  {t.header.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@fugisa.com.ar" className="hover:text-primary transition">
                  {t.header.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Fugisa Logo"
                width={150}
                height={60}
                className="h-auto"
                priority
                fetchPriority="high"
                quality={90}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/#nosotros" className="text-gray-700 hover:text-primary transition font-medium">
                {t.header.nav.about}
              </Link>
              <Link href="/#servicios" className="text-gray-700 hover:text-primary transition font-medium">
                {t.header.nav.services}
              </Link>
              
              {/* Products Menu with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsMenuOpen(true)}
                onMouseLeave={() => setIsProductsMenuOpen(false)}
              >
                <Link 
                  href="/#productos" 
                  className="text-gray-700 hover:text-primary transition font-medium flex items-center gap-1"
                >
                  {t.header.nav.products}
                  <svg 
                    className={`w-4 h-4 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {isProductsMenuOpen && (
                  <>
                    {/* Invisible bridge to prevent menu from closing */}
                    <div className="absolute top-full left-0 w-full h-2"></div>
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20"
                      onMouseEnter={() => setIsProductsMenuOpen(true)}
                    >
                      <Link
                        href="/productos/lingotes"
                        className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                        onClick={() => setIsProductsMenuOpen(false)}
                      >
                        {t.products.items.ingots.name}
                      </Link>
                      <Link
                        href="/productos/barras"
                        className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                        onClick={() => setIsProductsMenuOpen(false)}
                      >
                        {t.products.items.bars.name}
                      </Link>
                      <Link
                        href="/productos/recuperacion"
                        className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                        onClick={() => setIsProductsMenuOpen(false)}
                      >
                        {t.products.items.recovery.name}
                      </Link>
                    </div>
                  </>
                )}
              </div>
              
              <Link href="/#contacto" className="text-gray-700 hover:text-primary transition font-medium">
                {t.header.nav.contact}
              </Link>
              <Link
                href="/#contacto"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition font-medium"
              >
                {t.header.nav.quote}
              </Link>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  aria-label={`Select language. Current: ${currentLang.name}`}
                  aria-expanded={isLangMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="text-xl">{currentLang.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{currentLang.code.toUpperCase()}</span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLangMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code)
                            setIsLangMenuOpen(false)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition ${
                            language === lang.code ? 'bg-primary/10' : ''
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                          {language === lang.code && (
                            <svg className="w-4 h-4 text-primary ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={language === 'es' ? 'Abrir menú' : language === 'en' ? 'Toggle menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col gap-4">
                <Link 
                  href="/#nosotros" 
                  className="text-gray-700 hover:text-primary transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.nav.about}
                </Link>
                <Link 
                  href="/#servicios" 
                  className="text-gray-700 hover:text-primary transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.nav.services}
                </Link>
                
                {/* Mobile Products Menu */}
                <div>
                  <button
                    onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-primary transition font-medium"
                  >
                    <span>{t.header.nav.products}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductsMenuOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <Link
                        href="/productos/lingotes"
                        className="text-gray-600 hover:text-primary transition text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsMenuOpen(false)
                        }}
                      >
                        {t.products.items.ingots.name}
                      </Link>
                      <Link
                        href="/productos/barras"
                        className="text-gray-600 hover:text-primary transition text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsMenuOpen(false)
                        }}
                      >
                        {t.products.items.bars.name}
                      </Link>
                      <Link
                        href="/productos/recuperacion"
                        className="text-gray-600 hover:text-primary transition text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsMenuOpen(false)
                        }}
                      >
                        {t.products.items.recovery.name}
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/#contacto" 
                  className="text-gray-700 hover:text-primary transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.nav.contact}
                </Link>
                <Link
                  href="/#contacto"
                  className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.nav.quote}
                </Link>
                
                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-600 mb-2">
                      {language === 'es' ? 'Idioma' : language === 'en' ? 'Language' : 'Idioma'}
                    </span>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsMenuOpen(false)
                        }}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                          language === lang.code
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                        {language === lang.code && (
                          <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
