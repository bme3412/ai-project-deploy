// components/AIProject.js
import React from "react";
import Link from "next/link";

const AIProject = ({ title, description, imageUrl, demoUrl, githubUrl, detailsUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="links">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Link href={detailsUrl} legacyBehavior>
          <a className="more-details-btn">
            <span className="more-details-text">Details</span>
            <span className="plus-sign">+</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AIProject;