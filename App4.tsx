import * as React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Container from './Containers/Container';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <h2>About</h2>
      </Container>
      <Footer />
    </React.Fragment>
  );
}