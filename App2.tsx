import * as React from 'react';
import './style.css';
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}