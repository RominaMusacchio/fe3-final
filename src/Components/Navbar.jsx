import React from 'react'

import { Link } from "react-router-dom";
import { useDentistStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useDentistStates();
  const { state } = useDentistStates();

  const changeTheme = () => {
    dispatch({type:"Change_theme"});
    console.log(state.theme);
  };

  return (
    <nav className={state.theme ? 'dark-theme' : 'light-theme'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
  
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="favButton" onClick={changeTheme}>🌙</button>
    </nav>
  )
}

export default Navbar