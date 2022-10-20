import React from "react";
import Header from "../../components/Header/Header";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import Table from "../../components/Table/Table";
import "./AdminPanel.css";

function AdminPanel() {
  return (
    <div className="wrap">
      <Header />
      <SearchFilter />
      <Table />
    </div>
  );
}

export default AdminPanel;
