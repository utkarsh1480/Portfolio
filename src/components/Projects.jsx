import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectBlogify from '../assets/project_blogify.png';
import projectWebScanner from '../assets/project_webscanner.png';
import projectIntelliview from '../assets/project_intelliview.png';
import projectHotelBooking from '../assets/project_hotelbooking.png';
import projectUrlShortener from '../assets/project_urlshortener.png';
import projectSqlLab from '../assets/project_sqllab.png';
import projectScatch from '../assets/project_scatch.png';
import projectNumGuess from '../assets/project_numguess.png';
import projectHealthcare from '../assets/project_healthcare.png';
import './Projects.css';

const projects = [
  {
    title: 'Blogify',
    description:
      'A full-featured blog platform where users can create, edit, and publish blog posts with a rich editor and user authentication.',
    image: projectBlogify,
    tags: ['EJS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/utkarsh1480/Blogify',
    live: 'https://blogify-atna.vercel.app/',
    category: 'Full Stack',
  },
  {
    title: 'Web Scanner',
    description:
      'A comprehensive web app that analyzes website performance, SEO, security, and mobile responsiveness using Google PageSpeed Insights API.',
    image: projectWebScanner,
    tags: ['React', 'Vite', 'JavaScript', 'REST API'],
    github: 'https://github.com/utkarsh1480/Web-Scanner',
    live: 'https://web-scanner-theta.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'Intelliview',
    description:
      'An AI-driven interview preparation platform that helps candidates practice mock interviews with real-time AI feedback and assessment.',
    image: projectIntelliview,
    tags: ['React', 'AI', 'Node.js', 'TypeScript'],
    github: 'https://github.com/utkarsh1480/Intelliview',
    live: '',
    category: 'Full Stack',
  },
  {
    title: 'Hotel & Flight Booking',
    description:
      'A MERN stack travel booking platform with authentication, trip listings, booking management, and payment integration.',
    image: projectHotelBooking,
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/utkarsh1480/hotel-flight-booking-platform',
    live: '',
    category: 'Full Stack',
  },
  {
    title: 'URL Shortener',
    description:
      'A URL shortening service built with the MERN stack, featuring link analytics, click tracking, and a clean dashboard interface.',
    image: projectUrlShortener,
    tags: ['EJS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/utkarsh1480/URL-Shortner-',
    live: '',
    category: 'Full Stack',
  },

  {
    title: 'Scatch',
    description:
      'An e-commerce web application with product catalog, shopping cart, user authentication, and order management.',
    image: projectScatch,
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/utkarsh1480/Scatch',
    live: '',
    category: 'Full Stack',
  },
  {
    title: 'Number Guessing Game',
    description:
      'A fun and interactive number guessing game with hints, score tracking, and attempts counter. Built with vanilla JavaScript.',
    image: projectNumGuess,
    tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
    github: 'https://github.com/utkarsh1480/Number-guessing-Game',
    live: 'https://guessing-game-rust-two.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'Healthcare Website',
    description:
      'A healthcare platform connecting patients with doctors, featuring appointment booking, medical services, and doctor profiles.',
    image: projectHealthcare,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/utkarsh1480/Healthcare-Website',
    live: '',
    category: 'Frontend',
  },
];

const categories = ['All', 'Full Stack', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          A selection of projects that showcase my skills and creativity.
        </p>

        {/* Filter buttons */}
        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''
                }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((p, i) => (
            <div
              className={`projects__card animate-fadeInUp delay-${(i % 4) + 2}`}
              key={p.title}
            >
              <div className="projects__card-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="projects__card-overlay">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-btn"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-btn"
                      aria-label="Live"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="projects__card-body">
                <div className="projects__card-category">{p.category}</div>
                <h3 className="projects__card-title">{p.title}</h3>
                <p className="projects__card-desc">{p.description}</p>
                <div className="projects__card-tags">
                  {p.tags.map((t, j) => (
                    <span className="projects__card-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
