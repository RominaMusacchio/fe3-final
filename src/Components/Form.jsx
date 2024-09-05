import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensajeExito, setMensajeExito] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    setError(false);
    setMensajeExito(false);
    console.log(nombre);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setError(false);
    setMensajeExito(false);
    console.log(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (nombre.length > 5 && emailRegex.test(email)) {
      setMensajeExito(true);
    }
    else{
      setError(true);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo:</label>
          <input type="text" onChange={handleChangeNombre}></input>
          <label>Email:</label>
          <input type="email" onChange={handleChangeEmail}></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {mensajeExito ? (
        <div>Gracias {nombre}, te contactaremos cuando antes vía mail</div>
      ) : (
        error && <div>Por favor verifique su información nuevamente</div>
      )}
    </>
  );
};

export default Form;
