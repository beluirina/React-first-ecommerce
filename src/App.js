import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './components/ItemListContainer/Item';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>         
        <ItemListContainer/>
        <Item/>
    </div>
  );
}

export default App;
