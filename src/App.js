import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './components/ItemListConteiner/Item';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>         
        <ItemListContainer/>
    </div>
  );
}

export default App;
