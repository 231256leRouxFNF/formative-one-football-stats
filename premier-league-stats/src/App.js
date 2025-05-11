import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PlayerComparison from './pages/PlayerComparison';
import InjuryTimeline from './pages/InjuryTimeline';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app d-flex">
        <Sidebar />
        <div className="main-content p-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comparison" element={<PlayerComparison />} />
            <Route path="/injuries" element={<InjuryTimeline />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
