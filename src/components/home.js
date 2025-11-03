import React from 'react';
import mypic from './resPic2.jpg';

function Home() {
  return (
    <section id="home">
      <div className="container home-wrap">
        <div className="home-avatars">
          <img className="avatar" src={mypic} alt="Profile left" />
        </div>
        <div className="intro-card">
          <h1>Palak Priya</h1>
          <p className="section-subtitle">
          Computer Science and Engineering student with hands-on experience in full stack web development. Skilled in building responsive applications with secure data handling.
          <br />Quick learner with a strong interest in building user-friendly web applications. Passionate about building creative web pages and applications.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
