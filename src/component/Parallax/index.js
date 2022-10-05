export { default } from './Parallax.jsx'

export const parallaxEffect = () => {
  let value = window.scrollY;
  console.log('value', value)
  return `${value * 0.5} 'px'`
}

export const parallaxToDown = (liStyle = [], ulParallax) => {
  const newLiStyle = liStyle
  liStyle.map((li, index) => (
    (li.bottom < -10)
      ? newLiStyle[index] = { ...li, bottom: 110, width: 44, height: 44, rotate: 360, radius: 0}
      : newLiStyle[index] = { ...li, bottom: li.bottom - 1, width: li.width - .2, height: li.height - .2, rotate: li.rotate - 3, radius: li.radius - .2},
    ulParallax.childNodes[index].style.bottom = `${li.bottom}%`,
    ulParallax.childNodes[index].style.width = `${li.width}px`,
    ulParallax.childNodes[index].style.height = `${li.height}px`,
    ulParallax.childNodes[index].style.transform = `rotate(${li.rotate}deg)`
  ))
  return newLiStyle
}

export const parallaxToUp = (liStyle = [], ulParallax) => {
  const newLiStyle = liStyle
  liStyle.map((li, index) => (
    (li.bottom > 110)
      ? newLiStyle[index] = { ...li, bottom: -10, width: 20, height: 20, rotate: 0, radius: 0}
      : newLiStyle[index] = { ...li, bottom: li.bottom + 1, width: li.width + .2, height: li.height + .2, rotate: li.rotate + 3, radius: li.radius + .2},
    ulParallax.childNodes[index].style.bottom = `${li.bottom}%`,
    ulParallax.childNodes[index].style.width = `${li.width}px`,
    ulParallax.childNodes[index].style.height = `${li.height}px`,
    ulParallax.childNodes[index].style.transform = `rotate(${li.rotate}deg)`,
    ulParallax.childNodes[index].style.borderRadius = `${li.radius}px`
  ))
  return newLiStyle
}