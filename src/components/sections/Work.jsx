import { useEffect, useRef } from 'react'
import SectionContainer from '../layout/SectionContainer'
import ProjectCard from './Work/ProjectCard'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { useSectionScrollProgress } from '../../hooks/useSectionScrollProgress'
import Reveal from '../common/Reveal'

export default function Work() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const starZ1Ref = useRef(null)
  const starZ2Ref = useRef(null)
  const starZ3Ref = useRef(null)

  useEffect(() => {
    if (theme !== 'dark') return

    let x = 0
    let y = 0
    const ratio = 0.05

    const handleMouseMove = (e) => {
      x = e.pageX
      y = e.pageY
    }

    document.addEventListener('mousemove', handleMouseMove)

    let animationFrameId
    const animate = () => {
      if (starZ1Ref.current) {
        starZ1Ref.current.style.transform = `translate(${x * ratio}px, ${y * ratio}px)`
      }
      if (starZ2Ref.current) {
        starZ2Ref.current.style.transform = `translate(${(x * ratio) / 2}px, ${(y * ratio) / 2}px) rotate(217deg)`
      }
      if (starZ3Ref.current) {
        starZ3Ref.current.style.transform = `translate(${(x * ratio) / 3}px, ${(y * ratio) / 3}px) rotate(71deg)`
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  const projectsData = [
    {
      id: 'taskflow',
      title: t.work.projects.taskflow.title,
      description: t.work.projects.taskflow.description,
      imageSrc: 'logo.webp',
      imageAlt: 'GodArt',
      tags: ['React', 'PHP', 'MySQL'],
      link: 'https://godart-papelería.com/',
      githubLink: 'https://github.com/MaYdaN875',
      target: '_blank',
    },
    {
      id: 'posElectron',
      title: t.work.projects.posElectron.title,
      description: t.work.projects.posElectron.description,
      imageSrc: 'electron.webp',
      imageAlt: 'POS electron',
      tags: ['ElectronJS', 'TypeScript', 'Tailwind', 'React'],
      link: '#',
      githubLink: 'https://github.com/MaYdaN875',
      target: '_self',
    },
    {
      id: 'Osseous',
      title: t.work.projects.Osseous.title,
      description: t.work.projects.Osseous.description,
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD9gWiWYKUdd2HrnbN3N_rGCmR7GMRTAmWsA2aB0xBKQZ7-MRtrd3gfapmNoioDJB0eFu8R5MhNlIpxQPGYqeYYD8bYSSDxn_NVhTIoDEU5I0ObYEUeVXPfwPoh0yMfkNEw7LqNUniTMs8TxJxr6XUbNV5tEvtnsAMEKYICorzr7OEa-im1evbR9v8PoVk0LBcK25GVktQQAPPwxjo5hmguY7LRWTEib2DY-vP9Rff5SyO9WjYGxj8o',
      imageAlt: 'Osseous',
      tags: ['React', 'PHP', 'MySQL'],
      link: 'https://osseous.com.mx/',
      githubLink: 'https://github.com/MaYdaN875',
      target: '_blank',
    },
    {
      id: 'portfolio',
      title: t.work.projects.portfolio.title,
      description: t.work.projects.portfolio.description,
      imageSrc: 'portfolio.webp',
      imageAlt: 'Portfolio',
      tags: ['React', 'Tailwind CSS'],
      link: '#',
      githubLink: 'https://github.com/MaYdaN875/PortFolio',
      target: '_self',
    },
    {
      id: 'gifexpertapp',
      title: t.work.projects.gifexpertapp.title,
      description: t.work.projects.gifexpertapp.description,
      imageSrc: 'gifexpertapp.webp',
      imageAlt: 'GifExpertApp',
      tags: ['React', 'Tailwind CSS'],
      link: 'https://maydan875-gifexpertapp.netlify.app/',
      githubLink: 'https://github.com/MaYdaN875',
      target: '_self',
    },
  ]

  const [sectionRef] = useSectionScrollProgress()

  return (
    <SectionContainer
      id="work"
      ref={sectionRef}
      className="work-section work-sticky-parent"
    >
      <div className="work-sticky-child">
        {/* Parallax Starry Sky Background */}
        {theme === 'dark' && (
          <div className="starry-sky-bg pointer-events-none">
            <div ref={starZ3Ref} className="star-z-3">
              <div className="tile top-left animate-opacity freq-5"></div>
              <div className="tile top-right animate-opacity freq-9"></div>
              <div className="tile bottom-left animate-opacity freq-7"></div>
              <div className="tile bottom-right animate-opacity freq-10"></div>
            </div>
            <div ref={starZ2Ref} className="star-z-2">
              <div className="tile top-left animate-opacity freq-9 delay-2"></div>
              <div className="tile top-right animate-opacity freq-5 delay-2"></div>
              <div className="tile bottom-left animate-opacity freq-6 delay-4"></div>
              <div className="tile bottom-right animate-opacity freq-10 delay-4"></div>
            </div>
            <div ref={starZ1Ref} className="star-z-1">
              <div className="tile top-left animate-opacity freq-7 delay-2"></div>
              <div className="tile top-right animate-opacity freq-5 delay-4"></div>
              <div className="tile bottom-left animate-opacity freq-9 delay-2"></div>
              <div className="tile bottom-right animate-opacity freq-5 delay"></div>
            </div>
          </div>
        )}

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 text-4xl opacity-80 animate-bounce"
          style={{ animationDuration: '4s' }}
        >
          <i className="fa-solid fa-hot-air-balloon text-[var(--color-cloud)]"></i>
        </div>
        <div
          className="absolute top-40 right-10 text-5xl opacity-80 animate-bounce"
          style={{ animationDuration: '5s' }}
        >
          <i className="fa-solid fa-blimp text-[var(--color-primary-soft)]"></i>
        </div>
        <div className="absolute bottom-40 right-1/4 text-2xl text-[var(--color-sky)] opacity-60">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="absolute top-60 left-1/4 text-3xl text-[var(--color-sky)] opacity-60">
          <i className="fa-solid fa-cloud"></i>
        </div>

        <div className="container mx-auto px-6 relative z-10 mb-8 md:mb-12">
          <Reveal variant="fade-down" className="text-center flex justify-center">
            <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] relative inline-block">
              {t.work.title}
              <div className="absolute -bottom-1 w-full h-2 bg-[var(--color-sky)]/40 rounded-full"></div>
            </h2>
          </Reveal>
        </div>

        <div className="relative z-10 w-full">
          <div className="work-horizontal-track">
            {projectsData.map((project, index) => (
              <div key={project.id} className="work-card-wrapper">
                <Reveal variant="fade-up" delay={index * 100}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    tags={project.tags}
                    link={project.link}
                    linkText={t.work.viewProject}
                    githubLink={project.githubLink}
                    target={project.target}
                  />
                </Reveal>
              </div>
            ))}

            {/* "Want to see more?" Card */}
            <div className="work-card-wrapper">
              <Reveal variant="fade-up" delay={projectsData.length * 100}>
                <div className="project-card rounded-3xl overflow-hidden group h-full flex flex-col justify-center items-center text-center p-8 bg-black/20 border border-[var(--card-border-color)] relative">
                  {/* Glowing Purple Circle */}
                  <div className="w-16 h-16 rounded-full bg-purple-400/30 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-70 animate-pulse"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-300 relative z-10"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--heading-color)] mb-4">
                    {t.work.seeMore.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-base mb-8 max-w-[280px]">
                    {t.work.seeMore.subtitle}
                  </p>
                  <a
                    href="https://github.com/MaYdaN875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-purple-400 text-black hover:bg-purple-300 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-400/20 flex items-center gap-2 transform hover:scale-105"
                  >
                    {t.work.seeMore.button} <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Background Image Transition (Positioned at the Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-[745px] pointer-events-none z-10">
        <div
          className="w-full h-full bg-no-repeat bg-top bg-cover"
          style={{ backgroundImage: 'url(projects.png)' }}
        />
      </div>
    </SectionContainer>
  )
}
