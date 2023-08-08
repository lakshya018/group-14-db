import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Securities from './Components/Securities/Securities';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/securities" element={<Securities />} />
          </Routes>

        </div>
     

    </BrowserRouter>

  );
}

export default App;
