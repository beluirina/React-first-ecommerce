import './App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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
