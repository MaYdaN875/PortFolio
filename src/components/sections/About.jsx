import SectionContainer from '../layout/SectionContainer'
import { useTheme } from '../../context/useTheme'
import { useLanguage } from '../../context/useLanguage'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import Reveal from '../common/Reveal'
import ParallaxStarField from '../common/ParallaxStarField'

export default function About() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [sectionRef] = useSectionScrollProgress()

  return (
    <SectionContainer
      id="about"
      ref={sectionRef}
      className="about-section py-20 overflow-hidden"
    >
      {theme === 'dark' && <ParallaxStarField />}

      <div className="container mx-auto px-6 relative z-10">
        <Reveal variant="fade-down" className="text-center mb-16 flex justify-center">
          <div className="relative inline-block mx-auto flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] relative z-10">
              {t.about.title}
            </h2>
            <div className="absolute -bottom-2 w-full h-3 bg-[var(--color-star)]/30 rounded-full transform -rotate-2"></div>
            <i className="fa-solid fa-star text-[var(--color-star)] absolute -top-4 -left-6 text-xl"></i>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="grid md:col-span-2 gap-6">
            <Reveal variant="fade-right" className="space-y-6 text-[var(--color-text-secondary)] text-3xl font-medium leading-relaxed">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </Reveal>

          </div>

          <Reveal variant="zoom-in" delay={150} className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[var(--color-border)]">
            <div className="absolute top-3 right-4 flex gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* Workspace Illustration */}
            <img
              alt="Developer Workspace"
              className="w-full h-auto object-cover"
              src="foto.png"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </div>

      {/* Clouds Transition to Work */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden h-[515px] pointer-events-none z-10 transition-transform duration-100 ease-out"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * 80px))' }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-bottom bg-cover"
          style={{ backgroundImage: 'url(Nubes4d.png)' }}
        />
      </div>
    </SectionContainer>
  )
}
