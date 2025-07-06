import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToonPad from './pages/ToonPad';
import Leaderboard from './pages/Leaderboard';
import Docs from './pages/Docs';

function App() {

  return (
    
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToonPad" element={<ToonPad />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Docs" element={<Docs />} />
      </Routes>
     </BrowserRouter>

  )
}

export default App
