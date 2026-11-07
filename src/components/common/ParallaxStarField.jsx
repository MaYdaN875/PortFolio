import { useEffect, useRef } from 'react'

const LAYERS = [
  { multiplier: 1 / 3, rotation: 71, classes: ['freq-5', 'freq-9', 'freq-7', 'freq-10'] },
  { multiplier: 0.5, rotation: 217, classes: ['freq-9 delay-2', 'freq-5 delay-2', 'freq-6 delay-4', 'freq-10 delay-4'] },
  { multiplier: 1, rotation: 0, classes: ['freq-7 delay-2', 'freq-5 delay-4', 'freq-9 delay-2', 'freq-5 delay'] },
]

const POSITION_CLASSES = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

export default function ParallaxStarField() {
  const fieldRef = useRef(null)
  const layerRefs = useRef([])

  useEffect(() => {
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let animationFrameId = null

    const updateLayers = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      LAYERS.forEach(({ multiplier, rotation }, index) => {
        const layer = layerRefs.current[index]
        if (layer) {
          layer.style.transform = `translate3d(${currentX * 0.04 * multiplier}px, ${currentY * 0.04 * multiplier}px, 0) rotate(${rotation}deg)`
        }
      })

      animationFrameId = Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1
        ? requestAnimationFrame(updateLayers)
        : null
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX - window.innerWidth / 2
      targetY = event.clientY - window.innerHeight / 2
      if (animationFrameId === null) animationFrameId = requestAnimationFrame(updateLayers)
    }

    const start = () => {
      updateLayers()
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
    }

    const stop = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start()
      else stop()
    }, { threshold: 0.05 })

    if (fieldRef.current) observer.observe(fieldRef.current)

    return () => {
      observer.disconnect()
      stop()
    }
  }, [])

  return (
    <div ref={fieldRef} className="starry-sky-bg pointer-events-none" aria-hidden="true">
      {LAYERS.map((layer, index) => (
        <div key={layer.rotation} ref={(element) => { layerRefs.current[index] = element }} className={`star-z-${3 - index}`}>
          {POSITION_CLASSES.map((position, tileIndex) => (
            <div key={position} className={`tile ${position} animate-opacity ${layer.classes[tileIndex]}`} />
          ))}
        </div>
      ))}
    </div>
  )
}
