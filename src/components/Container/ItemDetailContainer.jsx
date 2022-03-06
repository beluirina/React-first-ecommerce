import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer(){
  const [productos, setProductos] = useState({})
  const [loading, setloading] = useState(true)

  const {productId} = useParams();

   //mock incovando get items
   useEffect(() => {
     const db = getFirestore()
    const itemRef = doc(db, 'productos', productId)

    getDoc(itemRef)
      .then((res) => setProductos({ id: res.id, ...res.data()} ))
       .catch((err) => console.log(err))
      .finally(()=> setloading(false))
    }, [productId]);

   return(
       <>
        <ItemDetail prod={productos} key={productos.id} loading={loading}/>
       </>
   )

}


export default ItemDetailContainer