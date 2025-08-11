import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ToonPad from './Pages/ToonPad';
import Leaderboard from './Pages/Leaderboard';
import Docs from './Pages/Docs';
import VolumeChart from './Pages/VolumeChart';
import BTCChart from './Pages/BTCChart';
import Transactions from './Pages/Transactions';

function App() {

  return (
    
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToonPad" element={<ToonPad />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/VolumeChart" element={<VolumeChart />} />
        <Route path="/BTCChart" element={<BTCChart />} />
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
     </BrowserRouter>

  )
}

export default App
