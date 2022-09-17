import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="wrap">
      <Header />
      <SearchFilter />
      <Table />
    </div>
  );
}

export default App;
