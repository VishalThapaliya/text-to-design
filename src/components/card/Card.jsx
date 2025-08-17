import './Card.css'

const Card = ({ feature }) => {
  return (
    <div className="feature-card">
        <div className="feature-icon-wrapper" style={{ background: feature.iconBgColor}}>
            {feature.icon}
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
    </div>
  )
}

export default Card