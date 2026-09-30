import { useState } from 'react'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Footer from './components/layout/Footer'
import Swal from 'sweetalert2'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Skills from './components/sections/Skills'

import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { useScrollSpy } from './hooks/useScrollSpy'

const SECTION_IDS = ['home', 'about', 'work', 'contact']

function MainContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS, 200)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const showThemeNotice = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: 'Bajo construcción',
      text: 'El modo claro estará disponible próximamente.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        container: 'theme-notice-container',
      },
    })
  }

  return (
    <div className="font-sans antialiased overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 relative">
      {/* Header Layout */}
      <Header
        activeSection={activeSection}
        onMenuOpen={() => setIsMobileMenuOpen(true)}
        onLinkClick={handleLinkClick}
        onThemeNotice={showThemeNotice}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
        onThemeNotice={showThemeNotice}
      />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
