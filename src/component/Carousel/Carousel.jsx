import { useEffect, useState } from 'react'
import { changeNextArray, changePreviousArray } from '.'
import { Arrow } from '../svg'
import './Carousel.scss'
const Carousel = ({ data = [] }) => {
  const [dataCarousel, setdataCarousel] = useState([])
  const [currentCard, setCurrentCard] = useState(0)
  const maxCard = data.length - 1
  
  const nextCard = () => {
    setdataCarousel(changeNextArray(dataCarousel))
    setCurrentCard(currentCard + 1)
  }
  const previousCard = () => {
    setdataCarousel(changePreviousArray(dataCarousel))
    setCurrentCard(currentCard - 1)
  }

  useEffect(() => {
    if (currentCard > maxCard) setCurrentCard(0)
    if (currentCard < 0) setCurrentCard(maxCard)
  }, [currentCard, dataCarousel, maxCard])

  useEffect(() => {
    setdataCarousel(data)
  }, [data])

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard()
    }, 3000)
    return () => clearInterval(interval)
  })

  if (data.length > 0) {
    return (
      <div className="Carousel">
        <div className="Carousel-content">
          {
            dataCarousel.map((card, index) => {
              return (
                <span key={index} style={{transform: 'translateX('+(card.transform * 330) + 'px)', opacity: card.opacity, zIndex: card.zindex}}>
                  <div className="Carousel-img">
                    <img src={card.img} alt="Logo Cristian Facello" />
                  </div>
                  <ul>
                    <li className='Carousel-h1'>{card.h1}</li>
                    <li>{card.li1}</li>
                    <li>{card.li2}</li>
                    <li>{card.li3}</li>
                  </ul>
                </span>
              )
            })
          }
        </div>
        <div className="Carousel-dot">
          {
            data.map((dot,index) => {
              return (
                <span
                  className={`${index === currentCard ? 'Carousel-dot-active' : ''}`}
                  key={index}></span>
              )
            })
          }
        </div>
        <div className="Carousel-button">
          <button onClick={() => previousCard()}>
            <Arrow direction='left' SVGstyle='Carousel-button-svg'/>
          </button>
          <button onClick={() => nextCard()}>
            <Arrow direction='right' SVGstyle='Carousel-button-svg'/>
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default Carousel
