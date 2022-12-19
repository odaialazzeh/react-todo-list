import React from 'react';
import { createRoot } from 'react-dom/client';
import './functionBased/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './functionBased/components/Navbar';
import Home from './functionBased/pages/Home';
import About from './functionBased/pages/About';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
