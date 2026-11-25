import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

import "./App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const onsearch = (value) => {

    setSearchInput(value)
};

  return (
    <>
      <Navbar onsearch={onsearch} />
      <Hero />
      <Cards searchname={searchInput}/>
      <Cart />
    </>
  );
};

export default App;
