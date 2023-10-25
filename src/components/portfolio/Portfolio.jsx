import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'IctihatAra',
    img: './ictihatara.png',
    description:
      'Co-founded and developed İctihatAra, a platform designed to provide users with comprehensive search functionality for court decisions and jurisprudence, in collaboration with a partner.',
    website: 'https://ictihatara.com/',
  },
  {
    id: 2,
    title: 'RubberDuckIt',
    img: './rubberduckit.png',
    description:
      'Live chat application that helps people connect and overcome their problems with any technology altogether.',
    website: 'https://rubberduckit.netlify.app/',
  },
  {
    id: 3,
    title: 'Movie Search App',
    img: './moviesearchapp.png',
    description:
      'This is a simple web application for searching movies using the TMDB API. Users can search for movies by title and view detailed information about each movie, including its poster, release date, genres, and overview.',
    website: 'https://movie-search-app-gules.vercel.app/login',
  },

  {
    id: 4,
    title: 'Unwind Time',
    img: './unwindtime.png',
    description:
      'App that lets you connect with others to share a relaxing time or activities. Collaborated with a team of 3 developers, refactoring the legacy code, improving its efficiency, and employing Git Workflow throughout the project.',
    website: 'https://unwind-time.web.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              <a href={item.website} target="_blank">
                See Live Version
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
