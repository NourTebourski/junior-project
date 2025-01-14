import React from 'react'
import OneProducts from './OneProducts.jsx'

function AllProducts({product,handledeleteProduct,changeView}) {
  return (
   <div>
<OneProducts product={product} handledeleteProduct={handledeleteProduct}  
changeView={changeView} 
/>
   </div>
  )
}

export default AllProducts
