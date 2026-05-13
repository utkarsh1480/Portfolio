import { FaGraduationCap, FaCertificate, FaAws } from 'react-icons/fa';
import {
  SiCisco,
} from 'react-icons/si';
import './Education.css';

const coursework = [
  'Database Management Systems',
  'Operating Systems',
  'Software Engineering',
  'Web Development',
  'Cloud Computing',
  'Fundamentals Of Algorithms',
];

const certifications = [
  { icon: <SiCisco />, name: 'Computer Networking', provider: 'Cisco' },
  { icon: <FaAws />, name: 'AWS Cloud Practitioner', provider: 'Amazon' },
  { icon: <FaCertificate />, name: 'SQL for Web Dev', provider: 'Online' },
  { icon: <FaCertificate />, name: 'Data Structures & Algo', provider: 'Online' },
  { icon: <FaCertificate />, name: 'Core Java', provider: 'Online' },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Journey</h2>

        {/* Degree card */}
        <div className="education__degree card animate-fadeInUp delay-1">
          <div className="education__degree-icon">
            <FaGraduationCap />
          </div>
          <div className="education__degree-info">
            <span className="education__degree-badge">B.Tech</span>
            <h3 className="education__degree-title">
              Computer Science & Engineering (Data Science)
            </h3>
            <p className="education__degree-period">November 2020 — Present</p>

            <h4 className="education__coursework-title">Relevant Coursework</h4>
            <div className="education__coursework-grid">
              {coursework.map((c, i) => (
                <span className="education__coursework-tag" key={i}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="education__certs">
          <span className="section-label">Online Certifications</span>
          <div className="education__certs-grid">
            {certifications.map((cert, i) => (
              <div
                className={`education__cert card animate-scaleIn delay-${i + 1}`}
                key={i}
              >
                <span className="education__cert-icon">{cert.icon}</span>
                <div>
                  <h4 className="education__cert-name">{cert.name}</h4>
                  <p className="education__cert-provider">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
