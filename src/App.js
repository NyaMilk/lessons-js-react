import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <div className="wrap">
      <Header />
      <SearchFilter />
    </div>
  );
}

export default App;
