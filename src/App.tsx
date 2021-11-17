import React from 'react';
import {
  BrowserRouter as BRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Repos from './pages/Repos';

export const App: React.FC = () => (
  <BRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Repos />} />
    </Routes>
  </BRouter>
)