import {
  FaJava, FaHtml5, FaJs, FaCss3Alt, FaReact,
  FaBootstrap, FaGitAlt, FaAws, FaDocker, FaDatabase,
} from 'react-icons/fa';
import {
  SiMysql, SiMongodb, SiSpring, SiPostman,
  SiGooglecloud, SiIntellijidea, SiTypescript,
  SiNodedotjs, SiTailwindcss, SiLinux,
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages & Databases',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 40 },
      { name: 'JavaScript', icon: <FaJs />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 60 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <FaReact />, level: 70 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 80 },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 82 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 90 },
      { name: 'Docker', icon: <FaDocker />, level: 60 },
      { name: 'Postman', icon: <SiPostman />, level: 85 },
      { name: 'IntelliJ', icon: <SiIntellijidea />, level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="skills__categories">
          {skillCategories.map((cat, i) => (
            <div className={`skills__category animate-fadeInUp delay-${i + 2}`} key={i}>
              <h3 className="skills__category-title">{cat.title}</h3>
              <div className="skills__grid">
                {cat.skills.map((skill, j) => (
                  <div className="skills__item" key={j}>
                    <div className="skills__item-icon">{skill.icon}</div>
                    <div className="skills__item-info">
                      <div className="skills__item-header">
                        <span className="skills__item-name">{skill.name}</span>
                        <span className="skills__item-level">{skill.level}%</span>
                      </div>
                      <div className="skills__bar">
                        <div
                          className="skills__bar-fill"
                          style={{ '--skill-level': `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
