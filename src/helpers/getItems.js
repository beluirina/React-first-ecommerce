// import itemList from "./itemList";

 const getItems = new Promise((res, rej) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            res(
                fetch('assets/Data.json')
             .then(res => res.json)
            .then(resp => console.log(resp.productos))
            )
        }, 2000);
    } else {
        rej( /* Manejo de Error */ );
    }        
})
export default getItems