import React, { useState } from "react";

function UpdateProduct({ handleUpdateProduct }) {
  const [name, setname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [price, setprice] = useState(0);
  const [discription, setdiscription] = useState(0);
  const [id, setid] = useState(0);

  return (
    <div>
      <form>
        <label htmlFor="id">id</label>
        <input
          type="text"
          onChange={(e) => {
            setid(e.target.value);
          }}
        />
        <label htmlFor="name">name</label>
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <label htmlFor="price">price</label>
        <input
          type="text"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <label
          htmlFor="discription"
          onChange={(e) => {
            setdiscription(e.target.value);
          }}
        >
          discription
        </label>
        <input
          type="text"
          onChange={(e) => {
            setdiscription(e.target.value);
          }}
        />
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          type="text"
          onChange={(e) => {
            setimageUrl(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleUpdateProduct(id, {
              name: name,
              price: price,
              imageUrl: imageUrl,
              discription: discription,
            });
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;

