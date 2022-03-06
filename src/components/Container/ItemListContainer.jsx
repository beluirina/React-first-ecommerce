import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../ItemList/Item'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

function ItemListContainer( ){
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)

  const {idCategory} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
      const queryCollection = collection(db, 'productos')

      const queryF = !idCategory ? 
            queryCollection                
        : 
            query(queryCollection, 
                where('category', '==', idCategory)                
            )  

      getDocs(queryF)
      .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}) )))
      .catch((err) => console.error(`error: ${err}`))
      .finally(()=> setloading(false))

  }, [idCategory])
  
  return( //card display items
    <div className='display'>
      <h2>Productos</h2>
      <div className='cardContainer'>
      {productos.map((productos) => <Item prod={productos} key={productos.id} loading={loading}/>)}
      </div>
    </div>
  )
   
}

export default ItemListContainer;
