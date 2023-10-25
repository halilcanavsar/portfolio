import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';
function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Halil Can AVSAR
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/halilcanavsar/"
            target="_blank"
            rel="noreferrer noopener
          "
          >
            <img src="./linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/halilcanavsar"
            target="_blank"
            rel="noreferrer noopener
          "
          >
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/avsarhalilcan/"
            target="_blank"
            rel="noreferrer noopener
          "
          >
            <img src="./instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
