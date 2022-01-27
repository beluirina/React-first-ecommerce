import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react';
import { task } from '../../helpers/itemList'
import Item from './Item'

function ItemListContainer( {greetings} ){
  
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)
    //desarollar la vista de un item y es de tipo {id, title, price, pictureUrl}
    useEffect(() => {
        task
        .then((res) => setProductos(res))
        .catch((err) => console.error(`error: ${err}`))
        .finally(()=> setloading(false))
    }, [])//dependencia/filtro del array vacio para que se ejecute solo una vez
    
    return( //card display items

      <div className="card" style={{ width: "18rem"  }}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Nombre del producto</h5>
          <p className="card-text">Descripcion.{greetings}</p>
          <a href="#" className="btn btn-primary">Agregar a carrito</a>
        </div>

        <ItemCount  stock="5" count="1"/>
        
        {productos.map((prod)=> <Item prod={prod} key={prod.id} loading={loading}/>)}
      </div>

    )
     
  }
  export default ItemListContainer;
