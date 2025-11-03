import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <button
        aria-label="Toggle navigation"
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
      </button>
      <ul className={open ? 'nav-links open' : 'nav-links'} onClick={() => setOpen(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
