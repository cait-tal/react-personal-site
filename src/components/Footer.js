import '../styles/Footer.css';
import { SiIndeed } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer(){

    return (
        <>
        <div className="footer-icons">
        <a href='#' className='link-text footer-icon'>
          <FaGithub />
        </a>
        <a href='#' className='link-text footer-icon'>
          <FaLinkedin />
        </a>
        <a href='#' className='link-text footer-icon'>
          <SiIndeed />
        </a>
      </div>
              <span className='link-text copyright-text'>
              &#169; {new Date().getFullYear()} Caitlin Talerico
            </span>
            </>
    )
}