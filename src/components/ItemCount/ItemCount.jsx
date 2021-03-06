import { useState } from 'react' 

function ItemCount ( { stock, initial, onAdd } ) {
    //para que no se reinicie el valor inicial ya que re ejecuta toda la function ItemCount
     const [count, setCount] = useState(initial) 

     function sumar(){//ejecutar onAdd - solo si...
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
     const agregar=()=>{
        onAdd(count)
      }
    
 
     return(
         <>
         <div className='counter'>
             <button onClick={ sumar }> + </button>
             <div>
                 { count }
             </div>
             <button onClick={ restar }> - </button>
         </div>
         <div>
             <button onClick={ agregar }  > Agregar a carrito</button>
         </div>
         </>
     )
 }


export default ItemCount;