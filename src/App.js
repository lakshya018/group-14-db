import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import BondCards from './Components/BondCards/BondCards';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Home/>
      <BondCards/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
