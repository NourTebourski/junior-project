import React, { useState } from 'react';

function UserView({ product }) {
  const [Id, setId] = useState(0);

  const showDis = (id) => {
    if (Id === id) {
      setId(0);
    } else {
      setId(id);
    }
  };

  return (
    <div className="d-flex flex-wrap gap-3" style={{  justifyContent: 'center', alignItems: 'center', marginTop: "2.5em" }}>
      {product.map((el) => {
        return (
          <div className="card" style={{ margin: '1em', width: "300px" }} key={el.id}>
            <img
              className="card-img-top img-fluid"
              src={el.imageUrl}
              alt="Card image cap"
              style={{ height: '200px', width: 'auto', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">Price: {el.price}DT</p>
              <p className="card-text">Article Nbr: {el.id}</p>
              <p className="card-text">Category : {el.category.name}</p>
              {Id === el.id && <p className="card-text">Discription : {el.discription}</p>}
              <div>
                <a href="#" className="btn btn-primary" onClick={() => showDis(el.id)}>
                 Details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserView;

