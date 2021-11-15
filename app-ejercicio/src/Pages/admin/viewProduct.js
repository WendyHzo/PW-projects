import React from "react";
import ProductsTable from "../../components/productsTable";
import Header from "../../componentes/Header";

const ViewProducts = () => {
  return (
    <>
      <Header />
      <div className="row text-center pt-5 w-100">
        <h1 style={{ fontSize: 35 }}>View products</h1>
        <p style={{ fontSize: 20 }}>Esta sera una lista de los productos</p>
        <ProductsTable />
      </div>
    </>
  );
};

export default ViewProducts