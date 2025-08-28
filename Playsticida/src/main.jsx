
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from '../pages/Home/index.jsx'
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>
);
