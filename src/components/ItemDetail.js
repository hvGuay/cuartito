
import React from "react";


const ItemDetail = ({item}) => {
    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.img} className="img-fluid" alt={item.nombre} />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
            </div>
        </div>
    )
}

export default ItemDetail;