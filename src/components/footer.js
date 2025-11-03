import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <span>© {year} Portfolio</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;


