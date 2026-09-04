import { useLanguage } from '../../context/useLanguage'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[var(--footer-bg)] py-12 relative z-20 border-t border-[var(--color-divider)] transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-[var(--color-primary)] shadow-sm">
            <img src="iconMaydan.png" alt="" />
          </div>
          <span className="font-heading text-2xl font-bold text-[var(--heading-color)] tracking-wide">
            MaYdaN
          </span>
        </div>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-md">
          {t.footer.tagline}
        </p>
        <div className="flex gap-6 mb-8 text-2xl">
          <a
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            href="https://github.com/MaYdaN875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="text-[var(--color-text-muted)] hover:text-[var(--color-sky)] transition-colors"
            href="https://www.linkedin.com/in/angel-daniel-brambila-garcia-b15710276/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="text-[var(--color-text-muted)] text-xs">
          © {new Date().getFullYear()} MaYdaN. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

export default Footer
