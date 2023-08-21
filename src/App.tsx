import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApiComponent from './ApiComponent';
import ChartComponent from './ChartComponent';
import './App.css'; // Import your updated App.css file

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="navbar">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/api" className="nav-link">API Data</Link>
            </li>
            <li className="nav-item">
              <Link to="/chart" className="nav-link">Chart</Link>
            </li>
          </ul>
        </nav>

        <div className="content-container"> {/* Added div with centered content */}
          <Routes>
            <Route path="/api" element={<ApiComponent />} />
            <Route path="/chart" element={<ChartComponent />} />
            <Route path="/" element={<h2>Home</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
