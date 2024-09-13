import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Components/utils/global.context";

const Card = ({ dentist }) => {
  
  const { name, username, id } = dentist;
  const { dispatch , state } = useDentistStates();
  const isFav = state.favs.find((fav) => fav.id == dentist.id);
  const addFav = () => {
   
    dispatch({type:isFav ? "Remove_Fav" : "Add_Fav", payload:dentist});
    
  };
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="./images/doctor.jpg"></img>
      <div>{name}</div>
      <div>{username}</div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      {isFav ? (
        <button onClick={addFav} className="favButton">💕</button>
      ) : (
        <button onClick={addFav} className="favButton">❤</button>
      )}
      <Link to={"/detail/" + id}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Card;
