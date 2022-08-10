import * as React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
 
export default function App() {
  let className = 'menu';
  return (
    <div>
      <h1>Menu</h1>
      <nav>
        <ul className={className}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <a href="#">Sub-menu </a>
            <ul>
              <li>
                <a href="#">Exercício 01</a>
              </li>
              <li>
                <a href="#">Exercício 02</a>
              </li>
              <li>
                <a href="#">Exercício 03</a>
              </li>
              <li>
                <a href="#">Exercício 04</a>
              </li>
              <li>
                <a href="#">Exercício 05</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <br /> <br />
      <hr />
      <Outlet />
    </div>
  );
}
