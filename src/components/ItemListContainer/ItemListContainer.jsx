import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  getItems from '../../helpers/getItems'
import Item from './Item'

function ItemListContainer( ){
  
  fetch('assets/Data.json')
  //como usar los productos fetched
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)

    const {idCategory} = useParams()

    
    useEffect(() => {
      if (idCategory) {
        getItems
          .then((res) => setProductos(res.filter(prod => prod.category === idCategory )))
          .catch((err) => console.error(`error: ${err}`))
          .finally(()=> setloading(false))
        
      } else {
        getItems
          .then((res) => setProductos(res))
          .catch((err) => console.error(`error: ${err}`))
          .finally(()=> setloading(false))
      }

    }, [])//dependencia/filtro del array vacio para que se ejecute solo una vez
    
    return( //card display items
      <div>
        {productos.map((prod)=> <Item prod={prod} key={prod.id} loading={loading}/>)}
      </div>
    )
     
  }

  export default ItemListContainer;
