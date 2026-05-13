import { useState } from 'react';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaLinkedinIn, FaGithub, FaTwitter,
} from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    label: 'Address',
    value: 'Ghaziabad, UP, India',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'utkarsh1480@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 73 900 43615',
  },
];

const socials = [
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/utkarshds/', label: 'LinkedIn' },
  { icon: <FaGithub />, url: 'https://github.com/utkarsh1480', label: 'GitHub' },
  { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your actual EmailJS credentials
    const serviceID = 'service_71yvfzq';
    const templateID = 'template_ufdt46n';
    const publicKey = 'Wn233scQgUCMrTctR';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs.send(serviceID, templateID, templateParams, { publicKey: publicKey })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I will get back to you soon.');
        setForm({ name: '', email: '', subject: '', message: '' });
        setIsSending(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="contact__grid">
          {/* Info column */}
          <div className="contact__info animate-slideInLeft">
            <div className="contact__info-cards">
              {contactInfo.map((item, i) => (
                <div className="contact__info-card" key={i}>
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <p className="contact__info-label">{item.label}</p>
                    <p className="contact__info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <h4 className="contact__socials-title">Social Profiles</h4>
              <div className="contact__socials-row">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <form className="contact__form animate-slideInRight" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
              </div>
              <div className="contact__field">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                />
              </div>
            </div>
            <div className="contact__field">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                id="contact-subject"
              />
            </div>
            <div className="contact__field">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                id="contact-message"
              />
            </div>
            <button type="submit" className="btn-primary contact__submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
              <HiPaperAirplane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
