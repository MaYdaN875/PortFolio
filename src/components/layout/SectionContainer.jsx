import { forwardRef } from 'react'

const SectionContainer = forwardRef(({ id, className = '', children }, ref) => {
  return (
    <section id={id} ref={ref} className={`relative min-h-screen ${className}`}>
      {children}
    </section>
  )
})

SectionContainer.displayName = 'SectionContainer'
export default SectionContainer
