import { useEffect, useRef, useState } from 'react'

export function useSectionScrollProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      const elementHeight = rect.height
      const totalScrollableDistance = windowHeight + elementHeight
      const currentScrollPosition = windowHeight - rect.top
      
      const rawProgress = currentScrollPosition / totalScrollableDistance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))
      
      setProgress(clampedProgress)
      element.style.setProperty('--scroll-progress', clampedProgress.toFixed(4))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return [ref, progress]
}
