import React from "react";

const OneProducts = ({ product ,handledeleteProduct,changeView}) => {
    
    return (
        <div className="d-flex  flex-wrap gap-3" style={{ marginLeft: '4em', marginRight: "4em", marginTop: "2.5em" }}>
            {product.map((el) => {  
                console.log("elll",el)
                return (
                    <div className="card" style={{ margin: '1em' , width:"300px" }} key={el.id}>
                        <img
                            className="card-img-top img-fluid"
                            src={el.imageUrl}
                            alt="Card image cap"
                            style={{ maxHeight: '200px', objectFit: 'cover' }} // Control image size
                        />
                        <div className="card-body d-flex flex-column ">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">price : {el.price}DT</p>
                            <p className="card-text">Discription : {el.discription}</p>
                            <p className="card-text">Article Nbr: {el.id}</p>
                            <div>
                            <a href="#" className="btn btn-danger" onClick={()=>{handledeleteProduct(el.id)}}>Delete</a>
                            <a href="#" className="btn btn-primary  m-2" onClick={()=>{changeView("add")}}>Add</a>
                            <a href="#" className="btn btn-info " onClick={()=>{changeView("update")}}>Update</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default OneProducts;
