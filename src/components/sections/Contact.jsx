import SectionContainer from '../layout/SectionContainer'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../common/Reveal'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="contact" className="contact-section py-32 overflow-hidden">
      {/* Landscape Background Illustration */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Sunset Landscape"
          className="w-full h-full object-cover object-bottom opacity-70 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJynEpQOrggzJMw8qnTS_JxLyTb7suPPQWqqy5EXoGGrNM68fuSRnBxNFVhKLHHguusF5PVtf84MkfR4rUWJZfgdlrjWuny2da5LhWmtaX809T-jKskCLRWzSsH3vLPRz9A8RX3OfKR6WbFhuAv3i3afglSoMvTz3fxAsxzPlvU3Af30DWASwsWaU6RfkMrZfJ10PPjRKbVnzWP4fQ5WsiND1AqVX2Z8IkVri0fm6qAmJPtXX1natN"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal variant="fade-up">
          <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] mb-6">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={150}>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-10 font-medium text-lg">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={300} className="flex flex-col items-center gap-4 mb-10">
          <a
            className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-primary-soft)] transition-colors bg-[var(--icon-box-bg)] px-6 py-2 rounded-full backdrop-blur-md border border-[var(--icon-box-border)]"
            href={`mailto:${t.contact.emailLabel}`}
          >
            <i className="fa-solid fa-envelope text-xl text-[var(--color-primary)]"></i>
            <span className="font-semibold">{t.contact.emailLabel}</span>
          </a>

          <div className="flex items-center gap-3 text-[var(--color-text)] bg-[var(--icon-box-bg)] px-6 py-2 rounded-full backdrop-blur-md border border-[var(--icon-box-border)] cursor-default">
            <i className="fa-solid fa-location-dot text-xl text-red-400"></i>
            <span className="font-semibold">{t.contact.locationLabel}</span>
          </div>
        </Reveal>

        <Reveal variant="zoom-in" delay={450}>
          <a
            href={`mailto:${t.contact.emailLabel}`}
            className="button-primary px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 mx-auto shadow-2xl hover:scale-105 transform transition-transform"
          >
          <i className="fa-solid fa-paper-plane"></i>
          {t.contact.button}
        </a>
        </Reveal>
      </div>

      {/* Gradient Overlay at bottom for footer transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--footer-bg)] to-transparent z-10"></div>
    </SectionContainer>
  )
}
