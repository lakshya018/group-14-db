import './App.css';
// import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// import Dashboard from './Components/Dashboard/Dashboard';
import Trade from './Components/Trade/Trade';

function App() {
  // const [drawer, setDrawer] = useState(false)

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <div className='container'>
      {/* <Dashboard /> */}
      <Trade />
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
