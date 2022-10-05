import { useEffect, useRef, useState } from 'react'
import { styleToCarousel } from '.'
import './Carousel.scss'
const Carousel = ({ children }) => {
  const [timeNextCard, setTimeNextCard] = useState(0)
  const [currentCard, setCurrentCard] = useState(0)
  const loadCarrousel = useRef(0)
  const maxCard = children.length - 1
  /* console.log('children', children[0]) */

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNextCard((timeNextCard + 1 > 4) ? 0: timeNextCard + 1)
    }, 1000);

    if (loadCarrousel.current === 0) {
      loadCarrousel.current = 1
    } else {
      if(timeNextCard === 0) {
        setCurrentCard(currentCard + 1 > maxCard ? 0 : currentCard + 1)
      }
    }
    return () => clearInterval(interval)
  }, [timeNextCard])
  return (
    <div className='Carousel'>
      <div className={`Carousel-content ${styleToCarousel(timeNextCard)}`}>
        {children[currentCard]}
      </div>
    </div>
  )
}

export default Carousel