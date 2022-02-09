import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
 import ItemCount from "../ItemListContainer/ItemCount"
 
  //itemdetail.js incluyendo descripcion foto y precio
function ItemDetail ({ loading, prod }){
    //vista de detalle expandida del producto con titulo imagen descrip precio
    const [contador, setContador] = useState(0)
    // const { cartList, agregarAlCarrito} = useCartContext()
    // console.log(cartList)

    // const agregarAlCarrito = useCartContext();


    function onAdd(cant){
        //agregarAlCarrito( {...prod, cantidad: cant} )
        setContador(cant)
    }

    return <>
    { ( loading )  ? ( <h2>Loading... </h2> ) : ( 

            <div className="card-details" key={ prod.id } style={{ width: "80%"  }}>

                <img className="card-img-top" src={ prod.img }  style={{ width: "500px"  }}/> 

                <div className='details-text'>

                    <div className='top'>
                        <h5 className="card-title-detail">{ prod.category } { prod.title }</h5>

                        <h6 className="price">${ prod.price }</h6>
                    </div>


                    <div className='bottom'>
                    {contador === 0 ? 
                    <ItemCount   onAdd={onAdd} stock={prod.stock} initial={1}/>
                        : 
                        <>
                        <Link to='/cart'>
                        <button>Terminar compra</button>
                        </Link>
                        <Link to='/'>
                        <button>Continuar comprando</button>
                        </Link>
                        </>
                }
                    </div>

                </div>
            </div>
            )}
    
    </>
  }

  export default ItemDetail