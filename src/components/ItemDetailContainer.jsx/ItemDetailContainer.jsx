import { useEffect, useState } from "react"
import getItems from "../../helpers/getItems"  
import ItemDetail from "./ItemDetails";

export default function ItemDetailContainer(){
    const [prod, setProductos] = useState([])
    const productId = 1; //como convertir en variable dependiendo del click de boton

   //mock incovando get items
   useEffect(() => {
       getItems().then((data) => {
           setProductos(data.find((item) => item.id === productId))
       })
       .catch((err) => console.log(err))
   }, []);
   //resolver then return jsx decuelva un item detail
   return(
       <>
        <ItemDetail prod={prod} key={prod.id} loading='loading'/>
        
       </>
   )

}