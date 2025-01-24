import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { Linke } from 'lucide-react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon bg-white">
          <a href="https://github.com/shreeup" target="_blank">
            {/* <img
              src="/assets/github.svg"
              alt="github"
              className="w-full h-full"
            /> */}
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        <div className="social-icon bg-white" target="_blank">
          <a href="https://www.linkedin.com/in/shreeup/" target="_blank">
            {/* <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-full h-full"
            /> */}
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © {new Date().getFullYear()} Shree. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
