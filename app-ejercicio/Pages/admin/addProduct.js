import React, { useContext, useEffect, useState } from "react";
import ProductForm from "../../componentes/ProductForm";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";
import Header from "../../componentes/Header";

const AddProduct = () => {
  const { changeProductName, changePrice, price, productName} = useContext(GlobalContext);
  
  const [product, setProduct] = useState({name: "", price: 0})
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["name"]: productName})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["price"]: price})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price])
  

  useEffect(() => {
    changeProductName("")

    changePrice(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <div className="row text-center py-5 w-100">
        <h1 style={{ fontSize: 35 }}>Add product</h1>
        <p style={{ fontSize: 20 }}>
          Complete el formulario para agregar un nuevo producto
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4 ">
          <ProductForm type={"crear"} />
        </div>
        <div className="col-md-4">
          <ProductItem functionalButtons={false} product={product} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;