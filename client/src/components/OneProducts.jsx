import React from "react";

const OneProducts = ({ product ,handledeleteProduct,changeView}) => {
    
    return (
        <div className="d-flex gap-3">
            {product.map((el) => {  
                return (
                    <div className="card" style={{ margin: '1em' }} key={el.id}>
                        <img
                            className="card-img-top img-fluid"
                            src={el.imageUrl}
                            alt="Card image cap"
                            style={{ maxHeight: '200px', objectFit: 'cover' }} // Control image size
                        />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">price : {el.price}DT</p>
                            <p className="card-text">discription :{el.discription}</p>
                            <div>
                            <a href="#" className="btn btn-danger" onClick={()=>{handledeleteProduct(el.id)}}>Delete</a>
                            <a href="#" className="btn btn-primary  m-2" onClick={()=>{changeView("add")}}>Add</a>
                            <a href="#" className="btn btn-info " onClick={()=>{changeView("updqte")}}>Update  {el.id}</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default OneProducts;
