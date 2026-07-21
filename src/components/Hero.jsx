import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const roles = ['Full Stack Developer', 'React Enthusiast', 'DSA with Java'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Background elements */}
      <div className="hero__bg-grid bg-grid" />
      <div
        className="hero__orb bg-gradient-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
        }}
      />
      <div
        className="hero__orb bg-gradient-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(68,138,255,0.06) 0%, transparent 70%)',
          bottom: '-50px',
          left: '-100px',
        }}
      />

      <div className="container hero__content">
        <div className="hero__layout">

          {/* Left: Text */}
          <div className="hero__text">
            <div className="hero__greeting animate-fadeInUp delay-1">
              <span className="hero__wave">👋</span> Hello, I'm
            </div>

            <h1 className="hero__name animate-fadeInUp delay-2">
              Utkarsh
            </h1>

            <div className="hero__role animate-fadeInUp delay-3">
              I'm a <span className="hero__typed">{text}<span className="hero__cursor">|</span></span>
            </div>

            <p className="hero__desc animate-fadeInUp delay-4">
              Passionate about building robust applications and solving
              real-world problems through elegant code.
            </p>

            <div className="hero__actions animate-fadeInUp delay-5">
              <Link to="contact" smooth={true} duration={600} offset={-80}>
                <button className="btn-primary">
                  Get In Touch
                  <HiArrowDown />
                </button>
              </Link>
              <Link to="projects" smooth={true} duration={600} offset={-80}>
                <button className="btn-outline">View Projects</button>
              </Link>
              <a
                href="https://drive.google.com/file/d/17dONeS8EunxmfhSb9D5Y6mPj7GIhiAEQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
                <HiDownload />
              </a>
            </div>

            <div className="hero__socials animate-fadeInUp delay-6">
              <a href="https://linkedin.com/in/utkarshds" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/utkarsh1480" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:utkarsh1480759@gmail.com" className="hero__social" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          {/* <div className="hero__image-wrapper animate-fadeInUp delay-4">
            <div className="hero__image-glow" />
            <div className="hero__image-card">
              <img
                src={profileImg}
                alt="Utkarsh - Full Stack Developer"
                className="hero__profile-img"
              />
            </div>
          </div> */}

        </div>
      </div>

      <div className="hero__scroll-indicator animate-fadeInUp delay-8">
        <Link to="about" smooth={true} duration={600} offset={-80}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-dot" />
          </div>
        </Link>
      </div>
    </section>
  );
}
