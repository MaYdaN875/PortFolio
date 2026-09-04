import { useEffect, useRef } from 'react'
import SectionContainer from '../layout/SectionContainer'
import SkillIcon from './Skills/SkillIcon'
import { useLanguage } from '../../context/useLanguage'
import { useTheme } from '../../context/useTheme'
import Reveal from '../common/Reveal'
import Contact from './Contact'

const SKILLS_DATA = [
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', colorClass: 'text-orange-500' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', colorClass: 'text-blue-500' },
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', colorClass: 'text-yellow-400' },
  { name: 'TypeScript', colorClass: 'text-blue-600 font-bold font-mono', customLabel: 'TS' },
  { name: 'React', iconClass: 'fa-brands fa-react', colorClass: 'text-cyan-400' },
  { name: 'Next.js', iconClass: 'fa-brands fa-neos', colorClass: 'text-[var(--color-text)]' },
  { name: 'Node.js', iconClass: 'fa-brands fa-node-js', colorClass: 'text-green-500' },
  { name: 'MongoDB', iconClass: 'fa-solid fa-leaf', colorClass: 'text-green-600' },
  { name: 'Tailwind CSS', iconClass: 'fa-solid fa-wind', colorClass: 'text-cyan-500' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt', colorClass: 'text-orange-600' },
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
        <Reveal variant="fade-down" className="text-center mb-10">
          <h2 className="text-4xl font-bold font-heading text-[var(--heading-color)] inline-block relative">
            {t.skills.title}
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-primary-soft)]/40 rounded-full"></div>
          </h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {SKILLS_DATA.map((skill, index) => (
            <Reveal key={skill.name} variant="zoom-in" delay={index * 80}>
              <SkillIcon
                name={skill.name}
                iconClass={skill.iconClass}
                colorClass={skill.colorClass}
                customLabel={skill.customLabel}
              />
            </Reveal>
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
