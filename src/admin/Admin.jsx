import React from "react";
// @ts-ignore
import panel from "./admin.module.css";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

function Admin() {
  return (
    <div>
      {/* <Form /> */}
      <ProduitList />
    </div>
  );
}
function Form() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
    }).then((res) => {
      // Update the state with the new product
      setProducts([...products, res.data]);
      console.log(res.data);
    });
  }
  return (
    <div className={panel.panelDiv}>
      <h1>Panel Admin!</h1>
      <div>
        <form onSubmit={(e) => submit(e)} className={panel.adminForm}>
          <h2>Managing The store</h2>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Id"
            onChange={(e) => handle(e)}
            value={data.id}
            required
          />{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => handle(e)}
            value={data.name}
            required
          />{" "}
          <br />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e) => handle(e)}
            value={data.price}
            required
          />
          <br />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={(e) => handle(e)}
            value={data.description}
            required
          />
          <br />
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
            onChange={(e) => handle(e)}
            value={data.stock}
            required
          />
          <br />
          <button type="submit">Add to Store</button>
        </form>
      </div>
    </div>
  );
}

function ProduitList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching product list:", error));
  }, []);
  return (
    <div className={panel.dataList}>
      <h1>Produits List🦢</h1>
      <table className={panel.tableList}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Admin;
