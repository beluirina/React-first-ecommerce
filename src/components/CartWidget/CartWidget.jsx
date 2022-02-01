import { Link } from "react-router-dom"


const CartWidget = () =>{
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
        </div>
    )
   }
   export default CartWidget
