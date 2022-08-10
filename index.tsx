import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Topics from './Pages/Topics';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App4 />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
