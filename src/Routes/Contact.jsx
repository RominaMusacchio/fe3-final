import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div id="divContenedora">
      <div id="divContact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact