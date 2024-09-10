import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Components/utils/global.context";

const Card = ({ dentist }) => {
  
  const { name, username, id } = dentist;
  const { dispatch } = useDentistStates();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"Add_Fav", payload: dentist});
  };
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div>{name}</div>
      <div>{username}</div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
      <Link to={"/detail/" + id}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Card;
