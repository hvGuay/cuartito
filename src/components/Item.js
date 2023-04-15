import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className= "text-decoration-none text-dark">
            <div className="card-border border-0 container">
                <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body text-center ">
                        <p className="card-text">{item.name}</p>
                    </div>
            </div>
        </Link>
    )
}

export default Item;
