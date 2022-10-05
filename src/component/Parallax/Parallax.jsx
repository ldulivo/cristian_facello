import { useEffect, useRef, useState } from 'react'
import { parallaxToDown, parallaxToUp, parallaxUl } from '.'
/* import { parallaxEffect } from '.' */
import './Parallax.scss'

const Parallax = ({ children }) => {
  const mainParallax = useRef()
  const previousScroll = useRef(0)
  const ulParallax = useRef()
  const [refreshParallax, setRefreshParallax] = useState(0)
  const [styleParallax, setStyleParallax] = useState([
    {
      bottom: 0,
      left: 50,
      width: 20,
      height: 20,
      rotate: 20,
      radius: 0
    },
    {
      bottom: -10,
      left: 40,
      width: 20,
      height: 20,
      rotate: 40,
      radius: 0
    },
    {
      bottom: 30,
      left: 60,
      width: 26,
      height: 26,
      rotate: 0,
      radius: 6
    },
    {
      bottom: 40,
      left: 30,
      width: 28,
      height: 28,
      rotate: 0,
      radius: 8
    },
    {
      bottom: 50,
      left: 70,
      width: 30,
      height: 30,
      rotate: 0,
      radius: 10
    },
    {
      bottom: 60,
      left: 35,
      width: 32,
      height: 32,
      rotate: 0,
      radius: 12
    },
    {
      bottom: 97,
      left: 25,
      width: 41,
      height: 41,
      rotate: 321,
      radius: 19
    }
  ])
  const parallaxEffect = () => {
    const value = window.scrollY;
    if (previousScroll.current > value) {
      setStyleParallax(parallaxToDown(styleParallax, ulParallax.current))
    } else {
      setStyleParallax(parallaxToUp(styleParallax, ulParallax.current))
    }
    previousScroll.current = value
  }

  useEffect(() => {

  }, [styleParallax])
  
  useEffect(() => {

    window.addEventListener('scroll', parallaxEffect)
    return () => {
      window.removeEventListener('scroll', parallaxEffect)
    }
  }, [])
  return (
    <div ref={mainParallax} className="Parallax">
      <section className="Parallax-Content">
        {children}
      </section>
      <ul
        ref={ulParallax}
        className='Parallax-background'
        >
          {
            styleParallax.map((li, index) =>
              <li
                key={index}
                style={{
                  bottom: `${li.bottom}%`,
                  left: `${li.left}%`,
                  width: `${li.width}px`,
                  height: `${li.height}px`,
                  transform: `rotate(${li.rotate}deg)`,
                  borderRadius: `${li.radius}px`
                }}
              ></li>
            )
          }
      </ul>
    </div>
  )
}

export default Parallax