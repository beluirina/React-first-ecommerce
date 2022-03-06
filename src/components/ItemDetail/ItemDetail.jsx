import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
 import ItemCount from "../ItemCount/ItemCount"


function ItemDetail ({ loading, prod }){
    const { agregarAlCarrito} = useCartContext()
    
    const [contador, setContador] = useState(0)

    function onAdd(cant){
        agregarAlCarrito( {...prod, cantidad: cant} )
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


                </div>
            </div>
            )}

            {contador === 0 ? 
                    <ItemCount  name={prod} onAdd={onAdd} stock={prod.stock} initial={1}/>
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
    
    </>
  }

  export default ItemDetail