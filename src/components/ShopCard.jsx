import React from "react";

const ShopCard =({title,id,url})=>{
    return(
        <div className="card w-96 bg-base-100 shadow-xl mt-5" key={id}>
  <figure><img src={url} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )
}

export default ShopCard;