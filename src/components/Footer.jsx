import { FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} Utkarsh. Built with{' '}
          <FaHeart className="footer__heart" /> and React.
        </p>
        <p className="footer__credits">
          Designed & Developed by <span className="footer__name">Utkarsh</span>
        </p>
      </div>
    </footer>
  );
}
