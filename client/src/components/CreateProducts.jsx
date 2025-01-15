import React, { useState } from 'react'

function CreateProducts({handleAddProduct}) {
  const [name,setname] = useState("")
  const [imageUrl,setimageUrl] = useState("")
  const [price,setprice] = useState(0)
  const [discription,setdiscription] = useState("")
  const [categoryId,setcategoryId] = useState(0)


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
    <label htmlFor="productQuantity">Discription</label>
    <input
        id="productQuantity"
        className="form-control"
        placeholder="Enter product quantity"
        onChange={(e)=>{setdiscription(e.target.value)}}
    />
</div>
<div className="form-group mb-3">
    <label htmlFor="productQuantity">categoryId</label>
    <input
        id="productQuantity"
        className="form-control"
        placeholder="Enter product quantity"
        onChange={(e)=>{setcategoryId(e.target.value)}}
    />
</div>
<button className="btn btn-success btn-lg" onClick={()=>{handleAddProduct({name:name,price:price,imageUrl:imageUrl,discription:discription,categoryId:categoryId})}}>ADD IT</button>
</div>
  )
}

export default CreateProducts

