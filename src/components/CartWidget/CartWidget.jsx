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
 
    const [id, setId] = useState('')

    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: '',
        emailVerf: ''
    })


    function handleChange (event) {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    const { name, emailVerf, email, phone} = dataForm;

    function checkValidationAndIsItEmpty(){
        
        if(phone === "" || name === "" || email === "" || emailVerf === "" ){
            alert("porfavor llenar todos los campos");
            return false;
        } else if (email !== emailVerf ){            
            alert("porfavor ingresar el mismo email");
            return false;
        }
         return true;
    }

    
    const createPurchaseData = async ( e ) => {
        
        e.preventDefault()  
        
        if (checkValidationAndIsItEmpty()) {

        const db = getFirestore()
        const ordersCollection = collection (db, 'orders')
        const queryCollection = collection(db, 'productos')
        
        
        
        // Nuevo objeto    
        let buyersInfo = {} 
                buyersInfo.buyer =  dataForm //{name:'Federico',email: 'f@gmail.com', phone: '1234567890'}
                buyersInfo.total = addTotal();

        
        
            buyersInfo.items = cartList.map((cartItem)  => {
                const id = cartItem.id;
                const title = cartItem.title;
                const precio = cartItem.price * cartItem.cantidad;
                const cantidad = cartItem.cantidad
                
                return {
                    id, 
                    title, 
                    precio, 
                    cantidad
                }   
            }) 
            
            //firebase
            await addDoc( ordersCollection, buyersInfo)
            .then(resp => setId(resp.id))
            
    
            const queryUpdateStock = query(
                queryCollection, 
                where( documentId() , 'in', cartList.map(it => it.id) )          
            ) 
    
            const batch = writeBatch(db)
    
            await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                })
            ))
            .catch(err => console.log(err))
            .finally(() => { 
                    setDataForm({
                        email: '',
                        phone: '',
                        name: '',
                        emailVerf: ''
                    })
                    emptyCart()
                })

                batch.commit()

        } else {
            return
        }         
        
    }
    return(
        <div>
            <h1>Cart</h1>
            
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
                onSubmit={createPurchaseData}                           
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
                    name='emailVerf'
                    placeholder='Repetir Email' 
                    onChange={handleChange}
                    value={dataForm.emailVerf}
                />
                <br/>
                <button type="submit" onClick={createPurchaseData} >Generar Orden</button>

            </form>

            <button onClick={emptyCart}>Vaciar carrito</button>
            </>
        }    
        </div>
    )
}
