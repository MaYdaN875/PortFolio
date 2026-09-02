import { useState } from 'react'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { useScrollSpy } from './hooks/useScrollSpy'

function MainContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(['home', 'about', 'work', 'contact'], 200)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="font-sans antialiased overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 relative">
      {/* Header Layout */}
      <Header
        activeSection={activeSection}
        onMenuOpen={() => setIsMobileMenuOpen(true)}
        onLinkClick={handleLinkClick}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
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
