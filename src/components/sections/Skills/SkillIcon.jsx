export default function SkillIcon({ name, iconClass, colorClass = '', customLabel }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={`w-16 h-16 rounded-full bg-[var(--icon-box-bg)] backdrop-blur-md shadow-md flex items-center justify-center group-hover:-translate-y-2 transition-transform border border-[var(--icon-box-border)] ${
          customLabel ? 'text-2xl' : 'text-3xl'
        } ${colorClass}`}
      >
        {customLabel ? customLabel : <i className={iconClass}></i>}
      </div>
      <span className="text-xs font-semibold text-[var(--color-text-secondary)]">{name}</span>
    </div>
  )
}
