const itemList = [
    //desarollar vista usando un array de items y un map
    { id: '1', title: 'rojo', category: 'body', price: 1000, img: '//' },
    { id: '2', title: 'estrellado ', category: 'body', price: 2000, img: '//' },
    { id: '3', title: 'rojo', category: 'corpino', price: 1000, img: '//' },
    { id: '4', title: 'negro', category: 'corpino', price: 1000, img: '//' },
    { id: '5', title: 'negro', category: 'listones', price: 800, img: '//' },
    { id: '6', title: 'rojo', category: 'push up', price: 1000, img: '//' },
    { id: '7', title: 'rojo', category: 'bralette', price: 1000, img: '//' },
    { id: '8', title: 'rojo', category: 'cullot', price: 1000, img: '//' }
];
//pongo task en appjs?
export const task = new Promise((res, rej) => {
        let condition = true;
        if (condition) {
            setTimeout(() => {
                res(itemList)
            }, 2000);
        } else {
            rej( /* Manejo de Error */ );
        }        
})
