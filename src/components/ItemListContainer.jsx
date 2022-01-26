import ItemCount from "./ItemCount";
import Item from "./Item";

function ItemListContainer( {greetings} ){
    return( //card display items

      <div className="card" style={{ width: "18rem"  }}>
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Nombre del producto</h5>
      <p className="card-text">Descripcion.{greetings}</p>
      <a href="#" className="btn btn-primary">Agregar a carrito</a>
    </div>
     <ItemCount  stock="5" count="1"/>
     <Item/>
  </div>
    )
     
  }
  export default ItemListContainer;
