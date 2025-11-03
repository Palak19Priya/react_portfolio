import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="cards">
          <div className="card">
            <img src="https://www.fhoke.com/wp-content/uploads/2023/08/10-Best-Blog-Designs.webp" alt="Project 1" />
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>Book Blog</h3>
              <p>A responsive blogging platform for book readers with secure user login/authentication. Used AI tools like Cursor AI to gain efficiency in the development process. Integrated a MongoDB database for dynamic storage of user posts and ML assistance to enhance the writing experience.</p>
              <p className="tech">Tech: HTML, CSS, JavaScript, MongoDB, ML
              </p>
              <div className="card-links">
                <a href="https://github.com/Palak19Priya/Book-Blog" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://biglinden.com/wp-content/uploads/2023/05/editorial-blog-post-layout-universities-web-design-inspiration-for-university-websites-1024x444.webp" alt="Project 2" />
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>UniChoice</h3>
              <p>Designed and developed a responsive web app to help students find suitable universities. Feature of filtering universities using dynamic JavaScript-based filters. Prioritized UX and intuitive UI using JS for smoother interactions.</p>
              <p className="tech">Tech: HTML, CSS, JavaScript, PHP, MySQL</p>
              <div className="card-links">
                <a href="https://github.com/Palak19Priya/UniChioce" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.prismic.io/milanote/8b08a908-aea5-4b70-9883-371e2a6f65d6_Novel-moodboard-example.png?auto=compress%2Cformat&w=1140" alt="Project 3" />
            <div className="card-body">
              <h3 style={{ marginTop: 0 }}>Novel Nook</h3>
              <p>Developed an e-commerce site platform with user authentication and product listing. Connected MySQL for user and inventory management with PHP backend logic. Ensured mobile responsiveness and consistent design across pages.</p>
              <p className="tech">Tech: HTML, CSS, JavaScript, PHP, MySQL</p>
              <div className="card-links">
                <a href="https://github.com/Palak19Priya/Novel_nook" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
