function listItems(items) {
  if (!items || items.length === 0) {
    return '<li>No entries provided.</li>';
  }

  return items.map((item) => `<li>${item}</li>`).join('\n');
}

function generateHTML(data) {
  const {
    name,
    profession,
    location,
    email,
    bio,
    skills,
    projects,
    linkedin,
    github
  } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name} | Portfolio</title>
  <style>
    :root {
      --primary: #1f3c88;
      --accent: #4cafef;
      --light: #f6f8fb;
      --dark: #1a1a1a;
      --card: #ffffff;
      --border: #dbe3ee;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: var(--light);
      color: var(--dark);
      line-height: 1.6;
    }

    header {
      background: linear-gradient(135deg, var(--primary), #12285f);
      color: white;
      padding: 3rem 1.5rem;
      text-align: center;
    }

    header h1 {
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }

    header p {
      margin: 0.25rem 0;
      font-size: 1.05rem;
    }

    nav {
      background: white;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 10;
    }

    nav ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0.75rem 1rem;
      gap: 1rem;
    }

    nav a {
      text-decoration: none;
      color: var(--primary);
      font-weight: bold;
    }

    main {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 1.25rem 3rem;
    }

    section {
      background: var(--card);
      margin-bottom: 1.5rem;
      padding: 1.5rem;
      border-radius: 14px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--border);
    }

    h2 {
      color: var(--primary);
      margin-top: 0;
      border-bottom: 2px solid var(--accent);
      padding-bottom: 0.5rem;
      display: inline-block;
    }

    ul {
      padding-left: 1.25rem;
    }

    .contact-links a {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      color: var(--primary);
      text-decoration: none;
      font-weight: bold;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
    }

    .info-card {
      background: #f8fbff;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1rem;
    }

    footer {
      text-align: center;
      padding: 1.5rem;
      color: #555;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${name}</h1>
    <p>${profession}</p>
    <p>${location}</p>
    <p><a href="mailto:${email}" style="color:white;">${email}</a></p>
  </header>

  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <div class="info-grid">
        <div class="info-card">
          <strong>Name:</strong>
          <p>${name}</p>
        </div>
        <div class="info-card">
          <strong>Profession:</strong>
          <p>${profession}</p>
        </div>
        <div class="info-card">
          <strong>Location:</strong>
          <p>${location}</p>
        </div>
      </div>
      <p>${bio}</p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        ${listItems(skills)}
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <ul>
        ${listItems(projects)}
      </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <div class="contact-links">
        <a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:${email}">Email Me</a>
      </div>
    </section>
  </main>

  <footer>
    <p>Generated with the Portfolio Generator CLI.</p>
  </footer>
</body>
</html>`;
}

module.exports = generateHTML;
