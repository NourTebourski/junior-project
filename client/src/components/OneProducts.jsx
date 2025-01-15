import React,{useState} from "react";

const OneProducts = ({ product ,handledeleteProduct,changeView}) => {
     const [Id, setId] = useState(0);
    
      const showDis = (id) => {
        if (Id === id) {
          setId(0);
        } else {
          setId(id);
        }
      };
    
    return (
        <div className="d-flex flex-wrap gap-3" style={{ marginTop: "2.5em", justifyContent: 'center', alignItems: 'center' }}>

            {product.map((el) => {  
                console.log("elll",el)
                return (
                    <div className="card" style={{ margin: '1em' , width:"350px" }} key={el.id}>
                        <img
                            className="card-img-top img-fluid"
                            src={el.imageUrl}
                            alt="Card image cap"
                            style={{ height: '200px', width: 'auto', objectFit: 'cover' }} // Control image size
                        />
                        <div className="card-body d-flex flex-column ">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">Price : {el.price}DT</p>
                            {Id === el.id && <p className="card-text">Discription : {el.discription}</p>}
                            <p className="card-text">Article Nbr: {el.id}</p>
                            <p className="card-text">Category: {el.category.name}</p>
                            <div>
                            <a href="#" className="btn btn-danger m-1" onClick={()=>{handledeleteProduct(el.id)}}>Delete</a>
                            <a href="#" className="btn btn-primary  m-1" onClick={()=>{changeView("add")}}>Add</a>
                            <a href="#" className="btn btn-info m-1" onClick={()=>{changeView("update")}}>Update</a>
                            <a href="#" className="btn btn-primary m-1" onClick={() => showDis(el.id)}>Details</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default OneProducts;
