import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Philippa Louise Giibwa</h1>
      <p>Full-Stack Developer | Visual Artist | Writer</p>
    </header>
  );
};

export default Header;

