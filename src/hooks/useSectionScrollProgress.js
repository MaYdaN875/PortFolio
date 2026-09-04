import { useEffect, useRef } from 'react'

export function useSectionScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let animationFrameId = null

    const updateProgress = () => {
      animationFrameId = null
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      const totalScrollableDistance = windowHeight + elementHeight
      const currentScrollPosition = windowHeight - rect.top
      const rawProgress = currentScrollPosition / totalScrollableDistance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))

      element.style.setProperty('--scroll-progress', clampedProgress.toFixed(4))
    }

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(updateProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return [ref]
}
