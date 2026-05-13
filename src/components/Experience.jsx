import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    company: 'Unified Mentor',
    url: '  ',
    period: 'November 2024 — December 2024',
    role: 'Full Stack Developer Intern',
    bullets: [
      ''
    ],
    stacks: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },

];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Work History</h2>
        <p className="section-subtitle">
          Professional experience that shaped my career as a developer.
        </p>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div
              className={`experience__item card animate-fadeInUp delay-${i + 2}`}
              key={i}
            >
              <div className="experience__timeline-dot">
                <FaBriefcase />
              </div>

              <div className="experience__header">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience__company"
                >
                  {exp.company}
                </a>
                <span className="experience__period">{exp.period}</span>
              </div>

              <p className="experience__role">{exp.role}</p>

              <ul className="experience__bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="experience__stacks">
                {exp.stacks.map((s, j) => (
                  <span className="experience__stack-tag" key={j}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
