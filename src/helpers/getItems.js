import itemList from "./itemList";

 const getItems = new Promise((res, rej) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            res(itemList)
        }, 2000);
    } else {
        rej( /* Manejo de Error */ );
    }        
})
export default getItems