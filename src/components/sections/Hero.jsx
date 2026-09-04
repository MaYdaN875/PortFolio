import SectionContainer from '../layout/SectionContainer'
import { useTheme } from '../../context/useTheme'
import { useLanguage } from '../../context/useLanguage'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import Reveal from '../common/Reveal'

const shootingStars = Array.from({ length: 8 }).map((_, i) => {
  const tailLength = (Math.random() * (7.5 - 5) + 5).toFixed(2) + 'em'
  const topOffset = (Math.random() * 100).toFixed(2) + 'vh'
  const fallDuration = (Math.random() * (12 - 6) + 6).toFixed(2) + 's'
  const fallDelay = (Math.random() * 10).toFixed(2) + 's'

  return {
    id: i,
    style: {
      '--star-tail-length': tailLength,
      '--top-offset': topOffset,
      '--fall-duration': fallDuration,
      '--fall-delay': fallDelay,
    },
  }
})

export default function Hero() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [sectionRef] = useSectionScrollProgress()

  return (
    <SectionContainer
      id="home"
      ref={sectionRef}
      className="hero-section flex flex-col justify-center items-center pt-24 overflow-hidden"
    >
      {/* Shooting Stars Background */}
      {theme === 'dark' && (
        <div className="stars">
          {shootingStars.map((star) => (
            <div key={star.id} className="star" style={star.style} />
          ))}
        </div>
      )}

      {/* Decorative Elements */}
      <div
        className="absolute top-1/4 left-10 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899] animate-pulse transition-transform duration-100 ease-out"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -60px))' }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-32 h-32 opacity-80 transition-transform duration-100 ease-out"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -180px)) rotate(12deg)', transformOrigin: 'center' }}
      >
        <i className="fa-solid fa-planet-ringed text-[var(--color-primary-soft)] text-8xl"></i>
      </div>
      <div
        className="absolute top-1/2 left-20 w-8 h-8 opacity-60 transition-transform duration-100 ease-out"
        style={{ transform: 'translate3d(calc((var(--scroll-progress, 0.5) - 0.5) * 80px), calc((var(--scroll-progress, 0.5) - 0.5) * -100px), 0) rotate(-45deg)' }}
      >
        <i className="fa-solid fa-meteor text-[var(--color-sky)] text-3xl"></i>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center -translate-y-[70px]">
        <div className="text-center md:text-left space-y-6">
          <Reveal variant="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-[var(--heading-color)]">
              {t.hero.greeting}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-soft)] to-[var(--color-sky)]">
                {t.hero.role}
              </span>
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={150}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium">
              {t.hero.tagline}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors text-3xl"
                href="https://github.com/MaYdaN875"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="text-[var(--color-text)] hover:text-[var(--color-sky)] transition-colors text-3xl"
                href="https://www.linkedin.com/in/angel-daniel-brambila-garcia-b15710276/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="button-primary px-6 py-2 rounded-full font-semibold shadow-lg"
                href="CurriculumV3.pdf"
                download="CurriculumV3.pdf"
              >
                {t.hero.cvSpanish}
              </a>
              <a
                className="button-secondary px-6 py-2 rounded-full font-semibold shadow-lg"
                href="CurriculumV3.pdf"
                download="CurriculumV3.pdf"
              >
                {t.hero.cvEnglish}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="zoom-in" delay={100} className="relative flex justify-center mt-10 md:mt-0">
          {/* Astronaut / Plane Illustration */}
          <div
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-transform duration-100 ease-out"
            style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -120px))' }}
          >
            {theme === 'dark' && (
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"></div>
            )}
            <div className="relative z-10 w-full h-full animate-float [backface-visibility:hidden] [transform:translateZ(0)]">
              <img
                alt={
                  theme === 'dark'
                    ? '3D cute cartoon astronaut sitting on a purple planet'
                    : '3D cute airplane flying'
                }
                className="w-full h-full object-contain filter drop-shadow-2xl [backface-visibility:hidden] [transform:translateZ(0)]"
                src={theme === 'dark' ? 'astronauta.png' : 'avioneta.png'}
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Clouds Transition */}
      <div
        className="absolute bottom-0 left-0 w-full transition-transform duration-100 ease-out"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * 60px))' }}
      >
        <div
          className="w-full h-[700px] absolute bottom-0 left-0 bg-repeat-x bg-bottom bg-contain"
          style={{
            backgroundImage:
              theme === 'dark' ? 'url(nubes4-dm.png)' : 'url(nubes4light.png)',
          }}
        />
      </div>
    </SectionContainer>
  )
}
