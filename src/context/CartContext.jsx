import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export function useCartContext(){ return useContext(CartContext)}

export function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([]);
    console.log(cartList);

    // const  avoidDuplicates = (parametro) => {
    //     const findCharacter = cartList.some((i)=>{
    //         return i.id === parametro.id
    //     })
    //     console.log(findCharacter)
    //     return findCharacter
    // }
//viene del onAdd
    function agregarAlCarrito(item){
    //     if(avoidDuplicates(item)){
    //         const changeAmount = [...cartList]
    //             changeAmount.forEach(x =>{
    //             if(x.id === item.id){
    //                 x.cantidad += item.cantidad
    //             }
    //         })
    //         return setCartList(changeAmount)
    //     }
    //    return setCartList([...cartList, item])
    // }     console.log(item)
        // -1 no existe en el cart lis, 0 en adelante si is in cart
        const index = cartList.findIndex(prod => prod.products.id === item.products.id )

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



    function addTotal(){
        return cartList.reduce((acum, prod) => acum = acum + (prod.products.price * prod.cantidad), 0)
}
      
const cantidad = () => {
    return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
}


    function emptyCart(){
        setCartList([])
    }

    const deleteOne = (SelectedItem) => {
    // setCartList( cartList.filter( prod => prod.item.id !== SelectedItem ) )
        const deleteThisItem = [...cartList]
        const itemWasDeleted = deleteThisItem.filter(x => x.title !== SelectedItem.title)
        return setCartList(itemWasDeleted)

    }

    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        addTotal, 
        cantidad
    }}>
        { children }
    </CartContext.Provider>
}}
