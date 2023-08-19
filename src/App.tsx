import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Updated import
import ApiComponent from './ApiComponent';
import ChartComponent from './ChartComponent';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">API Data</Link>
            </li>
            <li>
              <Link to="/chart">Chart</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Updated: Use Routes component */}
          <Route path="/api" element={<ApiComponent />} /> {/* Updated: Use the 'element' prop */}
          <Route path="/chart" element={<ChartComponent />} /> {/* Updated: Use the 'element' prop */}
          <Route path="/" element={<h2>Home</h2>} /> {/* Updated: Use the 'element' prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
