import CartContextProvider from "../../context/CartContext";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    doc, 
    updateDoc, 
    query, 
    where, 
    documentId, 
    writeBatch, 
    getDocs 
} from 'firebase/firestore'
import { useState } from "react";


const Cart = () => {

    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })
    const { cartList, emptyCart, addTotal, deleteOne } = CartContextProvider()

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

    const handleChange = (event) => {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    console.log(dataForm);
    return <div>
            {id !== '' && `El id de la orden es : ${id} ` }
            <br />
            {cartList.length !== 0 ?<>
                {cartList.map(produ => <div>
                    <li>{produ.name} precio: {produ.price} cantidad: {produ.cantidad}</li>
                    <button onClick={() => deleteOne(produ.item.id)}>x</button>
                </div> ) }
            {`la suma es ${addTotal()}`}
            <br/>
                
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
                        name='validarEmail'
                        placeholder='Repetir Email' 
                        onChange={handleChange}
                        //value={}
                    />
                    <br/>
                    <button>Generar Orden</button>
                </form>
            </> 
            :
            <> 
                <label>no hay producto vaya ya a comprar</label>
                <br />
                <button onClick={emptyCart} >Vaciar Carrito</button>
            </> 
        
            }
               
        </div>;
    };

export default Cart;
