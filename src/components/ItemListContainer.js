import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Arraydeproductos from "./Arraydeproductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Arraydeproductos.filter(item => item.category === id) : Arraydeproductos);
            }, 1)
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);

    return (
        <div>
                <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;