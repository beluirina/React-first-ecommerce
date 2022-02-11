import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){ return useContext(CartContext)}

export function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);
    console.log(cartList);

    const  avoidDuplicates = (parametro) => {
        const findCharacter = cartList.some((i)=>{
            return i.id === parametro.id
        })
        console.log(findCharacter)
        return findCharacter
    }
//viene del onAdd
    function agregarAlCarrito(item){
        if(avoidDuplicates(item)){
            const changeAmount = [...cartList]
                changeAmount.forEach(x =>{
                if(x.id === item.id){
                    x.cantidad += item.cantidad
                }
            })
            return setCartList(changeAmount)
        }
       return setCartList([...cartList, item])
    }

    function emptyCart(){
        setCartList([])
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
