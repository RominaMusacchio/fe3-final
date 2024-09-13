import React from "react";
import Card from "../Components/Card";

import { useDentistStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();
  const vacia = state.favs.length > 0 ? false : true;
  console.log(state.favs);
  return (
    <div id="divContenedora">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {vacia ? (
        <div>Aun no tienes Favs 😢</div>
      ) : (
        state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))
      )}
       
      </div>
    </div>
  );
};

export default Favs;
