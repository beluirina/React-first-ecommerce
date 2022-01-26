
//proviene de una Promise - que los resuelva en tiempo diferito SETTIMEOUT de 2 segundos para emular retrasos de red

function Item( { prod, loading } ) {
    console.log(prod)
    return (
        <div> 
            { ( loading )  ? ( <h2>Loading... </h2> ) : ( 
                    <div className="card" key={ prod.id } style={{ width: "18rem"  }}>
                    <img className="card-img-top" src={ prod.img } alt="Card image cap"/> 
                    <div className="card-body">
                        <h5 className="card-title">{ prod.title }</h5>
                        <p className="card-text">{ prod.category }</p>
                        <h6>{ prod.price }</h6>
                        <a href="#" className="btn btn-primary">Agregar a carrito</a>
                    </div>
                </div>
                
            )};
        </div>
    )
}


export default Item