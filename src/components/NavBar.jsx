import CartWidget from './CartWidget.jsx';

const  Navbar= ()=>{
    
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "20px"  }}>
  <a className="navbar-brand" href="#">Estacion Bebe</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="#">Accessorios</a>
      </li>
    </ul>
  </div>
  <CartWidget/>
</nav>
)
}

/*
return <>
    <h1>Estacion Bebe</h1>
        <p>Todos los productos</p>
        <p>Huggies</p>
        <p>Pampers</p>
        <p>Estrella</p>
        <p>Babysec</p>
        <p>Accessorios</p>
</>
*/
export default Navbar;