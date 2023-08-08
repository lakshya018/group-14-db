import './App.css';
// import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Securities from './Components/Securities/Securities';

function App() {
  // const [drawer, setDrawer] = useState(false)

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <div className='container'>
    <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/securities' element={<Securities />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
