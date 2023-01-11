import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MissionStatus from './pages/MissionStatus';

function App() {
  return (
    <div className="App">
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/missionStatus" element={<MissionStatus />} />
                    </Routes>
                </Router>
            </>
    </div>
  );
}

export default App;
