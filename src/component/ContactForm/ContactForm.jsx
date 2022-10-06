import { useState } from 'react'
import Spinner from '../Spinner'
import { Email, Message, Person, Telephone } from '../svg'
import './ContactForm.scss'

const ContactForm = () => {
  const [spinnerActive, setSpinnerActive] = useState(false)
  const [speakWithUs, setSpeakWithUs] = useState({
    nombre: {text:'', isCorrect: true},
    telefono: {text:'', isCorrect: true},
    email: {text:'', isCorrect: true},
    mensaje: {text:'', isCorrect: true}
  })

  const handleContactForm = (event) => {
    setSpeakWithUs({
      ...speakWithUs,
      [event.target.name]: { text: event.target.value, isCorrect: (event.target.value !== '')}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (speakWithUs.nombre.text === '' || speakWithUs.nombre.isCorrect === false) {
      setSpeakWithUs({
        ...speakWithUs,
        nombre: {text: speakWithUs.nombre.text, isCorrect: false}
      })
      return
    }

    if ( (speakWithUs.telefono.text === '' || speakWithUs.telefono.isCorrect === false) && (speakWithUs.email.text === '' || speakWithUs.email.isCorrect === false) )  {
      setSpeakWithUs({
        ...speakWithUs,
        telefono: {text: speakWithUs.telefono.text, isCorrect: false},
        email: {text: speakWithUs.email.text, isCorrect: false}
      })
      return
    } else {
      setSpeakWithUs({
        ...speakWithUs,
        telefono: {text: speakWithUs.telefono.text, isCorrect: true},
        email: {text: speakWithUs.email.text, isCorrect: true}
      })
    }

    if (speakWithUs.mensaje.text === '' || speakWithUs.mensaje.isCorrect === false) {
      setSpeakWithUs({
        ...speakWithUs,
        mensaje: {text: speakWithUs.mensaje.text, isCorrect: false}
      })
      return
    }

    const validRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if ( speakWithUs.email.text !== '' && !speakWithUs.email.text.match(validRegEx) ) {
      setSpeakWithUs({
        ...speakWithUs,
        email: {text: speakWithUs.email.text, isCorrect: false}
      })
      console.log('email')
      return
    }
    
    setSpinnerActive(true)
    event.target.submit('submit')
  }

  return (
    <section className="ContactForm" id='ContactForm'>
      <div className="ContactForm-content" id='ContactFormContent'>
        <h2>Contáctame</h2>
        <form
          /* action="https://formsubmit.co/ldulivo@gmail.com" */
          action="https://formsubmit.co/2danisy1cristian@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label
            className={speakWithUs.nombre.isCorrect ? '' : 'warning'}
          >
            <Person />
            <input
              value={speakWithUs.nombre.text}
              onChange={handleContactForm}
              name="nombre"
              type="text"
              placeholder='Nombre'
            />
          </label>
          <label
            className={speakWithUs.telefono.isCorrect ? '' : 'warning'}
          >
            <Telephone />
            <input
              value={speakWithUs.telefono.text}
              onChange={handleContactForm}
              name="telefono"
              type="number"
              placeholder='Teléfono'
            />
          </label>
          <label
            className={speakWithUs.email.isCorrect ? '' : 'warning'}
          >
            <Email />
            <input
              value={speakWithUs.email.text}
              onChange={handleContactForm}
              name="email"
              type="text"
              placeholder='Correo electrónico'
            />
          </label>
          <label
            className={speakWithUs.mensaje.isCorrect ? '' : 'warning'}
          >
            <Message />
            <textarea
              value={speakWithUs.mensaje.text}
              onChange={handleContactForm}
              name="mensaje"
              placeholder='Escribe tu mensaje'
            ></textarea>
          </label>
          <input
            className='btn'
            type="submit"
            value="Enviar"
          />
          <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}#ContactFormContent`}/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_subject" value={`Consulta WEB - ${speakWithUs.nombre}`}/>
        </form>
      </div>
      {
        (spinnerActive)
          ? <Spinner />
          : null
      }
    </section>
  )
}

export default ContactForm