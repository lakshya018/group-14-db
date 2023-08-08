import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import BondCards from './Components/BondCards/BondCards';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Home/>
      {
        isAuthenticated ?
        <BondCards/>
        :
        <></>
      }
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
