import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){return useContext(CartContext)}

function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        setCartList(item)
    }
    function emptyCart(){
        setCartList([])
    }
    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart
    }}>
        { children }
    </CartContext.Provider>
}

export default CartContextProvider