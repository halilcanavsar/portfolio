import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <div className="container">
      <motion.div
        className="services"
        // variants={variants}
        // initial="initial"
        animate={isInView && 'animate'}
        ref={ref}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on helping your brand grow <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
            </h1>
          </div>

          <div className="title">
            <h1>
              <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
              Business.
            </h1>
            <button>WHAT I DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>Frontend Development</h2>
            <p>
              I specialize in creating user interfaces and experiences using
              modern frontend technologies like HTML, CSS, and JavaScript
              frameworks such as React, Angular, or Vue.js.
            </p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>Backend Development</h2>
            <p>
              I'm experienced in building server-side applications and APIs
              using Node.js, Express.js, and other backend frameworks. I can
              handle databases like MongoDB, MySQL, or PostgreSQL.
            </p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>Database Management</h2>
            <p>
              I have expertise in designing, implementing, and optimizing
              databases to ensure efficient data storage and retrieval. I'm
              familiar with both relational and non-relational databases and can
              work with database management systems like MongoDB, MySQL, or
              PostgreSQL.
            </p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>Deployment Strategies</h2>
            <p>
              I can help you deploy your applications to production environments
              efficiently and securely. Whether it's setting up hosting
              services, managing server configurations, or deploying updates, I
              ensure smooth and reliable deployment processes tailored to your
              project's needs.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
