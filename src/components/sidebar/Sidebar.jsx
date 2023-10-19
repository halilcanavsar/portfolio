import Links from './links/Links';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default Sidebar;
