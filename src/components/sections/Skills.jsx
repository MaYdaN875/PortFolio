import SkillIcon from './Skills/SkillIcon'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../common/Reveal'

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

  return (
    <section className="skills-section relative py-16">
      <div className="container mx-auto px-6 relative z-10">
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
      </div>
    </section>
  )
}
