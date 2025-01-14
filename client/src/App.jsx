import axios from "axios";
import React, { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts.jsx";
import CreateProducts from "./components/CreateProducts.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";

const App = () => {
  const [View, setView] = useState("main");
  const [product, setProduct] = useState([]);
  const changeView = (v) => {
    setView(v);
  };

  const fetch = () => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("errrrrr", err);
      });
  };
  const handledeleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/product/${id}`)
      .then(() => {
        console.log("deleted");
        fetch();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleAddProduct = (body) => {
    axios
      .post(`http://localhost:3000/product/add`, body)
      .then(() => {
        console.log("element added");
        fetch();
        changeView("main");
      })
      .catch((err) => console.error("errror adding", err));
  };
const handleUpdateProduct = (id,body)=>{
  axios
  .put(`http://localhost:3000/product/${id}`,body)
  .then(() => {
    console.log("element added");
    fetch();
    changeView("main");
  })
  .catch((err) => console.error("errror adding", err));
}
  return (
    <div>
      {View === "main" ? (
        <AllProducts
          product={product}
          handledeleteProduct={handledeleteProduct}
          changeView={changeView}
        />
      ) : View === "add" ? (
        <CreateProducts handleAddProduct={handleAddProduct} />
      ) : (
        <UpdateProduct  handleUpdateProduct={ handleUpdateProduct} />
      )}
    </div>
  );
};

export default App;
