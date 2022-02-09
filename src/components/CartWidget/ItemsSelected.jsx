import React from "react";
import { useCartContext } from ".../context/CartContext"

// onClick = {agregarAlCarrito(prod.title)}

export default function ItemsSelected(){
    const { CartList } = useCartContext() 
    return(
        <>
        {CartList.map((el) =>(
            <>
                <h2>{el.title}</h2>
                <p>{el.count}</p>
            </>
        ))}
        </>
    )
}