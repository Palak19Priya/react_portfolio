import React, { useState } from 'react';

function Education() {
  const [items] = useState([
    { side: 'left', title: 'B.Tech CSE', org: 'Jain (Deemed-to-be University), Bangalore', period: 'CGPA: 8.4', details: '4th year, 2022-26' },
    { side: 'right', title: 'std. 12th', org: 'DAV Public School, Patna', period: 'CBSE Percentage: 82.6%', details: '2022' },
    { side: 'left', title: 'std. 10th', org: 'Radiant International School', period: 'CBSE Percentage: 91.8%', details: '2020' },
  ]);

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {items.map((it, idx) => (
            <div key={idx} className={`timeline-item ${it.side}`}>
              <span className="timeline-dot"></span>
              <div className="timeline-card">
                <h3 style={{ margin: 0 }}>{it.title}</h3>
                <p style={{ margin: '0.25rem 0', color: '#6d6a7c' }}>{it.org}</p>
                {it.period ? <p style={{ margin: '0.25rem 0', fontWeight: 600 }}>{it.period}</p> : null}
                {it.details ? <p style={{ margin: 0 }}>{it.details}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;


