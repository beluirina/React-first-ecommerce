import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){ useContext(CartContext)}

export function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        if(AvoidDuplicates(item)){
            const changeAmount = [...cartList]
                changeAmount.forEach(x =>{
                if(x.title === item){
                    x.quantity += 1
                }
            })
            return setCartList(changeAmount)
        }
       return setCartList([...cartList, item])
    }
    function emptyCart(){
        setCartList([])
    }
    const  AvoidDuplicates = (parametro) => {
        const findCharacter = cartList.find((i)=>{
            i == parametro
        })
        return findCharacter
    }

    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart
    }}>
        { children }
    </CartContext.Provider>
}
