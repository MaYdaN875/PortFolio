import SectionContainer from '../layout/SectionContainer'
import { useTheme } from '../../context/useTheme'
import { useLanguage } from '../../context/useLanguage'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import Reveal from '../common/Reveal'
import ParallaxStarField from '../common/ParallaxStarField'

export default function Hero() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [sectionRef] = useSectionScrollProgress()
  const roleWords = t.hero.role.split(' ')
  const stats = [
    { label: t.about.stats.experience, value: t.about.stats.expValue },
    { label: t.about.stats.projects, value: t.about.stats.projValue },
    { label: t.about.stats.focus, value: t.about.stats.focusValue },
  ]

  return (
    <SectionContainer id="home" ref={sectionRef} className="hero-section hero-layout flex items-center overflow-hidden py-28 md:py-36">
      {theme === 'dark' && <ParallaxStarField />}

      <div
        className="absolute left-10 top-1/4 h-4 w-4 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_#05df72] transition-transform duration-100 ease-out"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -60px))' }}
      />
      <div
        className="absolute right-10 top-32 text-6xl opacity-60 md:right-20 md:text-8xl"
        style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -90px)) rotate(12deg)' }}
      >
        <i className="fa-solid fa-planet-ringed text-[var(--color-primary-soft)]" aria-hidden="true" />
      </div>

      <div className="container relative z-10 mx-auto grid w-full items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20 ">
        <div className="max-w-[544px] text-center lg:text-left">
          <Reveal variant="fade-up">
            <h1 className="hero-display-title text-[var(--heading-color)] ">
              <span className="pb-3 uppercase text-[var(--color-primary-soft)] tracking-wide">{t.hero.roleSecondary}</span>
              <br />
              <span >{roleWords.slice(0, -1).join(' ')}</span>
              <span className="ml-4 tracking-wide">{roleWords.slice(-1)}</span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">{t.hero.tagline}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a className="hero-social-link" href="https://github.com/MaYdaN875" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
              <a className="hero-social-link" href="https://www.linkedin.com/in/angel-daniel-brambila-garcia-b15710276/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
              <a className="button-primary rounded-full px-6 py-3 font-semibold shadow-lg" href="CurriculumV3.pdf" download="CurriculumV3.pdf">{t.hero.cvSpanish}</a>
              <a className="button-secondary rounded-full px-6 py-3 font-semibold shadow-lg" href="CurriculumV3.pdf" download="CurriculumV3.pdf">{t.hero.cvEnglish}</a>
            </div>
          </Reveal>
        </div>


      </div>
      <Reveal variant="fade-left" delay={250} className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}

        {/* <div className="slide-up-and-fade" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1', }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">4+</h5>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="slide-up-and-fade" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1', }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">7+</h5>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>
          <div className="slide-up-and-fade" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1', }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">10K+</h5>
            <p className="text-muted-foreground">Hours Worked</p>
          </div> */}
      </Reveal>
    </SectionContainer>
  )
}
