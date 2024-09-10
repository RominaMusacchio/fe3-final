import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

import { useDentistStates } from "../src/Components/utils/global.context";

function App() {
  // className="App"

  const { state } = useDentistStates();
  return (
    <div className={state.theme ? "dark-theme" : "light-theme"}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}>
          Home
        </Route>
        <Route path={"/contact"} element={<Contact />}>
          Contact
        </Route>
        <Route path={"/favs"} element={<Favs />}>
          Fav
        </Route>
        <Route path={"/detail/:id"} element={<Detail />}>
          Detail
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
