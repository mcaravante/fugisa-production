'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageUpdater() {
  const { language } = useLanguage()

  useEffect(() => {
    // Actualizar el atributo lang del elemento html
    document.documentElement.lang = language === 'pt-BR' ? 'pt' : language
  }, [language])

  return null
}
