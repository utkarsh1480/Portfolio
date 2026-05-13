import {
  FaGlobe, FaCode, FaJava, FaGithub, FaLinkedin,
  FaServer, FaLinux, FaProjectDiagram, FaCloud,
  FaBirthdayCake, FaPhone, FaCity, FaEnvelope,
} from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import './About.css';

const interests = [
  { icon: <FaGlobe />, label: 'Software Development' },
  { icon: <FaCode />, label: 'Web Development' },
  { icon: <FaJava />, label: 'Java Programming' },
  { icon: <FaGithub />, label: 'Open Source' },
  { icon: <FaServer />, label: 'Software Engineering' },
  { icon: <FaLinux />, label: 'Linux Programming' },
  { icon: <FaProjectDiagram />, label: 'Algorithms' },
  { icon: <FaCloud />, label: 'Cloud Computing' },
];

const details = [
  { icon: <FaBirthdayCake />, label: 'Birthday', value: '8 July 2005' },
  { icon: <FaPhone />, label: 'Phone', value: '+91 9628300323' },
  { icon: <FaCity />, label: 'City', value: 'Ghaziabad, UP' },
  { icon: <FaEnvelope />, label: 'Email', value: 'utkarsh1480759@gmail.com' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>

        <div className="about__grid">
          <div className="about__linkedin-wrapper animate-slideInLeft">
            <div className="about__linkedin-card">
              <div className="about__linkedin-header">
                <FaLinkedin className="about__linkedin-icon" />
                <h3>Connect on LinkedIn</h3>
              </div>

              <div className="about__linkedin-profile">
                <img src={profileImg} alt="Utkarsh" className="about__linkedin-img" />
                <div className="about__linkedin-info">
                  <h4>Utkarsh</h4>
                  <p>Software Developer</p>
                </div>
              </div>

              <p className="about__linkedin-text">
                Let's build something amazing together! I share my thoughts on software development and tech.
              </p>

              <a
                href="https://www.linkedin.com/in/utkarshds/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__linkedin-btn"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="about__info animate-slideInRight">
            <p className="about__bio">
              Focused and enthusiastic developer with a keen interest in software
              development and Java development. Through comprehensive exposure to
              underlying concepts and applying them to various projects, my
              passion for these domains has only grown. I'm a driven individual
              who thrives on building and applying algorithms to solve real-world
              industry problems.
            </p>

            <div className="about__details">
              {details.map((d, i) => (
                <div className="about__detail" key={i}>
                  <span className="about__detail-icon">{d.icon}</span>
                  <div>
                    <span className="about__detail-label">{d.label}</span>
                    <span className="about__detail-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="about__interests">
          <span className="section-label">Interests</span>
          <div className="about__interests-grid">
            {interests.map((item, i) => (
              <div
                className={`about__interest card animate-scaleIn delay-${i + 1}`}
                key={i}
              >
                <span className="about__interest-icon">{item.icon}</span>
                <span className="about__interest-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
