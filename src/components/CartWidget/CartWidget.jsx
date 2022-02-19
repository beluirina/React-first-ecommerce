import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
//{ buyer: {name, phone, email} items: [{id, title, price}], total}

const CartWidget = () =>{

    const { handleChange, cartList, deleteOne, emptyCart, addTotal } = useCartContext()
    // function addPricePerItem(){
    //     const addTotalItems = [...cartList]
    //     addTotalItems.forEach(x =>{
    //           return x.price * x.cantidad 
    //        })
    // }
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
            
        
        {  id !== '' && `El id de la orden es : ${id} `}
        {
         
            cartList.map((el) =>(
                <div key={el.id} >
                    <h2 >{el.title} x ({el.cantidad})</h2>
                    <p>{el.id}</p>
                    <h4>${el.price}c/u</h4>
                    {/* <p>${addPricePerItem()}</p> */}
                    <button onClick={() => deleteOne(el.id)}> X </button>
                </div>
            ))
        }
            

        
            
            
        {
            (cartList.length >= 1)
            
            &&
            <>
            {`TOTAL: $${addTotal()}`}


            <form 
                onSubmit={createPurchaseData}                           
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    onChange={handleChange}
                    value={dataForm.name}
                />
                <br />
                <input 
                    type='number' 
                    name='phone'
                    placeholder='tel' 
                    onChange={handleChange}
                    value={dataForm.phone}
                />
                <br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    onChange={handleChange}
                    value={dataForm.email}
                />
                <input 
                    type='email' 
                    name='validarEmail'
                    placeholder='Repetir Email' 
                    onChange={handleChange}
                    //value={}
                />
                <br/>
                <button>Generar Orden</button>
            </form>

            <button onClick={emptyCart}>Vaciar carrito</button>
            </>
        }    
        </div>
    )
}

export default CartWidget