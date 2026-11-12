import { useEffect, useRef } from 'react'
import SectionContainer from '../layout/SectionContainer'
import SkillIcon from './Skills/SkillIcon'
import { useLanguage } from '../../context/useLanguage'
import { useTheme } from '../../context/useTheme'
import Reveal from '../common/Reveal'
import Contact from './Contact'

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { name: 'JavaScript', iconClass: 'fa-brands fa-js', colorClass: 'text-yellow-400' },
      { name: 'TypeScript', colorClass: 'text-blue-500 font-bold font-mono', customLabel: 'TS' },
      { name: 'React', iconClass: 'fa-brands fa-react', colorClass: 'text-cyan-400' },
      { name: 'Redux', colorClass: 'text-violet-400 font-bold', customLabel: 'R' },
      { name: 'Tailwind CSS', iconClass: 'fa-solid fa-wind', colorClass: 'text-cyan-400' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', iconClass: 'fa-brands fa-node-js', colorClass: 'text-green-500' },
      { name: 'Java', iconClass: 'fa-brands fa-java', colorClass: 'text-orange-400' },
      { name: 'Spring Boot', iconClass: 'fa-solid fa-leaf', colorClass: 'text-green-400' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MySQL', iconClass: 'fa-solid fa-database', colorClass: 'text-sky-400' },
      { name: 'PostgreSQL', iconClass: 'fa-solid fa-database', colorClass: 'text-blue-300' },
      { name: 'MongoDB', iconClass: 'fa-solid fa-leaf', colorClass: 'text-green-500' },
      { name: 'Prisma', iconClass: 'fa-regular fa-gem', colorClass: 'text-slate-200' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', iconClass: 'fa-brands fa-git-alt', colorClass: 'text-orange-500' },
      { name: 'Linux', iconClass: 'fa-brands fa-linux', colorClass: 'text-yellow-300' },
      { name: 'Docker', iconClass: 'fa-brands fa-docker', colorClass: 'text-blue-400' },
    ],
  },
]

export default function Skills() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const starZ1Ref = useRef(null)
  const starZ2Ref = useRef(null)
  const starZ3Ref = useRef(null)

  useEffect(() => {
    if (theme !== 'dark') return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    const ratio = 0.04

    let animationFrameId = null

    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      if (starZ1Ref.current) {
        starZ1Ref.current.style.transform = `translate3d(${currentX * ratio}px, ${currentY * ratio}px, 0)`
      }
      if (starZ2Ref.current) {
        starZ2Ref.current.style.transform = `translate3d(${(currentX * ratio) / 2}px, ${(currentY * ratio) / 2}px, 0) rotate(217deg)`
      }
      if (starZ3Ref.current) {
        starZ3Ref.current.style.transform = `translate3d(${(currentX * ratio) / 3}px, ${(currentY * ratio) / 3}px, 0) rotate(71deg)`
      }

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        animationFrameId = null
      }
    }

    const handleMouseMove = (e) => {
      targetX = e.clientX - window.innerWidth / 2
      targetY = e.clientY - window.innerHeight / 2
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [theme])

  return (
    <SectionContainer
      id="skills"
      className="skills-section relative py-20 pb-64 md:pb-[calc(60.15vw-200px)] overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Starry Sky Background */}
      {theme === 'dark' && (
        <div className="starry-sky-bg pointer-events-none z-0">
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

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <Reveal variant="fade-down" className="mb-12 text-center md:text-left">
          <p className="skills-eyebrow">✱&nbsp; {t.skills.eyebrow}</p>
          <h2 className="skills-title">
            {t.skills.title}
          </h2>
        </Reveal>
        <div className="skills-categories">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <section className="skills-category" key={category.name} aria-labelledby={`skill-category-${category.name}`}>
              <Reveal variant="fade-right" delay={categoryIndex * 70}>
                <h3 id={`skill-category-${category.name}`} className="skills-category-title">{category.name}</h3>
              </Reveal>
              <div className="skills-category-items">
                {category.skills.map((skill, skillIndex) => (
                  <Reveal key={skill.name} variant="zoom-in" delay={categoryIndex * 70 + skillIndex * 55}>
                    <SkillIcon {...skill} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
        <Contact />
      </div>

      {/* Skills Landscape Illustration */}
      <div className="absolute bottom-0 left-0 z-10 w-full pointer-events-none">
        <img
          src="skills.png"
          alt=""
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionContainer>
  )
}
