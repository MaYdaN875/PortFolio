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
    <SectionContainer id="home" ref={sectionRef} className="hero-section hero-layout flex overflow-hidden pt-12  md:pt-42">
      {theme === 'dark' && <ParallaxStarField />}

      <div className="w-full relative min-h-screen py-25 md:py-50 flex flex-col items-end justify-between">
        <div className="container relative z-10 mx-auto grid w-full items-center gap-12 md:pt-24 px-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20 ">
          <div className="max-w-136 text-left">
            <Reveal variant="fade-up">
              <h1 className="md:text-[80px] text-5xl hero-display-title text-[var(--heading-color)] ">
                <span className="pb-3 uppercase text-[var(--color-primary-soft)] tracking-wide">{t.hero.roleSecondary}</span>
                <br />
                <span >{roleWords.slice(0, -1).join(' ')}</span>
                <span className="ml-4 tracking-wide">{roleWords.slice(-1)}</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={150}>
              <p className="banner-description slide-up-and-fade mt-6 md:text-lg ">{t.hero.tagline}</p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-start">
                <a className="hero-social-link" href="https://github.com/MaYdaN875" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
                <a className="hero-social-link" href="https://www.linkedin.com/in/angel-daniel-brambila-garcia-b15710276/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a className="button-primary rounded-full px-6 py-3 font-semibold shadow-lg" href="CurriculumV3.pdf" download="CurriculumV3.pdf">{t.hero.cvSpanish}</a>
                <a className="button-secondary rounded-full px-6 py-3 font-semibold shadow-lg" href="CurriculumV3.pdf" download="CurriculumV3.pdf">{t.hero.cvEnglish}</a>

              </div>
            </Reveal>
            <Reveal className='mt-3' variant="fade-up" delay={450}>

              <p className="pl-6 text-gray-300">{t.hero.AvailableOpportunities}</p>
              <div
                className="absolute top-1/4 h-4 w-4 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_#05df72] transition-transform duration-100 ease-out"
                style={{ transform: 'translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -60px))' }}
              />

            </Reveal>
          </div>
        </div>
        <Reveal variant="fade-left" delay={250} className=" hero-stats-container w-full md:w-auto flex flex-row md:flex-col justify-center md:justify-start items-center md:items-end 
            text-center md:text-right
      text-3xl
      gap-4 md:gap-8
      
      md:absolute
      md:bottom-[4%]
      md:right-[4%]">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat text-4xl md:text-[3rem]">
              <strong className="mb-1.5">{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}

        </Reveal>

      </div>
    </SectionContainer >
  )
}
