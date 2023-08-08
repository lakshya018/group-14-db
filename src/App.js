import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useAuth0 } from '@auth0/auth0-react';
import AppState from './context/appState';
import Securities from './Components/Securities/Securities';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <AppState>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/securities" element={<Securities />} />
          </Routes>

        </div>
      </AppState>

    </BrowserRouter>

  );
}

export default App;
