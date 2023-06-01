import './App.css';
import Home from './pages/Home/Home'
import CardPick from './pages/CardPick/CardPick'
import Login from './pages/Login/login'
import Signup from './pages/Login/Signup/Singup'
import SpinWheel from './pages/SpinWheel/SpinWheel'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Winnings from './pages/Winnings/Winnings';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardpick' element={<CardPick/>} />
        <Route path='/spinwheel' element={<SpinWheel/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Winnings' element={<Winnings/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
