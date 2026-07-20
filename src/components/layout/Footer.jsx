import React from 'react'

function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] py-12 relative z-20 border-t border-[var(--color-divider)] transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-[var(--color-primary)] shadow-sm">
            <i className="fa-solid fa-user-astronaut text-xl text-[var(--color-primary)]"></i>
          </div>
          <span className="font-heading text-2xl font-bold text-[var(--heading-color)] tracking-wide">MaYdaN</span>
        </div>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-md">
          Building ideas. Crafting experiences. Creating the future.
        </p>
        <div className="flex gap-6 mb-8 text-2xl">
          <a className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors" href="#" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="text-[var(--color-text-muted)] hover:text-[var(--color-sky)] transition-colors" href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="text-[var(--color-text-muted)] text-xs">
          © {new Date().getFullYear()} MaYdaN. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
