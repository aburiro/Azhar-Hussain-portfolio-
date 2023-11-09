// Projects.js

import React from 'react';

const Projects = () => {
  const projectData = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
