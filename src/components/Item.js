import { useEffect, useState } from 'react';
import { ItemList } from './ItemList'
//proviene de una Promise - que los resuelva en tiempo diferito SETTIMEOUT de 2 segundos para emular retrasos de red

const task = new Promise((res, rej) => {
    let condition = true

    if (condition) {
        setTimeout(() => {
            res(ItemList)
        }, 2000)
    } else {
        setTimeout(() => {
            rej('Error 404')
        }, 2000)
    }
});

function Item() {
    const [ItemList, setProductos] = useState([])
    //desarollar la vista de un item y es de tipo {id, title, price, pictureUrl}
    useEffect(() => {
        task
        .then((res) => console.log(res))
        .catch((err) => console.error(`error: ${err}`))

    }, [])//dependencia/filtro del array vacio para que se ejecute solo una vez

    console.log(ItemList)
    return (
        <div>
            { ItemList.map(ItemsList => <li>{ItemsList.category}</li>) }
        </div>
    )
}


export default Item