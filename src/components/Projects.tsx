import React from 'react';
import styles from './Projects.module.css';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <strong>{project.title}</strong> - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
