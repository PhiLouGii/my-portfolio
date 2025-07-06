import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        I’m a Full-Stack Developer, published author, and visual artist passionate about
        building inclusive tech, telling compelling stories, and leading with purpose.
      </p>
    </section>
  );
};

export default About;