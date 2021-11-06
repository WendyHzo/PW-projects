import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/globalContext"
import ModalEditar from './modalEditar'

const ProductsTable = () => {
  const { products, deleteProduct, setProductEdit } = useContext(GlobalContext);

  return (
    <>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row py-3 d-flex justify-content-between">
          <div className="col-3 p-0">Tiene {products.length} en inventario</div>
          <div className="col-3 p-0">
            <Link to="/admin/addProduc">
              <button type="button" class="btn btn-success">
                Agregar import 
                
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
              
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.name || "Nombre de prueba"}</td>
                <td>
                  <img src={p.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} height="50" width="50" alt="img" />
                </td>
                <td>$ {p.price}</td>
                <td>
                  <button onClick={() => setProductEdit(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-info btn-sm m-1">
                    Editar
                  </button>
                  <button onClick={() => deleteProduct(p.id)} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                    Eliminar
                  </button>
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