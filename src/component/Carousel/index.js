export { default } from './Carousel.jsx';

export const changeNextArray = (arrayReturn = []) => {
  const arrayCount = arrayReturn.length - 1
  const arrayAux = []

  arrayReturn.map((card, index) => {
    (card.transform === 0)
      ? arrayAux[index] = {...card, transform: arrayCount, opacity: 0, zindex: 1}
      : arrayAux[index] = {...card, transform: card.transform - 1, opacity: 1, zindex: 2}
  })
  return arrayAux
}

export const changePreviousArray = (arrayReturn = []) => {
  const arrayCount = arrayReturn.length - 1
  const arrayAux = []
  arrayReturn.map((card, index) => {
    (card.transform >= arrayCount)
      ? arrayAux[index] = {...card, transform: 0, opacity: 1, zindex: 1}
      : arrayAux[index] = {...card, transform: card.transform + 1, zindex: 2}
  })
  return arrayAux
}