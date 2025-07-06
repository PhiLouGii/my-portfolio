import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p>Email: pgiibwa04@gmail.com</p>
      <p>GitHub: <a href="https://github.com/PhiLouGii">github.com/PhiLouGii</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/philippa-giibwa-38886824a">linkedin.com/in/philippa-giibwa</a></p>
    </section>
  );
};

export default Contact;