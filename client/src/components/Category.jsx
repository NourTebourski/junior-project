import React ,{useState}from 'react'

function Category({category}) {
   const [Id, setId] = useState(0);
 
   const showDis = (id) => {
     if (Id === id) {
       setId(0);
     } else {
       setId(id);
     }
   };
 
   return (
     <div className="d-flex flex-wrap gap-3" style={{ marginLeft: '4em', marginRight: "4em", marginTop: "2.5em" }}>
       {category.map((el) => {
         return (
           <div className="card" style={{ margin: '1em', width: "300px" }} key={el.id}>
             <img
               className="card-img-top img-fluid"
               src={el.imageUrl}
               alt="Card image cap"
               style={{ maxHeight: '200px', objectFit: 'cover' }}
             />
             <div className="card-body">
               <h5 className="card-title">{el.name}</h5>
               <p className="card-text">Price: {el.price}DT</p>
               <p className="card-text">Article Nbr: {el.id}</p>
               {/* <p className="card-text">Category : {el.category.name}</p> */}
               {Id === el.id && <p className="card-text">Discription : {el.discription}</p>}
               <div>
                 <a href="#" className="btn btn-primary" onClick={() => showDis(el.id)}>
                   {Id === el.id ? 'Hide Details' : 'Show Details'}
                 </a>
               </div>
             </div>
           </div>
         );
       })}
     </div>
   );
}

export default Category
