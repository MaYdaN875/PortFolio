import React from 'react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

function Navigation({ activeSection, className = 'hidden md:flex gap-8', onLinkClick }) {
  return (
    <nav className={className}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              if (onLinkClick) {
                onLinkClick(e, item.id)
              }
            }}
            className={`font-semibold transition-all duration-300 pb-1 border-b-2 ${
              isActive
                ? 'text-[var(--color-text)] border-[var(--color-primary)] font-bold'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border-transparent hover:border-[var(--color-border)]'
            }`}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

export default Navigation
export { NAV_ITEMS }
