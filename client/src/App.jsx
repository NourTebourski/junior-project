import axios from "axios";
import React, { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts.jsx";
import CreateProducts from "./components/CreateProducts.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";
import UserView from "./components/UserView.jsx";
import "./style.css"
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=>changeView('main')}>SafeRide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>changeView('user')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      {View === "main" ? (
        <AllProducts
          product={product}
          handledeleteProduct={handledeleteProduct}
          changeView={changeView}
        />
      ) : View === "add" ? (
        <CreateProducts handleAddProduct={handleAddProduct} />
      ) : View === "update" ?(
        <UpdateProduct  handleUpdateProduct={ handleUpdateProduct} />
      ) : <UserView product={product} />}
    </div>
  );
};

export default App;
