function ItemListContainer(){
  return( //card display items
    <div className="card" style="width: 18rem;">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Nombre del producto</h5>
    <p className="card-text">Descripcion.</p>
    <a href="#" className="btn btn-primary">Agregar a carrito</a>
  </div>
</div>

  )
   
}

export default ItemListContainer;