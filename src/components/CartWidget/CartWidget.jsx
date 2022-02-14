import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () =>{

    const { cartList, deleteOne, emptyCart, addTotal } = useCartContext()
    function addPricePerItem(){
        const addTotalItems = [...cartList]
        addTotalItems.forEach(x =>{
              return x.price * x.cantidad 
           })
    }
       console.log( cartList.length )

    return(

        //si tu carrito esta vacio - boton continuar comprando
        //else - display products. 
        <div>
            
            <h1>Cart</h1>
            
        {
            (cartList.length === 0)
            
            &&
            
            <div>
                <p>No hay items en tu carrito...</p>
                <Link to='/'>
                    <button>Continuar comprando</button>
                </Link>
            </div>
            
        }    
            
        {                    
            cartList.map((el) =>(
                <div key={el.id} >
                    <h2 >{el.title} x {el.cantidad}</h2>
                    <p>${addPricePerItem}</p>
                    {`TOTAL: $${addTotal()}`}
                    <button onClick={() => deleteOne(el.id)}> X </button>
                </div>
            ))
        }
            
            
        {
            (cartList.length >= 1)
            
            &&
            
            <button onClick={emptyCart}>Vaciar carrito</button>
            // ESCRIBIR RESTO DE VISTA QUE QUIERAS AGREGAR
        }     
        
        
        </div>
    )
}

export default CartWidget
//por que funcion global? no es lo mismo importarla de distintos componentes