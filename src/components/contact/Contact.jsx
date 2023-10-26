import { useRef } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="textContainer">
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>halilcanavsar@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Adress</h2>
          <span>13066 New York</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+1 680 888 8888</span>
        </motion.div>
      </div>
      <div className="formContainer">
        <motion.div
          className="mailSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="500px" height="500px" viewBox="-2 2 24 24">
            <motion.path
              strokeWidth={1}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button type="submit">Send</button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
