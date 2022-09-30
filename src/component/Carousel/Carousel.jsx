const Carousel = ({ data = [] }) => {
  console.log('data', data)
  data.map(dat => console.log('dat', dat))

  if (data.length > 0) {
    return (
      <span className='Carousel'>
        <div className="Header-logo">
          <img src={data[0].img} alt="Logo Cristian Facello" />
        </div>
        <ul>
          <li>Climatización</li>
          <li>Electricidad</li>
          <li>Plomería</li>
          <li>Otros</li>
        </ul>
      </span>
    )
  }

  return null
}

export default Carousel
