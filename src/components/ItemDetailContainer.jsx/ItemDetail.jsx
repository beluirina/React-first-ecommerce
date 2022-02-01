 import { Link } from "react-router-dom"
 import ItemCount from "../ItemListContainer/ItemCount"
 
  //itemdetail.js incluyendo descripcion foto y precio
function ItemDetail ({ loading, prod }){
    //vista de detalle expandida del producto con titulo imagen descrip precio
    return <>
    { ( loading )  ? ( <h2>Loading... </h2> ) : ( 

            <div className="card-details" key={ prod.id } style={{ width: "80%"  }}>

                <img className="card-img-top" src={ prod.img } alt="Card image cap" style={{ width: "500px"  }}/> 

                <div className='details-text'>

                    <div className='top'>
                        <h5 className="card-title-detail">{ prod.category } { prod.title }</h5>

                        <h6 className="price">${ prod.price }</h6>
                    </div>


                    <div className='bottom'>
                    <ItemCount  stock={prod.stock} count="1"/>

                        <Link to={`/cart`} className="btn btn-primary">
                            Agregar a carrito
                        </Link>
                    </div>

                </div>
            </div>
            )}
    
    </>
  }

  export default ItemDetail