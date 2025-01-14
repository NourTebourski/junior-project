import React, { useState } from 'react'

function CreateProducts({handleAddProduct}) {
  const [name,setname] = useState("")
  const [imageUrl,setimageUrl] = useState("")
  const [price,setprice] = useState("")
  const [discription,setdiscription] = useState("")


  return (
    <div>
      <form>
        <label htmlFor="name" >name</label>
        <input type="text" onChange={(e)=>{setname(e.target.value)}} />
        <label htmlFor="price" >price</label>
        <input type="text"onChange={(e)=>{setprice(e.target.value)}} />
        <label htmlFor="discription" onChange={(e)=>{setdiscription(e.target.value)}}>discription</label>
        <input type="text" onChange={(e)=>{setdiscription(e.target.value)}}/>
        <label htmlFor="imageUrl" >imageUrl</label>
        <input type="text" onChange={(e)=>{setimageUrl(e.target.value)}}/>
        <button onClick={()=>{handleAddProduct({name:name,price:price,imageUrl:imageUrl,discription:discription})}}>Add</button>
        
      </form>
    </div>
  )
}

export default CreateProducts
