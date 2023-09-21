// Navbar.js

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../Assets/Navbar.css';
import Footer from './Footer';

function Navbar() {
  return (
    <div className="navbar">
    <Header/>
    <Sidebar/>
    <Footer/>
    </div>
  );
}

export default Navbar;
