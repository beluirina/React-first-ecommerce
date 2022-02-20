import { Link } from "react-router-dom"
//{ buyer: {name, phone, email} items: [{id, title, price}], total}
import { useState } from "react";
import {useCartContext} from "../../context/CartContext"
import { 
    getFirestore, 
    collection, 
    addDoc,
    query, 
    where, 
    documentId, 
    writeBatch, 
    getDocs 
} from 'firebase/firestore';

export default function CartWidget (){
    const { cartList, emptyCart, addTotal, deleteOne } = useCartContext()

    // function addPricePerItem(){
    //     const addTotalItems = [...cartList]
    //     addTotalItems.forEach(x =>{
    //           return x.price * x.cantidad 
    //        })
    // }
    function checkValidation(input){
        let info = input.target.value
        const email = dataForm.email.value

        if (info !== email){
            return "porfavor ingresar mismo email"
        }else{
            createPurchaseData()
        }
    }
       function handleChange (event) {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    
        const [id, setId] = useState('')
        const [dataForm, setDataForm] = useState({
            email: '',
            phone: '',
            name: ''
        })
    
        const createPurchaseData = async (e) => {
            e.preventDefault()  
    
             // Nuevo objeto    
            let buyersInfo = {}          
    
            buyersInfo.buyer =  dataForm //{name:'Federico',email: 'f@gmail.com', phone: '1234567890'}
            buyersInfo.total = addTotal();
    
            buyersInfo.items = cartList.map(cartItem => {
                const id = cartItem.item.id;
                const nombre = cartItem.item.name;
                const precio = cartItem.item.price * cartItem.cantidad;
                const cantidad = cartItem.cantidad
                
                return {
                    id, 
                    nombre, 
                    precio, 
                    cantidad
                }   
            }) 
            
            const db = getFirestore()
            const ordersCollection = collection (db, 'orders')
            //for each
            await addDoc( ordersCollection, buyersInfo)
    
            .then(resp => setId(resp.id))
    //if not the same dont run - if same run


            // actualizando un documento      
        //     const queryDoc = doc(db, 'items', 'KASilNli63XCkyJByarM' )
        //     updateDoc(queryDoc, { 
        //         stock: 90
        //     })
        //     .then(resp => console.log(resp))
    
        // actualizar stock, no es obligatoria, solo el que quiera. 
    
            const queryCollection = collection(db, 'productos')
            
    
            const queryUpdateStock = query(
                queryCollection, 
                where( documentId() , 'in', cartList.map(it => it.item.id) )          
            ) 
    
            const batch = writeBatch(db)
    
            await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
                })
            ))
            .catch(err => console.log(err))
            .finally(() => { 
                    setDataForm({
                        email: '',
                        phone: '',
                        name: ''
                    })
                    emptyCart()
                })    
        batch.commit()
            }

    return(

        //si tu carrito esta vacio - boton continuar comprando
        //else - display products. 
        <div>
            <h1>Cart</h1>
            <forum/>

            
        {
            (cartList.length === 0)
            
            &&
            
            <div>
                <p>No hay items en tu carrito...</p>
                

                <Link to='/'>
                    <button>Continuar comprando</button>
                </Link>
            </div>
            
        }    
            
        
        {  id !== '' && `El id de la orden es : ${id} `}
        {
         
            cartList.map((el) =>(
                <div key={el.id} >
                    <h2 >{el.title} x ({el.cantidad})</h2>
                    <p>{el.id}</p>
                    <h4>${el.price}c/u</h4>
                    {/* <p>${addPricePerItem()}</p> */}
                    <button onClick={() => deleteOne(el.id)}> X </button>
                </div>
            ))
        }
            

        
            
            
        {
            (cartList.length >= 1)
            
            &&
            <>
            {`TOTAL: $${addTotal()}`}


            <form 
                onSubmit={checkValidation}                           
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    onChange={handleChange}
                    value={dataForm.name}
                />
                <br />
                <input 
                    type='number' 
                    name='phone'
                    placeholder='tel' 
                    onChange={handleChange}
                    value={dataForm.phone}
                />
                <br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    onChange={handleChange}
                    value={dataForm.email}
                />
                <input 
                    type='email' 
                    name='validarEmail'
                    placeholder='Repetir Email' 
                    onChange={checkValidation}
                    // value={}
                />
                <br/>
                <button>Generar Orden</button>
            </form>

            <button onClick={emptyCart}>Vaciar carrito</button>
            </>
        }    
        </div>
    )
}
