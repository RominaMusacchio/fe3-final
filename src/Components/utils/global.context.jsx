import { createContext } from "react";
import { useContext, useState, useEffect, useReducer } from "react";

import axios from "axios";

export const initialState = { theme: "", data: [], favs: [] };
const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type){
    case 'Get_Dentists':
      return {...state, data: action.payload}
    case 'Add_Fav':
      return {...state, favs: [...state.favs, action.payload]}
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      //setDentists(res.data);
      dispatch({type: 'Get_Dentists', payload: res.data});
      console.log(res.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(ContextGlobal);
