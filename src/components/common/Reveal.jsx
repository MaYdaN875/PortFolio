import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({ children, className = '', delay = 0, variant = 'fade-up', threshold = 0.1, triggerOnce = true }) {
  const [ref, isRevealed] = useScrollReveal({ threshold, triggerOnce })

  const variants = {
    'fade-up': 'reveal-fade-up',
    'fade-down': 'reveal-fade-down',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'zoom-in': 'reveal-zoom-in',
  }

  const baseRevealClass = variants[variant] || 'reveal-fade-up'
  const activeClass = isRevealed ? 'is-revealed' : ''

  return (
    <div
      ref={ref}
      className={`${baseRevealClass} ${activeClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
