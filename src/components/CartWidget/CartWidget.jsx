import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () =>{

    const { cartList, emptyCart} = useCartContext()
    return(

        //si tu carrito esta vacio - boton continuar comprando
        //else - display products. 
        <div>
            {/* <img src="/shopping-cart.png" alt="carrito de compras" /> */}
            <h1>Cart</h1>
            <p>No hay items en tu carrito...</p>
            <Link to='/'>
            <button>Continuar comprando</button>
            </Link>
            {cartList.map(prod => <li>{prod.name}</li>)}
            <button onClick={emptyCart}></button>
        </div>
    )
   }
   export default CartWidget
//por que funcion global? no es lo mismo importarla de distintos componentes