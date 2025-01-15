import React, { useState } from 'react'

function CreateProducts({handleAddProduct}) {
  const [name,setname] = useState("")
  const [imageUrl,setimageUrl] = useState("")
  const [price,setprice] = useState(0)
  const [discription,setdiscription] = useState("")
  const [categoryId,setcategoryId] = useState(1)


  return (
    <div className="container mt-4">
<div className="form-group mb-3">
    <label htmlFor="productName">Product Name</label>
    <input
        id="productName"
        className="form-control"
        placeholder="Enter product name"
        onChange={(e)=>{setname(e.target.value)}}
    />
</div>

<div className="form-group mb-3">
    <label htmlFor="productImageUrl">Product Image URL</label>
    <input
        id="productImageUrl"
        className="form-control"
        placeholder="Enter product image URL"
        onChange={(e)=>{setimageUrl(e.target.value)}}
    />
</div>

<div className="form-group mb-3">
    <label htmlFor="productPrice">Product Price</label>
    <input
        id="productPrice"
        className="form-control"
        placeholder="Enter product price"
        onChange={(e)=>{setprice(e.target.value)}}
    />
</div>

<div className="form-group mb-3">
    <label htmlFor="productDiscription">Discription</label>
    <input
        id="productDiscription"
        className="form-control"
        placeholder="Enter product Discription"
        onChange={(e)=>{setdiscription(e.target.value)}}
    />
</div>

    <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{ marginBottom: '6em'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>{setcategoryId(1)}} href="#">helmets</a></li>
            <li><a className="dropdown-item"  onClick={()=>{setcategoryId(2)}}href="#">clothes</a></li>
            
          </ul>
        </div>

<button className="btn btn-primary btn-lg" onClick={()=>{handleAddProduct({name:name,price:price,imageUrl:imageUrl,discription:discription,categoryId:categoryId})}}>ADD IT</button>
</div>
  )
}

export default CreateProducts

