import axios from "axios";
import React, { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts.jsx";
import CreateProducts from "./components/CreateProducts.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";
import UserView from "./components/UserView.jsx";
import Category from "./components/Category.jsx";

const App = () => {
  const [View, setView] = useState("user");
  const [product, setProduct] = useState([]);
  const [category,setCategory] = useState([])
  const [searchproduct, setSearchproduct] = useState("");
  const [Visible, setVisible] = useState(false);
  const makeItVisible = () => {
    setVisible(true); 
  };
  const makeItHide = () => {
    setVisible(false); 
  };

  const changeView = (v) => {
    setView(v);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const filterproducts = product.filter(p => p.name.toLowerCase().includes(searchproduct.toLowerCase()));
    setProduct(filterproducts);
  };
  const getCategory = (id)=>{
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {setCategory(res.data)
    changeView("category")
  })
      .catch((err) => {
        console.error("errrrrr", err);
      });
  }
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
    <a className="navbar-brand" href="#" onClick={()=>{window.location.reload()}}>SafeRide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{changeView('user'),makeItHide()}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={()=>{changeView('main'),makeItVisible()}} href="#">Admin</a>
        </li>
        {Visible && (
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{changeView('add')}} href="#">Create product</a>
          </li>
        )}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>{changeView('category'),getCategory(1)}} href="#">helmets</a></li>
            <li><a className="dropdown-item" onClick={()=>{changeView('category'),getCategory(2)}} href="#">clothes</a></li>
            
          </ul>
        </li>
      
      </ul>
      <form className="d-flex" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchproduct}
      onChange={(e) => {setSearchproduct(e.target.value)}}/>
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
      ) : View === "user" ? <UserView product={product} /> : <Category  category={category} />  }
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
   
    <ul>
      <li>
        Phone number : +21629842206
      </li>
      <li>Adress : Ben Arous , Rades , rue mouhamed ali 9 bis </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default App;
