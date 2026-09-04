export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  link = '#',
  linkText,
  githubLink,
  target = '_self',
}) {
  return (
    <div className="project-card rounded-3xl overflow-hidden group flex flex-col justify-between">
      <div>
        {/* Top window dots */}
        <div className="p-4 bg-black/10 border-b border-[var(--card-border-color)] flex gap-1.5 items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>

        <img
          alt={imageAlt || title}
          className="w-full h-48 object-cover border-b border-[var(--card-border-color)] opacity-90 group-hover:opacity-100 transition-opacity"
          src={imageSrc}
          loading="lazy"
          decoding="async"
        />

        <div className="p-6 pb-2">
          <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">{title}</h3>
          <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[var(--icon-box-bg)] text-[var(--color-text)] rounded-full border border-[var(--card-border-color)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[var(--card-border-color)]/40 mt-2">
        <a
          className="text-[var(--color-primary-soft)] hover:text-[var(--color-primary-hover)] font-semibold text-sm flex items-center gap-2 transition-colors"
          href={link}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {linkText} <i className="fa-solid fa-arrow-right"></i>
        </a>

        {githubLink && (
          <a
            className="text-[var(--color-text)] hover:text-[var(--color-primary-soft)] font-semibold text-sm flex items-center gap-1.5 transition-all bg-[var(--icon-box-bg)] hover:bg-[var(--color-primary)]/15 px-3 py-1.5 rounded-full border border-[var(--card-border-color)] hover:border-[var(--card-border-hover)]"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub - ${title}`}
          >
            <i className="fa-brands fa-github text-base"></i>
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  )
}
