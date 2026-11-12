export default function SkillIcon({ name, iconClass, colorClass = '', customLabel }) {
  return (
    <div className="skill-item group">
      <div
        className={`skill-item-icon ${
          customLabel ? 'text-xl' : 'text-2xl'
        } ${colorClass}`}
      >
        {customLabel ? customLabel : <i className={iconClass}></i>}
      </div>
      <span className="skill-item-name">{name}</span>
    </div>
  )
}
