import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  getItems from '../../helpers/getItems'
import Item from './Item'
import {doc, getFirestore, getDoc, getDocs, collection, query, where} from 'firebase/firestore'
function ItemListContainer( ){
  const [productos, setProductos] = useState([])
  //doc
  //const [product, setProduct] = useState([])
  const [loading, setloading] = useState(true)

  const {idCategory} = useParams()
  
  useEffect(() => {
  //   const db = getFirestore()

  //     const queryCollection = collection(db, 'productos')
  //     const queryFiltro = query(queryCollection, where('price', '>=', '1000'))
  //     //where con stock

  //     getDocs(queryFiltro)
  //     .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}) )))
  //     .catch((err) => console.error(`error: ${err}`))
  //     .finally(()=> setloading(false))
    //   // const itemRef = doc(db, 'productos', /*key id */)
    // getDoc(itemRef)
    // .then(resp => setProduct( {id: resp.id, ...resp.data()} ))

      getItems
      .then((res) => setProductos(idCategory ? res.filter(prod => prod.category === idCategory ) : res ))
      .catch((err) => console.error(`error: ${err}`))
      .finally(()=> setloading(false))

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
      {productos.map((prod)=> <Item prod={prod} key={prod.id} loading={loading}/>)}
      </div>
    </div>
  )
   
}

export default ItemListContainer;