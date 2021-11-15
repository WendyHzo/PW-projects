import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { VscAdd } from "react-icons/vsc";
import { GlobalContext } from "../context/GlobalContext"
import ModalEditar from './ModalEditar.jsx'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { productList } from "../utils/productList"
const ProductsTable = () => {
  const { products, deleteProduct, setProductEdit } = useContext(GlobalContext);

  return (
    <>
    <div className="container" style={{ padding: "0 5rem" }}>
      <div className="row py-3 d-flex justify-content-between">
        <div className="col-3 p-0"> {products.length} Productos en inventario</div>
        <div className="col-3 p-0">
          <Link to="/addProducts">
            <button type="button" class="btn btn-success">
              Agregar producto
              <VscAdd />
            </button>
          </Link>
        </div>
      </div>
      <table class="table table-hover table-bordered table-sm w-100">
        <thead
          style={{
            background: "#161616",
            color: "white",
            border: "1px solid white",
          }}
        >
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((p) => (
            <tr key={p.id}>
              <th scope="row">{p.id}</th>
              <td>{p.nombre || "Nombre de prueba"}</td>
              <td>$ {p.precio}</td>
              <td>
                <button onClick={() => setProductEdit(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-Light btn-sm m-1">
                  Editar
                </button>
                <button onClick={() => {
                  deleteProduct(p.id)
                  toast.error(`El producto con id <${p.id}> fue eliminado`, {
                    position: "bottom-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                }} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                  Eliminar
                </button>
                <ToastContainer/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ModalEditar />
  </>
);
};

export default ProductsTable;