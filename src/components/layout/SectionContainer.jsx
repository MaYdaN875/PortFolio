export default function SectionContainer({ id, className = '', children }) {
  return (
    <section id={id} className={`relative min-h-screen ${className}`}>
      {children}
    </section>
  )
}
