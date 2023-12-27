import React from "react";
import { gridWrapper, gridBox, gridItem } from './project-grid.module.css'

export default function ProjectGrid({ jsonData }) {
  let projects = jsonData.content.map(project => {
    let itemKey = `${project.name}`

    return (
      <div key={itemKey} className={gridItem}>
        <a href={project.url} target='_blank' rel='noreferrer noopener'>
          <h3>{project.name}</h3>
        </a>
        <h5>Status: {project.status}</h5>
        <p>{project.description}</p>
      </div>
    );
  })

  return  <div className={gridBox}>{projects}</div>;
}
