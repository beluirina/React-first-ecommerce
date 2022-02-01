import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  getItems from '../../helpers/getItems'
import Item from './Item'

function ItemListContainer( ){
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)

  const {idCategory} = useParams()
  
  useEffect(() => {
      getItems
      .then((res) => setProductos(idCategory ? res.filter(prod => prod.category === idCategory ) : res ))
      .catch((err) => console.error(`error: ${err}`))
      .finally(()=> setloading(false))

  }, [idCategory])
  
  return( //card display items
    <div className='display'>
      <h2>Productos</h2>
      <div className='cardContainer'>
      {productos.map((prod)=> <Item prod={prod} key={prod.id} loading={loading}/>)}
      </div>
    </div>
  )
   
}

export default ItemListContainer;