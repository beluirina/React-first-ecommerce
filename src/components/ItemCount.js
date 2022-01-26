import { useState } from 'react' // useState

function ItemCount ( {stock} ) {
    //para que no se reinicie el valor inicial ya que re ejecuta toda la function ItemCount
     const [count, setCount] = useState(0)
 

     function onAdd(){//ejecutar onAdd - solo si...
          //si hay stock
         if (count < stock){
             setCount(count + 1)
         }
     }
     function restar(){
         if(count >= 1 ){
             setCount(count - 1)
         }
         
     }
 
     return(
         <div>
             <button onClick={ onAdd }> + </button>
             <div>
                 { count }
             </div>
             <button onClick={ restar }> - </button>
         </div>
     )
 }


export default ItemCount;