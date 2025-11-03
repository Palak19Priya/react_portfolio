import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="two-col">
          <div className="card">
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>Technical Skills</h3>
              <div className="skill-list">
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">JavaScript</span>
                <span className="pill">React</span>
                <span className="pill">Node.js</span>
                <span className="pill">Git</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>Soft Skills</h3>
              <div className="skill-list">
                <span className="pill">Problem Solving</span>
                <span className="pill">Communication</span>
                <span className="pill">Teamwork</span>
                <span className="pill">Time Management</span>
                <span className="pill">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


