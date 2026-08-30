import { useEffect, useRef } from 'react'
import SectionContainer from '../layout/SectionContainer'
import ProjectCard from './Work/ProjectCard'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

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

  return (
    <SectionContainer id="work" className="work-section py-24 overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex justify-center">
          <h2 className="text-5xl font-bold font-heading text-[var(--heading-color)] relative inline-block">
            {t.work.title}
            <div className="absolute -bottom-1 w-full h-2 bg-[var(--color-sky)]/40 rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
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
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[745px] pointer-events-none z-20">
        <div
          className="w-full h-full bg-no-repeat bg-bottom bg-cover"
          style={{ backgroundImage: 'url(projects.png)' }}
        />
      </div>
    </SectionContainer>
  )
}
