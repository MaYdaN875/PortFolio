import { useLanguage } from '../../context/useLanguage'
import Reveal from '../common/Reveal'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative z-20 mt-20 text-center md:mt-24 md:-mb-80">
      <div className="container mx-auto px-6">
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
    </section>
  )
}
