import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){ useContext(CartContext)}

export function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        if(avoidDuplicates(item)){
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

    const  avoidDuplicates = (parametro) => {
        const findCharacter = cartList.find((i)=>{
            return i === parametro
        })
        return findCharacter
    }

    const deleteOne = (SelectedItem) => {
        const deleteThisItem = [...cartList]
        const itemWasDeleted = deleteThisItem.filter(x => x.title !== SelectedItem.title)
        return setCartList(itemWasDeleted)
    }

    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne
    }}>
        { children }
    </CartContext.Provider>
}
