import { Link } from 'react-router-dom';


const  Navbar= ()=>{
    
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "20px"  }}>
    <Link to='/' className="navbar-brand">
      Candelaria Lenceria
    </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/*hacer div drop down con categorias*/}
        {/* <Link to='/productos' className="nav-link" href="#">
          Productos
        </Link> */}
      </li>
      <li className="nav-item">
        <Link to='/category/Bodys' className="nav-link" >
          Bodys
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/category/Lenceria' className="nav-link" >
          Lenceria
        </Link>
      </li>
    </ul>
  </div>
  <Link to='/cart'>
    <img src="/shopping-cart.png" alt="carrito de compras" />
  </Link>
</nav>
)
}

export default Navbar;