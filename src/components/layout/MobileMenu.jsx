import React from 'react'
import { NAV_ITEMS } from './Navigation'
import { useTheme } from '../../context/ThemeContext'

function MobileMenu({ isOpen, onClose, activeSection, onLinkClick }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-72 bg-[var(--menu-bg)] backdrop-blur-md border-l border-[var(--color-border)] p-8 flex flex-col gap-10 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button Header */}
        <div className="flex justify-between items-center border-b border-[var(--color-divider)] pb-4">
          <span className="font-heading text-xl font-bold text-[var(--heading-color)] tracking-wide flex items-center gap-2">
            <i className="fa-solid fa-user-astronaut text-[var(--color-primary)]"></i>
            MaYdaN
          </span>
          <button
            onClick={onClose}
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-xl p-1 focus:outline-none cursor-pointer"
            aria-label="Cerrar menú"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Vertical Navigation Links */}
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  if (onLinkClick) {
                    onLinkClick(e, item.id)
                  }
                  onClose()
                }}
                className={`text-lg font-semibold transition-all duration-300 py-2 px-4 rounded-xl flex items-center gap-3 ${
                  isActive
                    ? 'text-[var(--color-text)] bg-[var(--color-primary)]/15 border-l-4 border-[var(--color-primary)] font-bold'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--icon-box-bg)] border-l-4 border-transparent'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Additional Mobile Content / Controls */}
        <div className="mt-auto border-t border-[var(--color-divider)] pt-6 space-y-4">
          <div className="flex items-center justify-between text-[var(--color-text-secondary)] text-sm">
            <span>Idioma</span>
            <span className="text-[var(--color-text)] font-semibold flex items-center gap-1 cursor-pointer">
              EN <i className="fa-solid fa-chevron-down text-xs"></i>
            </span>
          </div>
          <div className="flex items-center justify-between text-[var(--color-text-secondary)] text-sm">
            <span>Tema</span>
            <button
              onClick={toggleTheme}
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] p-1 flex items-center gap-2 cursor-pointer"
              aria-label="Alternar tema"
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun text-yellow-300 text-lg' : 'fa-moon text-indigo-600 text-lg'}`}></i>
              <span className="text-xs font-semibold">{theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
