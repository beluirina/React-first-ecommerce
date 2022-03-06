import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export function useCartContext(){ return useContext(CartContext)}

export function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        
        const index = cartList.findIndex(prod => prod.id === item.id )

        if (index === -1) {
            // no existe, lo agrego
            setCartList( [ ...cartList, item ] )
        } else {
            // si existe
            const cant = cartList[index].cantidad
            cartList[index].cantidad = item.cantidad + cant 
            const newCartList = [ ...cartList ]
            setCartList(newCartList)
        }
    }

function addTotal(){
        return cartList.reduce((acum, prod) => acum = acum + (prod.price * prod.cantidad), 0)
}
      
const cantidad = () => {
    return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
}


    function emptyCart(){
        setCartList([])
    }

    const deleteOne = (selectedItem) => {
    setCartList( cartList.filter( prod => prod.id !== selectedItem ) )
    }

    return <CartContext.Provider value={{
        setCartList,
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        addTotal, 
        cantidad
    }}>
        { children }
    </CartContext.Provider>
}
