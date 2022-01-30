 import { Link } from "react-router-dom"
 import ItemCount from "../ItemListContainer/ItemCount"
 
  //itemdetail.js incluyendo descripcion foto y precio
 export default function ItemDetail ({ loading, prod }){
      const {title, category, id, stock, price, img } = prod.product
    //vista de detalle expandida del producto con titulo imagen descrip precio
    return <>
    { ( loading )  ? ( <h2>Loading... </h2> ) : ( 
            <div className="card" key={ id } style={{ width: "80%"  }}>
                <img className="card-img-top" src={ img } alt="Card image cap" style={{ width: "500px"  }}/> 

                <div className='details'>

                    <div className='top'>
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ category }</p>

                        <h6>{ price }</h6>
                    </div>


                    <div className='bottom'>
                    <ItemCount  stock={stock} count="1"/>

                        <Link to={`/cart`} className="btn btn-primary">
                            Agregar a carrito
                        </Link>
                    </div>

                </div>
            </div>
            )};
    
    </>
  }