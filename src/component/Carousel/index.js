export { default } from './Carousel.jsx';

export const styleToCarousel = (currentTime) => {
  switch (currentTime) {
    case 0:
    case 4:
      return ''
    default:
      return 'Carousel-list'
  }
}