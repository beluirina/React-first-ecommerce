import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
function ItemListContainer( ){
  const [productos, setProductos] = useState([])
  //const [product, setProduct] = useState([])
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


      //where con stock
    //, where('price', '>=', '1000')
      getDocs(queryF)
      .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}) )))
      .catch((err) => console.error(`error: ${err}`))
      .finally(()=> setloading(false))

      // getItems
      // .then((res) => setProductos(idCategory ? res.filter(prod => prod.category === idCategory ) : res ))
      // .catch((err) => console.error(`error: ${err}`))
      // .finally(()=> setloading(false))

  }, [idCategory])
  
  return( //card display items
    <div className='display'>
      <h2>Productos</h2>
      <select className='filters'>
        <option value='lessThan1000'onClick={getDocs}>Precios menores que 1000</option>
        <option value='moreThan1000'>Precios mayores que 1000</option>
        <option value=''></option>
      </select>
      <div className='cardContainer'>
      {productos.map((productos) => <Item prod={productos} key={productos.id} loading={loading}/>)}
      </div>
    </div>
  )
   
}

export default ItemListContainer;


/*===== ORDERBY ====  */
/*PRECIO ASCENDING
.collection("productos")
.orderBy("price", "asc")

PRECIO DESCENDING
.collection("productos")
.orderBy("price", "desc")

CATEGORIA


*/