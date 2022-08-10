import * as React from 'react';
import './style.css';
import { Link } from "react-router-dom";
 
export default function App() {
 return (
   <div>
     <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/topics">Topics</Link></li>
     </ul>
   </div>
 );
}
