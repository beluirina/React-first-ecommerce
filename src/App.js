import './App.css';
import Navbar from './components/NavBar.jsx';
import CartWidget from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
         <Navbar/>
         <CartWidget/>
      </div>
        <div>
           <ItemListContainer/>
        </div>
        
    </div>
  );
}

export default App;
