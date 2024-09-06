import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import ContextProvider from "./Components/utils/global.context";
import Detail from "./Routes/Detail";


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}>
            Home
          </Route>
          <Route path={"/contact"} element={<Contact />}>
            Contact
          </Route>
          <Route path={"/favs"} element={<div>Soy el fav</div>}>
            Fav
          </Route>
          <Route path={"/detail/:id"} element={<Detail/>}>
            Detail
          </Route>
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
