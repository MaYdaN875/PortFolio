import { useMemo, useState } from 'react'
import SectionContainer from '../layout/SectionContainer'
import { useTheme } from '../../context/useTheme'
import { useLanguage } from '../../context/useLanguage'
import Reveal from '../common/Reveal'
import ParallaxStarField from '../common/ParallaxStarField'

const PROJECTS = [
  { id: 'godart', imageSrc: 'logo.webp', imageAlt: 'Interfaz de GodArt', technologies: ['React', 'PHP', 'MySQL'], liveUrl: 'https://godart-papelería.com/', githubUrl: 'https://github.com/MaYdaN875' },
  { id: 'pos', imageSrc: 'electron.webp', imageAlt: 'Interfaz de POS Electron', technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS'], githubUrl: 'https://github.com/MaYdaN875' },
  { id: 'osseous', imageSrc: 'osseus.png', imageAlt: 'Interfaz de Osseous', technologies: ['React', 'PHP', 'MySQL'], liveUrl: 'https://osseous.com.mx/', githubUrl: 'https://github.com/MaYdaN875' },
  { id: 'blackjack', imageSrc: 'blackjack.png', imageAlt: 'Interfaz de Blackjack', technologies: ['JavaScript', 'Vite', 'CSS3'], githubUrl: 'https://github.com/MaYdaN875/BlackJack_Vite' },
]

export default function Work() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id)
  const selectedProject = useMemo(() => PROJECTS.find((project) => project.id === selectedId) ?? PROJECTS[0], [selectedId])
  const selectedContent = t.work.projects[selectedProject.id]

  return (
    <SectionContainer id="work" className="work-section overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 z-[5] h-[745px] pointer-events-none"><div className="h-full w-full bg-cover bg-top bg-no-repeat" style={{ backgroundImage: 'url(projects.png)' }} /></div>
      {theme === 'dark' && <ParallaxStarField />}

      <div className="container relative z-10 mx-auto px-6">
        <Reveal variant="fade-down" className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-primary-soft)]">{t.work.eyebrow}</p>
          <h2 className="inline-block relative text-5xl font-bold font-heading text-[var(--heading-color)]">{t.work.title}<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[var(--color-sky)]/40" /></h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--color-text-secondary)]">{t.work.intro}</p>
        </Reveal>

        <div className="project-showcase-grid">
          <div className="project-selector" role="tablist" aria-label={t.work.selectorLabel}>
            {PROJECTS.map((project, index) => {
              const projectContent = t.work.projects[project.id]
              const isSelected = project.id === selectedProject.id
              return <button key={project.id} id={`${project.id}-tab`} type="button" role="tab" aria-selected={isSelected} aria-controls={`${project.id}-panel`} className={`project-selector-button ${isSelected ? 'is-selected' : ''}`} onClick={() => setSelectedId(project.id)}>
                <span className="project-selector-number">0{index + 1}</span><span><span className="block font-heading text-xl font-bold">{projectContent.title}</span><span className="mt-1 block text-sm text-[var(--color-text-secondary)]">{projectContent.category}</span></span><i className="fa-solid fa-arrow-right ml-auto" aria-hidden="true" />
              </button>
            })}
          </div>

          <article id={`${selectedProject.id}-panel`} role="tabpanel" aria-labelledby={`${selectedProject.id}-tab`} className="project-case-study">
            <div className="project-preview"><img key={selectedProject.id} src={selectedProject.imageSrc} alt={selectedProject.imageAlt} loading="lazy" decoding="async" /></div>
            <div className="project-case-study-content">
              <div className="flex flex-wrap items-center gap-3"><span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary-soft)]">{selectedContent.category}</span><span className="h-px w-12 bg-[var(--card-border-color)]" /></div>
              <h3 className="mt-4 text-3xl font-bold font-heading text-[var(--heading-color)]">{selectedContent.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">{selectedProject.technologies.map((technology) => <span key={technology} className="project-tech-tag">{technology}</span>)}</div>
              <p className="mt-6 text-[var(--color-text-secondary)]">{selectedContent.description}</p>
              <ul className="project-contributions">{selectedContent.contributions.map((contribution) => <li key={contribution}><i className="fa-solid fa-check" aria-hidden="true" />{contribution}</li>)}</ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.liveUrl && <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold">{t.work.liveDemo}<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>}
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold"><i className="fa-brands fa-github text-lg" aria-hidden="true" />GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionContainer>
  )
}
