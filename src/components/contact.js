import React from 'react';

function Contact() {
  const contact = {
    phone: '8102578561',
    email: 'palak19priya@gmail.com',
    github: 'https://github.com/Palak19Priya',
    linkedin: 'https://www.linkedin.com/in/palak-priya-9032aa25a/'
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-item"><strong>Phone</strong><br />{contact.phone || '—'}</div>
          <div className="contact-item"><strong>Email</strong><br />{contact.email || '—'}</div>
          <div className="contact-item"><strong>GitHub</strong><br />{contact.github ? <a href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a> : '—'}</div>
          <div className="contact-item"><strong>LinkedIn</strong><br />{contact.linkedin ? <a href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a> : '—'}</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
