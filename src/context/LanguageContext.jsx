import { useState } from 'react'
import es from '../locales/es.json'
import en from '../locales/en.json'
import { LanguageContext } from './useLanguage'

const translations = { es, en }

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage
    }
    // Default to Spanish or system language if preferred
    return 'es'
  })

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'es') {
      setLanguageState(lang)
      localStorage.setItem('language', lang)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const t = translations[language] || translations.es

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
