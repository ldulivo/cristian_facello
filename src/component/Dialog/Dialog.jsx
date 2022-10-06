import { useEffect, useRef, useState } from 'react'
import { returnURL, scrollOff } from '.'
import './Dialog.scss'

const Dialog = () => {
  const loadModal = useRef(0)
  const idModal = useRef()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    /* console.log('dialog2') */
    if (loadModal.current === 0) {
      loadModal.current = 1
      return
    }

    (modal)
      ? scrollOff(idModal.current.id)
      : returnURL(idModal.current.id)
  }, [modal])
  
  useEffect(() => {
    if(window.location?.hash === '#ContactFormContent') {
      console.log('dialog1')
      setModal(!modal)
    }
  }, [])

  return (
    <dialog
      onClick={() => setModal(!modal)}
      ref={idModal}
      id='idModal'
      className={`Dialog ${modal ? 'Dialog-active' : ''}`}
    >
      <h3 className='dialog--h3'>Mensaje enviado!</h3>
      <p className='dialog--p'>A la brevedad estaré en contacto contigo.</p>
    </dialog>
  )
}

export default Dialog