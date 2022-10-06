export { default } from './Dialog.jsx'

export const scrollOff = (id) => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = 'fixed'
  document.getElementById(id).showModal()
}

export const returnURL = (id) => {
  document.getElementById(id).close()
  const newURL = `${window.location.origin}${window.location.pathname}`
  window.location.href = newURL
}