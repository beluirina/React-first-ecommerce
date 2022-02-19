import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const  Navbar= ()=>{
    const { cantidad } = useCartContext()
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
      <li>
        <NavLink to='/category/Bodys' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link disabled'} >
          Bodys
        </NavLink> 
      </li>
      <li>
        <NavLink to='/category/Lenceria' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link disabled'} >
          Lenceria
        </NavLink>
      </li>
    </ul>
  </div>
  <NavLink to='/cart'>
    { cantidad() !== 0 && cantidad()}
    <img src="/shopping-cart.png"  />
  </NavLink>
</nav>
)
}

export default Navbar;