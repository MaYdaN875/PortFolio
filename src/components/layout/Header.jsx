import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useTheme } from '../../context/ThemeContext'

function Header({ activeSection, onMenuOpen, onLinkClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
      className={`fixed top-0 w-full z-30 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${
        isScrolled
          ? 'glass-panel bg-[var(--header-scrolled-bg)] shadow-2xl py-3'
          : 'glass-panel bg-[var(--header-bg)] py-5'
      }`}
    >
      {/* Brand logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[var(--color-primary)] shadow-sm">
          <i className="fa-solid fa-user-astronaut text-2xl text-[var(--color-primary)]"></i>
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
        <div className="hidden sm:block relative cursor-pointer group">
          <span className="text-[var(--color-text)] font-semibold flex items-center gap-1 hover:text-[var(--color-primary-soft)] transition-colors">
            EN <i className="fa-solid fa-chevron-down text-xs"></i>
          </span>
        </div>

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
