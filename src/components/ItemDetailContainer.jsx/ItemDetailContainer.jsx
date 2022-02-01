import { useEffect, useState } from "react"
import getItems from "../../helpers/getItems"  
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)

  const {productId} = useParams();

   //mock incovando get items
   useEffect(() => {
    getItems
      .then((res) => setProductos(res.find(prod => prod.id === productId )))

       .catch((err) => console.log(err))
       
      .finally(()=> setloading(false))
    }, [productId]);
   //resolver then return jsx decuelva un item detail

   return(
       <>
        <ItemDetail prod={productos} key={productos.id} loading={loading}/>
       </>
   )

}


export default ItemDetailContainer