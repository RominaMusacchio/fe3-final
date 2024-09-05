import { createContext } from "react";
import { useContext, useState, useEffect } from "react";

import axios from "axios";

export const initialState = { theme: "", data: [] };
const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      setDentists(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ dentists }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(ContextGlobal);
