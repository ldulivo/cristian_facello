export { default } from './NavBar.jsx'


export const moveToPositionPage = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  })
}