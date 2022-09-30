import './Card.scss'
const Card = ({ children, CardStyle }) => {
  let nameStyle
  switch(CardStyle) {
    case 'blue':
      nameStyle = 'Card-blue'
      break
    case 'orange':
      nameStyle = 'Card-orange'
      break
    case 'white':
      nameStyle = 'Card-white'
      break
    default:
      nameStyle = 'Card-pink'
      break
  }

  return (
    <div className={`Card ${nameStyle}`}>
      {children}
    </div>
  )
}

export default Card