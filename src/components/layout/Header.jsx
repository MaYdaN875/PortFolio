import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

function Header({ activeSection, onMenuOpen, onLinkClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-30 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${isScrolled
        ? 'shadow-2xl py-3'
        : ' py-5'
        }`}
    >
      {/* Brand logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
          <img src="iconMaydan.png" alt="" />
        </div>
        <span className="font-heading text-2xl font-bold text-[var(--heading-color)] tracking-wide">
          MaYdaN
        </span>
      </div>

      {/* Desktop Navigation */}
      <Navigation
        activeSection={activeSection}
        onLinkClick={onLinkClick}
      />

      {/* Header Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Language selector */}
        <button
          onClick={toggleLanguage}
          className="hidden sm:flex items-center gap-1.5 text-[var(--color-text)] font-semibold hover:text-[var(--color-primary-soft)] transition-colors cursor-pointer focus:outline-none"
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <span>{language.toUpperCase()}</span>
          <i className="fa-solid fa-globe text-xs"></i>
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="text-[var(--color-text)] hover:text-[var(--color-primary-soft)] transition-colors p-1 flex items-center justify-center cursor-pointer"
          aria-label="Alternar tema"
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun text-yellow-300 text-xl' : 'fa-moon text-indigo-600 text-xl'}`}></i>
        </button>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={onMenuOpen}
          className="md:hidden text-[var(--color-text)] hover:text-[var(--color-primary-soft)] text-xl p-1 focus:outline-none transition-colors cursor-pointer"
          aria-label="Abrir menú de navegación"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header
