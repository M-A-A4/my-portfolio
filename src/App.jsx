
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "SpendSmart",
    category: "PERSONAL FINANCE",
    description:
      "A personal finance application for managing expenses and spending.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/M-A-A4/SpendSmart",
    live: "https://spend-smart-kappa-three.vercel.app/",
  },
  {
    number: "02",
    title: "Habit Tracker",
    category: "PRODUCTIVITY",
    description:
      "An application for tracking daily habits and building consistent routines.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/M-A-A4/habit-tracker",
    live: "https://habit-tracker-bidn.vercel.app/",
  },
  {
    number: "03",
    title: "React Task Manager",
    category: "TASK MANAGEMENT",
    description:
      "A task management application with task editing, deletion, priorities, and validation.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/M-A-A4/react-task-list",
    live: "",
  },
  {
    number: "04",
    title: "MyPatientHUB",
    category: "HEALTHCARE",
    description:
      "A healthcare platform for discovering doctors, clinics, pharmacies, and marketplace services.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/M-A-A4/Final-MyPatientHUB",
    live: "https://m-a-a4.github.io/Final-MyPatientHUB/",
  },
];

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        MA<span>.</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className="header-button">
        Let's Talk <span>↗</span>
      </Link>
    </header>
  );
}

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span>Muqadas</span>
            <br />
            Ahmadzai.
          </h1>

          <h2>Frontend Developer & React Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web
            applications. I enjoy turning ideas into useful digital
            experiences with React, JavaScript, and TypeScript.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              Explore My Work <span>↗</span>
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/M-A-A4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <span className="social-divider">/</span>
            <Link to="/about">About Me ↗</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>developer.jsx</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>
              <p className="code-indent">
                name: <span className="code-green">"Muqadas"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-green">"Frontend Developer"</span>,
              </p>
              <p className="code-indent">
                skills: [
                <span className="code-green">"React"</span>,{" "}
                <span className="code-green">"TypeScript"</span>],
              </p>
              <p className="code-indent">
                passion: <span className="code-green">"Building for the web"</span>,
              </p>
              <p>{"};"}</p>
              <p className="code-comment">
                // Always learning, always building.
              </p>
            </div>

            <div className="code-card-footer">
              <span className="footer-status">
                <span className="status-dot"></span> Ready to build
              </span>
              <span>React + JavaScript</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✳</span>
            <div>
              <strong>Clean UI</strong>
              <small>Thoughtful design</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">{"</>"}</span>
            <div>
              <strong>React Developer</strong>
              <small>Building web apps</small>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I've built</h2>
          </div>

          <Link to="/projects" className="text-link">
            View all projects ↗
          </Link>
        </div>

        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>
          About <span>Me</span>
        </h1>
        <p>
          A little about my journey, my interests, and the work I love
          doing.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <p className="eyebrow">WHO I AM</p>
          <h2>Building useful things for the web.</h2>
          <p>
            I'm Muqadas Ahmadzai, a developer interested in creating
            responsive, accessible, and user-friendly web applications.
            I enjoy learning new technologies and solving problems
            through code.
          </p>
          <p>
            Through my projects, I have practiced component-based
            development, responsive styling, form validation, and
            working with modern React tools.
          </p>
        </div>

        <div className="about-card about-highlight">
          <div className="about-symbol">{"{ }"}</div>
          <h3>My approach</h3>
          <p>
            Learn continuously, write clear code, pay attention to
            details, and create experiences that are easy to use.
          </p>
          <Link to="/projects" className="text-link">
            See my projects ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building interfaces and interactive experiences.",
      skills: ["HTML", "CSS", "JavaScript", "React", "React Router"],
    },
    {
      title: "Languages & Frameworks",
      description: "Technologies used across my projects.",
      skills: ["TypeScript", "JavaScript", "React", "Vite"],
    },
    {
      title: "Styling & UI",
      description: "Creating clean, responsive layouts.",
      skills: ["CSS3", "Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"],
    },
    {
      title: "Tools & Workflow",
      description: "Developing, managing, and deploying projects.",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vercel", "Netlify"],
    },
  ];

  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h1>
          My <span>Skills</span>
        </h1>
        <p>
          Technologies and tools I use to build and deploy web
          applications.
        </p>
      </section>

      <section className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h2>{group.title}</h2>
            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>

      <div className="tech-list">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub Code ↗
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link-live"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="eyebrow">MY PORTFOLIO</p>
        <h1>
          Selected <span>Projects</span>
        </h1>
        <p>
          A selection of applications I've worked on. Explore the source
          code or open a live demo where available.
        </p>
      </section>

      <section className="project-grid all-projects">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </section>
    </main>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:muqadasahmadzai2022@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="eyebrow">LET'S CONNECT</p>
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Have a project idea or an opportunity? Send me a message.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow">CONTACT DETAILS</p>
          <h2>Let's build something meaningful.</h2>
          <p>
            I'm interested in learning, collaborating, and exploring
            opportunities to grow as a developer.
          </p>

          <a
            href="https://github.com/M-A-A4"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">GH</span>
            <span>
              <small>GITHUB PROFILE</small>
              <strong>github.com/M-A-A4 ↗</strong>
            </span>
          </a>

          <div className="contact-item">
            <span className="contact-icon">@</span>
            <span>
              <small>EMAIL</small>
              <strong>Replace the email placeholder</strong>
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project or opportunity..."
            required
          ></textarea>

          <button type="submit" className="primary-button">
            Prepare Email <span>↗</span>
          </button>

          <p className="form-note">
            This opens your default email application with your message
            prepared. Replace YOUR_EMAIL@example.com in App.jsx with
            your real email address first.
          </p>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Muqadas Ahmadzai. Built with React.
      </p>

      <a
        href="https://github.com/M-A-A4"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
