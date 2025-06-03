import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import FanMessageWall from './components/FanMessageWall';
import MemeSection from './components/MemeSection';

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memes" element={<MemeSection />} />
        <Route path="/fan-wall" element={<FanMessageWall />} />
      </Routes>
    </>
  );
}

export default App;
